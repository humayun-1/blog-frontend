import React from 'react';

const DynamicHTMLComponent = (htmlString) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default DynamicHTMLComponent;
