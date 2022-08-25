import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const TopZIndexContext = createContext();

export const TopZIndexContextProvider = ({ children }) => {
  const [topZIndex, setTopZIndex] = useState(1);

  const getNewTopZIndex = useCallback(
    (zIndex) => {
      if (zIndex < topZIndex) {
        const newTopZIndex = topZIndex + 1;
        setTopZIndex(newTopZIndex);
        return newTopZIndex;
      } else if (zIndex > topZIndex) {
        setTopZIndex(zIndex);
        return zIndex;
      }
      return zIndex;
    },
    [topZIndex, setTopZIndex]
  );

  const value = useMemo(
    () => ({ topZIndex, getNewTopZIndex }),
    [topZIndex, getNewTopZIndex]
  );

  return (
    <TopZIndexContext.Provider value={value}>
      {children}
    </TopZIndexContext.Provider>
  );
};

export const useTopZIndexContext = () => {
  return useContext(TopZIndexContext);
};
