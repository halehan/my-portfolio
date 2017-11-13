import React from 'react';


class SocialInfo extends React.Component {
  constructor(props){
    super(props);
  }

    render(){
        return (
            <ul class="section--social">

        <li class="socialWrapper">
          <a class="color--skyBlue social"
             title="LinkedIn Profile"
             target="_blank"
             href="https://www.linkedin.com/in/thomas-darryl-williams-3b43546/">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>

            <section className="section section--alignCentered section--description">
            
            { this.props.work.map( (example, idx )  =>      {
                return (
                    <ExampleWorkBubble example={example} key={idx}
                    openModal={this.openModal}/>
                )            
              })
            }
          </section>
          <ExampleWorkModal example={this.state.selectedExample}
              open={this.state.modalOpen} closeModal={this.closeModal}/>
          </ul>
        )
    }
}

class ExampleWorkBubble extends React.Component {
    render() {
        let baller =  this.props.example;
         return (

            <div className="section__exampleWrapper"
            onClick={ (evt) => this.props.openModal(evt, baller) }> 
            <div className="section__example">
              <img alt={baller.image.desc}
                   className="section__exampleImage"
                   src={baller.image.src}/>
              <dl className="color--cloud">
                <dt className="section__exampleTitle section__text--centered">
                  {baller.title}
                </dt>
                <dd></dd>
              </dl>
            </div>
          </div>

         )
    }

}

export default ExampleWork;
export { ExampleWorkBubble }; 