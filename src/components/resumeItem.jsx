import React from 'react';
import { Row, Col } from 'reactstrap';

const ResumeItem = ({item}) => (<div className="resume-item">
  <Row>
    <Col
      sm="4"
      className="resume-left">
      <p className="title">{item.title}</p>
      <p className="subtitle">{item.subtitle}</p>
      <p className="duration">{item.duration}</p>
    </Col>
    <Col
      sm="8"
      className="resume-right">
      {item.bullets.map((bullet,i) => <p key={i}>{bullet}</p>)}
    </Col>
  </Row>
</div>)

export default ResumeItem;
