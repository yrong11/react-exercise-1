import React from 'react';
import './aboutMe.scss';

class AboutMe extends React.Component {
  render() {
    const briefIntro =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.';

    return (
      <div className="about">
        <h1>ABOUT ME</h1>
        <p>{briefIntro}</p>
      </div>
    );
  }
}

export default AboutMe;
