import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BodyClassName from 'react-body-classname';

import PersonalCard from '../components/personal-card';
import WorkExperienceCard from '../components/work-experience-card';
import EducationCard from '../components/education-card';
import SkillCard from '../components/skill-card';

const IndexPage = () => (
  <BodyClassName className="w3-light-grey">
    <Layout>
      <SEO title="履歷表" />
      
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">
          
          <div className="w3-third">
            <PersonalCard></PersonalCard>
            <br/>
          </div>

          <div className="w3-twothird">
            <WorkExperienceCard></WorkExperienceCard>
            <SkillCard></SkillCard>
            <EducationCard></EducationCard>
          </div>

        </div>
      </div>
      
    </Layout>
  </BodyClassName>
);

export default IndexPage;
