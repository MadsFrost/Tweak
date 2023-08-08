import React from 'react';

const useKeyDown = (callback: () => void, keys: string[], meta?: boolean) => {
  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    const wasAnyKeyPressed = keys.some((key) => event.key === key);
    const isMetaKeyPressed = meta ? event.metaKey : true;
    
    if (wasAnyKeyPressed && isMetaKeyPressed) {
      event.preventDefault();
      callback();
    }
  }, [callback, keys, meta]);

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};

export default useKeyDown;
