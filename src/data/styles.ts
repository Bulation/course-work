import { StylesConfig, GroupBase } from 'react-select';
import { ISelectChoice } from '../interfaces/ISelectChoice';

export const sortStyles: StylesConfig<ISelectChoice, false, GroupBase<ISelectChoice>> = {
  container: (baseStyles) => ({
    ...baseStyles,
    font: '600 14px/17px Inter',
    color: '#1E2123',
    width: '230px',
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: '9px 9px 9px 37px',
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: '#1E2123',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: state.isFocused ? '2px solid #664EF9CC' : '',
    color: '#1E2123',
    background: '#FFFFFF',
    boxShadow: '0px 5px 20px rgba(0, 96, 206, 0.1)',
    borderRadius: '18px',
    '&:hover': {
      background: '#664EF91A',
      cursor: 'pointer',
    },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: '#664EF9',
    width: '36px',
    height: '36px',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    color: '#1E2123',
    borderRadius: '10px',
  }),
};

export const selectStyles: StylesConfig<ISelectChoice, false, GroupBase<ISelectChoice>> = {
  container: (baseStyles) => ({
    ...baseStyles,
    font: '500 14px/17px Inter',
    color: '#686868',
    width: '150px',
    zIndex: '2',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: state.isFocused ? '2px solid #664EF9CC' : '',
    background: '#F8F8F8',
    borderRadius: '20px',
    boxShadow: state.isFocused ? '0px 5px 15px 0px #877CCA40' : '',
    '&:hover': {
      background: '#664EF91A',
      cursor: 'pointer',
    },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: '#664EF9',
    width: '36px',
    height: '36px',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    color: '#1E2123',
    borderRadius: '10px',
  }),
};

export const homeMetroStyles: StylesConfig<ISelectChoice, false, GroupBase<ISelectChoice>> = {
  container: (baseStyles) => ({
    ...baseStyles,
    font: '500 14px/17px Inter',
    color: '#686868',
    width: '150px',
    zIndex: '2',
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    paddingLeft: '35px',
    position: 'relative',
    '&:before': {
      content: 'url(/svg/metro.svg)',
      position: 'absolute',
      top: '6px',
      left: '10px',
      width: '20px',
      height: '13px',
    },
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: state.isFocused ? '2px solid #664EF9CC' : '',
    background: '#F8F8F8',
    borderRadius: '20px',
    boxShadow: state.isFocused ? '0px 5px 15px 0px #877CCA40' : '',
    '&:hover': {
      background: '#664EF91A',
      cursor: 'pointer',
    },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: '#664EF9',
    width: '36px',
    height: '36px',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    color: '#1E2123',
    borderRadius: '10px',
  }),
};
