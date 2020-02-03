import React from 'react';
import Image from './image';

import oneStatement from './one-statemant';

const PersonalCard = () => (
  <>
    <div className="w3-white w3-text-grey w3-card-4">

      <div className="w3-display-container">
        {/* <Image /> */}
        <img className="w3-circle" style={{width: '100%', padding: '20%'}} src="https://lh3.google.com/u/0/d/1hgxRH873Uhtf3zm3MjylPtbP3PlDKdy_=w2880-h1576-iv1"></img>
        <div className="w3-display-bottomleft w3-container w3-text-black">
          <h2>陳錦宏</h2>
        </div>
      </div>

      <div className="w3-container">
        <h5>{oneStatement}</h5>
        <hr/>
      </div>

      <div className="w3-container">
        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>軟體工程師</p>
        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>新北市</p>
        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>chinhung101@gmail.com</p>
        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>0932869706</p>
        <hr/>

        <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>我的優勢</b></p>
        <p>由於每個專案的資源與時間都是有限的，因此，測試團隊的挑戰在於，在有限的資源與時間中，測試那些最有代表性的測試案例。我的優勢在於我擁有3年的開發、維運經驗，讓我更有能力評估測試案例的代表性，並與開發、維運團隊更密切的合作。</p>
        <hr/>

        <p className="w3-large"><b><i className="fa fa-github fa-fw w3-margin-right w3-text-teal"></i>GitHub Repositories</b></p>
        <p><a target="_blank" href="https://github.com/chinhung/my-resume">This Site</a></p>
        <p><a target="_blank" href="">Hello WebdriverIO</a></p>
        <p><a target="_blank" href="">Hello WebdriverIO Docker</a></p>
        <p><a target="_blank" href="">Hello Appium</a></p>
        <p><a target="_blank" href="">Hello Newman</a></p>
        <p><a target="_blank" href="">Hello JMeter</a></p>
        

      </div>

    </div>
  </>
)

export default PersonalCard;