import boto3
import StringIO
import zipfile
from botocore.client import Config
import mimetypes

s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

portfolio_bucket = s3.Bucket('portfolio.30a.blue')
build_bucket = s3.Bucket('portfoliobuild.30a.blue')

portfolio_zip = StringIO.StringIO()
build_bucket.download_fileobj('portfolioBuild30ablue.zip', portfolio_zip)


with zipfile.ZipFile(portfolio_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj,nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')