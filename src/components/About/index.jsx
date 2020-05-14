import React from "react"
import * as Styled from './styled'

const About = () => (
  <Styled.AboutSection id="About">

    <header>
      <h3>HELLO THERE</h3>
      <h1>We Are Glint</h1>
    </header>

    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </p>
    </div>

    <Styled.ScoreWrapper>
      <div className="ScoreBox">
        <div className="acount">127</div>
        <h5>Awards Received</h5>
      </div>
      <div className="ScoreBox">
        <div className="acount">1505</div>
        <h5>Cups of Coffee</h5>
      </div>
      <div className="ScoreBox">
        <div className="acount">109</div>
        <h5>Projects Completed</h5>
      </div>
      <div className="ScoreBox">
        <div className="acount">102</div>
        <h5>Happy Clients</h5>
      </div>
    </Styled.ScoreWrapper>

  </Styled.AboutSection>
)

export default About
