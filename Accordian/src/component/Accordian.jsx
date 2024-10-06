import React, { useRef, useEffect, useState } from 'react';

function Accordion({ accord, showAns, handleFaq }) {
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    // Calculate and set the height of the content based on its scrollHeight
    setContentHeight(showAns ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [showAns]);

  return (
    <div className="flex flex-col gap-3 border-red-100 border p-4">
      <div className="flex justify-between">
        <p>{accord.question}</p>
        <button onClick={handleFaq}>{showAns ? '-' : '+'}</button>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-300 ease-out`}
        style={{ maxHeight: contentHeight }}
      >
        <p>{accord.answer}</p>
      </div>
    </div>
  );
}

export default Accordion;
