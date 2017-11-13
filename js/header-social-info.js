import React from 'react';


class SocialInfo extends React.Component {
  constructor(props){
    super(props);
  }

    render(){
        return (
            <ul class="section--social">
            { this.props.work.map( (example, idx )  =>      {
                return (
                    <SocialInfoList example={example} key={idx}/>
                )            
              })
            }
          </ul>
        )
    }
}

class SocialInfoList extends React.Component {
    render() {
        let baller =  this.props.example;
         return (

          <li class="socialWrapper">
            <a class="color--skyBlue social"
               title={baller.title}
               target={baller.target}
               href={baller.href}>
              <i class={baller.classInfo}></i>
            </a>
          </li>

         )
    }

}

class Test extends React.Component {
    render() {
        let baller =  this.props.example;
         return (

          'hello'

         )
    }

}

export default SocialInfo;
export { SocialInfoList, Test }; 