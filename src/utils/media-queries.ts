import toRem from './to-rem';

type TSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type TBreakpoints = {
  [T in TSizes]: number;
};

const breakpoints: TBreakpoints = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1260,
  xxl: 1480,
};

/**
 * Return the media query
 *
 * @param size    - String to define the media query E.g. `sm`, `md`, `lg`, `xl`
 * @return        - String with media query E.g. `@media screen and (min-width: 48rem)`
 */

const getMQ = (size: TSizes) => {
  return `@media screen and (min-width: ${toRem(breakpoints[size])})`;
};

export default getMQ;
