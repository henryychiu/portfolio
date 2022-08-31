import { useEffect, useState } from 'react';

const useBrowserWindowSize = () => {
  const [browserWindowSize, setBrowserWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setBrowserWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { browserWindowSize };
};

export default useBrowserWindowSize;
