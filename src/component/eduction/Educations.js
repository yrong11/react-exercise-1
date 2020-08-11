import React from 'react';
import './education.scss';
import Education from './Education';

class Educations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          year: 1990,
          title: 'I was born in Katowice',
          context:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
        },
        {
          year: 2005,
          title: 'Secondary school specializing in artistic',
          context:
            'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          year: 2009,
          title: 'First level graduation in Graphic Design',
          context:
            'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repel lat.',
        },
        {
          year: 2012,
          title: 'Second level graduation in Graphic Design',
          context: 'Ducimus, aliquam tempore autem itaque et accusantium!',
        },
      ],
    };
  }
  render() {
    return (
      <div className="educations">
        <h1>EDUCATION</h1>
        {this.state.educations.map((education) => 
          // eslint-disable-next-line react/jsx-key
          <Education
            year={education.year}
            title={education.title}
            context={education.context}
          />
        )}
      </div>
    );
  }
}

export default Educations;