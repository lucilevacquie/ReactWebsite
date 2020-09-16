import React, { useState } from "react";
import "./accordion.scss";

const AccordionWrapper = (props) => {
  const [index, setIndex] = useState(0);
  const checkIndex = (i) => {
    if (i === index) {
      return setIndex(0);
    }
    return setIndex(i);
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion-item">
        {props.accordionData.map((item, i) => (
          <>
            <div className="accordion-title" onClick={() => checkIndex(i + 1)}>
              <p>{item.title}</p>
              <p>{item.company}</p>
            </div>
            {index === i + 1 && (
              <div className="accordion-panel">{item.text}</div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default AccordionWrapper;
