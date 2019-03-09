import React, { Component } from 'react';

class Landing extends Component {
  render(){
    return (
      <div className="landing-page">
        <section className="hero-banner">
          <div className="wrapper">
            <h2>
              Code like you've never coded before.
            </h2>
          </div>
        </section>

        <section className="work-flow">
          <div className="flowbox">
            Prepare
          </div>
          <div className="flowbox">
            Embark
          </div>
          <div className="flowbox">
            Code
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