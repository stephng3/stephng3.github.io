import React from 'react';
import ResumeSection from './resumeSection';

const resume = require('../static/resume.json');

const searcher = (filter) => resume.items.filter(item => matchItem(item,filter))

function matchItem(item,filter) {
  const searchTerms = [item.category,...item.keywords];
  const res = searchTerms.filter(term => term.indexOf(filter) === 0);
  return res.length !== 0;
}

const Resume = ({filter}) => {
  let items = searcher(filter);
  if (items.length === 0){
    items = resume.items;
  }
  const sections = Object.entries(
    items.reduce((acc,cur) => {
      if (!acc[cur.category]){
        acc[cur.category] = [];
      }
      acc[cur.category].push(cur);
      return acc;
    },{})
  );
  return (<div>
    {sections.map((section,i) => (<ResumeSection
      category={section[0]}
      items={section[1]}
      key={i}
      />)
    )}
  </div>)
}

export default Resume;
