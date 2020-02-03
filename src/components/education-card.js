import React from 'react';

const educations = [
  {
    name: '自我學習',
    duration: 'Forever'
  },
  {
    name: '資策會中壢中心 - Java雲端服務開發技術養成班',
    duration: '2016.01 - 2016.06'
  },
  {
    name: '國立成功大學 - 物理碩士',
    duration: '2012.09 - 2014.06'
  },
  {
    name: '國立成功大學 - 物理學士',
    duration: '2008.09 - 2012.06'
  },
];

const Item = ({ education, isEnd }) => (
  <>
    <div className="w3-container">
      <h5 className="w3-opacity"><b>{education.name}</b></h5>
      <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{education.duration}</h6>
      {education.desc ? <p>{education.desc}</p> : null}
      {isEnd ? <br/> : <hr/>}
    </div>
  </>
);

const EducationCard = () => (
  <>
    <div className="w3-container w3-card w3-white">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>學歷
      </h2>
      {educations.map((edu, index) => <Item education={edu} isEnd={ index === educations.length - 1 }></Item>)}
    </div>
  </>
);

export default EducationCard;