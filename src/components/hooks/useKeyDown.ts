import React from 'react';

const useKeyDown = (callback: () => void, keys: string[]) => {
    const onKeyDown = React.useCallback((event: KeyboardEvent) => {
      const wasAnyKeyPressed = keys.some((key) => event.key === key);
      if (wasAnyKeyPressed) {
        event.preventDefault();
        callback();
      }
    }, [callback, keys]);
  
    React.useEffect(() => {
      document.addEventListener('keydown', onKeyDown);
      return () => {
        document.removeEventListener('keydown', onKeyDown);
      };
    }, [onKeyDown]);
  };
    
export default useKeyDown;