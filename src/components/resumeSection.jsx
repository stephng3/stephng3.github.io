import React from 'react';
import ResumeItem from './resumeItem';
import { Row, Col } from 'reactstrap';

const ResumeSection = ({category, items}) => (<div className="resume-section">
  <Row>
    <p className="section-title">{category}</p>
  </Row>
  {items.map((item,i) => <ResumeItem item={item} key={i} />)}
</div>)

export default ResumeSection;
