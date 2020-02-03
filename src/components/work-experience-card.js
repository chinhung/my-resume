import React from 'react';

const fruitpay = {
  title: '高級工程師',
  org: '果物配',
  duration: '2016.08 - 2018.09（2年1個月）',
  contributions: [
    '開發、維運自有官網＆後台系統',
    '與設計師合作將官網改版',
    '串接第三方金流，完成金流服務轉移',
    'WordPress部落格維運'
  ]
};

const raisehand = {
  title: '共同創辦人＆軟體工程師',
  org: 'RaiseHand',
  duration: '2018.09 - 2019.11（1年2個月）',
  contributions: [
    '開發、維運自有app＆後台系統',
    'Sigfox物聯網串接'
  ]
};

const Item = ({ job, isEnd, children }) => (
  <>
    <div className="w3-container">
      <h5 className="w3-opacity"><b>{job.title} / {job.org}</b></h5>
      <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{job.duration}</h6>
      {children}
      {isEnd ? <br/> : <hr/>}
    </div>
  </>
);

const WorkExperienceCard = () => (
  <>
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>經歷
      </h2>
      <Item job={raisehand} isEnd={false}>
        <ul>
          {raisehand.contributions.map(contribution => <li>{contribution}</li>)}
        </ul>
      </Item>
      <Item job={fruitpay} isEnd={true}>
        <ul>
          {fruitpay.contributions.map(contribution => <li>{contribution}</li>)}
        </ul>
      </Item>
    </div>
  </>
);

export default WorkExperienceCard;