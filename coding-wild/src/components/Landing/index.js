import React, { Component } from 'react';

class Landing extends Component {
  render(){
    return (
      <div className="landing-page">
        <section className="hero-banner">
          <div className="wrapper">
            <h2>
              Code like you've never coded before. <br/> Code wild.
            </h2>
          </div>
        </section>

        <section className="work-flow">
          <div className="wrapper">
            <div className="flowbox">
              Prepare
            </div>
            <p className="arrow">⇒</p>
            <div className="flowbox">
              Embark
            </div>
            <p className="arrow">⇒</p>
            <div className="flowbox">
              Code
            </div>
          </div>
        </section>

        <section className="slider">
          <p>ImMma SlIDerrrrrr</p>
        </section>
      </div>
    )
  }
}

export default Landing;