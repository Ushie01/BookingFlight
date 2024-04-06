import { useState, useEffect } from "react";


export const useLink = (initialLink) => {
  const [link, setLink] = useState(initialLink);
  const handleClick = (item) => {
    setLink(item);
  };

  useEffect(() => {
    setLink(initialLink);
  }, [initialLink]);

  return { link, handleClick };
};

