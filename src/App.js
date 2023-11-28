import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const sections = [
    { title: 'Section 1', content: 'Hii' },
    { title: 'Section 2', content: 'Good Morning' },
    { title: 'Section 3', content: 'How are you ?' },
  ];

  return (
    <div>
      <h1>Accordion App</h1>
      <Accordion sections={sections} />
    </div>
  );
};

export default App;
