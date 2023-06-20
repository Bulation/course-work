import { useEffect, useState } from 'react';

export default function usePaginate<T>(data: T[], countPerPage: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const initialPagesCount = Math.ceil(data.length / countPerPage);
  const [pagesCount, setPagesCount] = useState(initialPagesCount);
  const handlePageClick = (selectedItem: { selected: number }) => {
    setActiveIndex(selectedItem.selected);
    window.scrollTo(0, 0);
  };
  const slicedData = data.slice(activeIndex * countPerPage, (activeIndex + 1) * countPerPage);
  useEffect(() => {
    setPagesCount(Math.ceil(data.length / countPerPage));
    setActiveIndex(0);
  }, [data, countPerPage]);
  return { activeIndex, slicedData, setActiveIndex, pagesCount, setPagesCount, handlePageClick };
}
