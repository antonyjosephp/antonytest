import React from 'react';

const DynamicComponent = (componentName: any) => {
    return React.createElement(componentName);
};
export default DynamicComponent;
