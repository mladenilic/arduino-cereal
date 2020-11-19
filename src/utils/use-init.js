import { useRef } from 'react';

export default (cb = () => {}) => {
  const called = useRef(false);
  if (called.current) {
    return;
  }

  cb();
  called.current = true;
};
