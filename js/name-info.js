import React from 'react';

class NameInfo extends React.Component {
  constructor(props){
    super(props);
  }

    render(){
      let name = 'Thomas Darryl Williams';
        return (
       
        <h1 className="color--skyBlue section__heading--largest">
             {name}
        </h1>
        
        )
    }
}

export default NameInfo; 
