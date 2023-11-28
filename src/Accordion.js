import React, { useState } from 'react';
import './App.css'; 

const Accordion = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`accordion-section ${activeSection === index ? 'active' : ''}`}
        >
          <div className="accordion-header" onClick={() => handleSectionClick(index)}>
            {section.title}
          </div>
          <div className="accordion-content">
            {activeSection === index && <p>{section.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
