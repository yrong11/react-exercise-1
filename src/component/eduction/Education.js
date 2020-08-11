import React from 'react';
import './education.scss';

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <div className="title">
          <h2>{this.props.year}</h2>
        </div>
        <div className="education_context">
          <h2>{this.props.title}</h2>
          <p>{this.props.context}</p>
        </div>
      </div>
    );
  }
}

export default Education;
