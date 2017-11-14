import React from 'react';

class NameInfo extends React.Component {
  constructor(props){
    super(props);
  }

   name = 'Thomas Darryl Williams';

    render(){
        return (
        <h1 class="color--skyBlue section__heading--largest">
            {name}
        </h1>
        )
    }
}

export default NameInfo; 
