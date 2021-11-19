import React from 'react';

import { useCount } from './CountContext'

const ViewCounter = () => {
  // set state count from useCount
  const {
    state: {count},
  } = useCount()
  return (
    <div>
      {/* change 0 with count from context */}
      Count is {count}
    </div>
  );
}

export default ViewCounter;