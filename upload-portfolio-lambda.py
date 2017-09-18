import boto3
import StringIO
import zipfile
from botocore.client import Config
import mimetypes

def lambda_handler(event, context):

     print "Started Lambda Function"
  
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:772417646419:deployPortfolioTopic')
    
    location = {"bucketName": 'portfoliobuild.30a.blue',
                "objectKey": 'portfolioBuild30ablue.zip'
               }
    
    try:
        job = event.get("CodePipelineJob.job")
        
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
                    
        print "building portfolio from " + str(location)
                    
                    
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
        
        portfolio_bucket = s3.Bucket('portfolio.30a.blue')
        build_bucket = s3.Bucket(location["bucketName"])
    
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfolioBuild30ablue.zip', portfolio_zip)
    
    
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
                
                print "job complete!"
    
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio was deployed Successfully")
        
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline = put_job_result_success(jobId=job["id"])
            
    except:
        topic.publish(Subject="Portfolio Deployment Error", Message="Portfolio was NOT deployed Successfully")
        raise
  
    return 'Hello from Lambda'