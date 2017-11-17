import React from 'react';


class SocialInfo extends React.Component {
  constructor(props){
    super(props);
  }

    render(){
        return (
            <ul className="section--social">
            { this.props.work.map( (social, idx )  =>      {
                return (
                    <SocialInfoList social={social} key={idx}/>
                )            
              })
            }
          </ul>
        )
    }
}

class SocialInfoList extends React.Component {
    render() {
        let baller =  this.props.social;
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
