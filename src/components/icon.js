import React from 'react';


const Icon = props => (
  <span className="icon">
    <svg role="img"><use xlinkHref={`/images/svg-assets.svg#${props.iconName}`}></use></svg>
  </span>
);

export default Icon;
