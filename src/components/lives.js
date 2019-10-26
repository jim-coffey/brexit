import React from 'react';

import { getRange } from '../utils';

export default ({ lives, containerWidth, unit }) => {
  const width = unit * 2;

  return getRange(lives).map(i => (
    <image
      href="/ms-icon-70x70.png"
      height={unit * 3}
      width={width * 3}
      y={unit}
      x={containerWidth - unit - width * (i + 2) - (unit / 2) * i}
      key={i}
    />
  ));
};
