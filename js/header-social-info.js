import React from 'react';


class SocialInfo extends React.Component {
  constructor(props){
    super(props);
  }

    render(){
        return (
            <ul className="section--social">
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

          <li className="socialWrapper">
            <a className="color--skyBlue social"
               title={baller.title}
               target={baller.target}
               href={baller.href}>
              <i className={baller.classInfo}></i>
            </a>
          </li>

         )
    }

}

export default SocialInfo;
export { SocialInfoList }; 
