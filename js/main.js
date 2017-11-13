import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import SocialInfo from './header-social-info';
import Test from './Test';


const myWork = [
{
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem  Ipsum you momma",
    'image': {
        'desc': "example screenshot of a project involving code",
        'src': "images/example1.png",
        'comment': ""
    }
},
{
    'title': "Portfolio Boilerplate",
    'href': "https://example.com",
    'desc': "Lorem  Ipsum you momma two",
    'image': {
        'desc': "A Serverless Portfolio",
        'src': "images/example2.png",
        'comment': ""
    }
},
{
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem  Ipsum you momma three",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example3.png",
        'comment': ""
    }
}


]

const socialInfo = [
    {
        'title': "LinkedIn Profile",
        'target': '_blank',
        'href': "https://www.linkedin.com/in/thomas-darryl-williams-3b43546/",
        'classInfo': "fa fa-linkedin",
    },
    {
        'title': "GitHub Profile",
        'target': '_blank',
        'href': "https://github.com/halehan",
        'classInfo': "fa fa-github",
    },
    {
        'title': "Resume",
        'target': '_blank',
        'href': "ThomasDWilliams-Resume.pdf",
        'classInfo': "fa fa-file-text",
    }
    
    ]
    

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
ReactDOM.render(<SocialInfo work={socialInfo}/>, document.getElementById('social-info'));
ReactDOM.render(<Test/>, document.getElementById('test'));