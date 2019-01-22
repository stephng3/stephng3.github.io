import React from 'react';
import ResumeSection from './resumeSection';
import FuzzySearch from 'fuzzy-search';

const resume = require('../static/resume.json');
const categories = require('../static/categories.json');
const searcher = new FuzzySearch(resume.items,['keywords','category']);

const Resume = ({filter}) => {
  let items = searcher.search(filter);
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
