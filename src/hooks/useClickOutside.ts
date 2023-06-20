import { useState, useEffect } from 'react';

export default function useClickOutside<T>(
  dropDownNode: React.RefObject<HTMLElement>,
  initialState: T
) {
  const [isOpen, setIsOpen] = useState(initialState);
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (
        dropDownNode.current &&
        e.target instanceof HTMLElement &&
        !dropDownNode.current.contains(e.target)
      ) {
        setIsOpen(initialState);
      }
    };
    document.body.addEventListener('mousedown', handleMouseDown);
    return () => document.body.removeEventListener('mousedown', handleMouseDown);
  }, []);
  return { isOpen, setIsOpen };
}
