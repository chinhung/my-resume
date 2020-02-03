import React from 'react';
import skills from './skills';

const Stars = ({ star }) => {
  const starIsShinys = [];
  for (let n = 1; n <= star.max; n++) {
    if (n <= star.value) {
      starIsShinys.push(true);
    } else {
      starIsShinys.push(false)
    }
  }

  return <>
    {starIsShinys.map(isShiny => <Star isShiny={isShiny}></Star>)}
  </>;
};

const Star = ({ isShiny }) => (
  isShiny ? <span className="fa fa-star w3-text-teal"></span> : <span className="fa fa-star w3-text-light-grey"></span>
);

const Item = ({ skill, isEnd, children }) => (
  <>
    <div className="w3-container">
      <h5 className="w3-opacity"><b>{skill.name}</b></h5>
      <h6><Stars star={skill.star}></Stars></h6>
      {children}
      {isEnd ? <br/> : <hr/>}
    </div>
  </>
);

const SkillCard = () => (
  <>
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-wrench fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>技能
      </h2>
      {skills.map((skill, index) => (
        <Item skill={skill} isEnd={ index === skills.length - 1 }>
          <ul>
            { skill.details ? skill.details.map(detail => <li>{detail}</li>) : null }
          </ul>
        </Item>
      ))}
    </div>
  </>
);

export default SkillCard;