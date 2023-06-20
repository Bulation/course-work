import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SingleValue } from 'react-select';
import { cityOptions, roomsOptions, metroOptions, districtOptions, sortList } from '../data/data';
import { IFilterState } from '../interfaces/IFilterState';
import { IFlatsData } from '../interfaces/IFlatsData';
import { ISelectChoice } from '../interfaces/ISelectChoice';
import { setFilterValue } from '../redux/slices/filterSlice';
import { FixedFilterKey } from '../types/FixedFilterKey';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export default function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [activeFastFilter, setActiveFastFilter] = useState<{
    key: string;
    value: string;
    label: string;
  }>();
  const { filterState, sortState } = useAppSelector((state) => state.filter);
  const handleSetSearchParams = (key: string, value: string) => {
    setSearchParams((searchParams) => {
      searchParams.set(key, value);
      return searchParams;
    });
  };
  const dispatch = useAppDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterValue({ [e.target.name]: e.target.value }));
    handleSetSearchParams(e.target.name, e.target.value);
  };
  const handleSelectChange = (choice: SingleValue<ISelectChoice>) => {
    if (choice?.key) {
      dispatch(setFilterValue({ [choice.key]: choice?.value }));
      handleSetSearchParams(choice.key, choice.value);
    }
  };
  const handleFastFilterChange = (
    filterObj: { key: string; value: string },
    activeFilter?: { key: string; value: string; label: string }
  ) => {
    dispatch(setFilterValue({ [filterObj.key]: filterObj.value }));
    setActiveFastFilter(activeFilter);
    handleSetSearchParams(filterObj.key, filterObj.value);
  };
  const filter = (flatsData: IFlatsData[], filterState: IFilterState) => {
    const fixedFilter = (data: IFlatsData[], key: FixedFilterKey) =>
      data.filter((flat) =>
        String(flat[key]).includes(filterState[key as keyof typeof filterState])
      );
    const rangeFilter = (data: IFlatsData[]) => {
      if (filterState.minPrice || filterState.maxPrice) {
        //check if two values together are not 0
        return data.filter(
          (flat) =>
            flat.price >= Number(filterState.minPrice) && flat.price <= Number(filterState.maxPrice)
        );
      }
      return data;
    };
    let filteredData = flatsData.slice();
    Object.keys(filterState).forEach((key) => {
      if (key === 'city' || key === 'roomsCount' || key === 'metro' || key === 'district') {
        filteredData = fixedFilter(filteredData, key);
      } else if (key === 'minPrice') {
        filteredData = rangeFilter(filteredData);
      }
    });
    return filteredData;
  };
  const [defaultValue] = useState({ value: 'Выберите', label: 'Выберите' });
  const [defaultSortValue] = useState({ value: '', label: 'По умолчанию' });
  const cityValue = filterState.city
    ? {
        value: filterState.city,
        label: cityOptions.filter((el) => el.value === filterState.city)[0].label,
      }
    : defaultValue;
  const roomValue = filterState.roomsCount
    ? {
        value: filterState.roomsCount,
        label: roomsOptions.filter((el) => el.value === filterState.roomsCount)[0].label,
      }
    : defaultValue;
  const metroValue = filterState.metro
    ? {
        value: filterState.metro,
        label: metroOptions.filter((el) => el.value === filterState.metro)[0].label,
      }
    : defaultValue;
  const homePageMetroValue = filterState.metro
    ? {
        value: filterState.metro,
        label: metroOptions.filter((el) => el.value === filterState.metro)[0].label,
      }
    : {
        value: '',
        label: 'Метро',
      };
  const districtValue = filterState.district
    ? {
        value: filterState.district,
        label: districtOptions.filter((el) => el.value === filterState.district)[0].label,
      }
    : defaultValue;
  const homePageDistrictValue = filterState.district
    ? {
        value: filterState.district,
        label: districtOptions.filter((el) => el.value === filterState.district)[0].label,
      }
    : {
        value: '',
        label: 'Районы',
      };
  const sortValue = sortState
    ? {
        value: sortState,
        label: sortList.filter((el) => el.value === sortState)[0].label,
      }
    : defaultSortValue;
  return {
    filter,
    handleInputChange,
    handleSelectChange,
    handleFastFilterChange,
    handleSetSearchParams,
    activeFastFilter,
    sortValue,
    cityValue,
    roomValue,
    homePageMetroValue,
    metroValue,
    districtValue,
    homePageDistrictValue,
  };
}
