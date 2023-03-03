/**
 * Convert a number of pixels to rem
 *
 * @param px      - Number in pixels
 * @return        - String with number and rem, E.g. 1rem, 0.5rem, 5.2rem
 */

const toRem = (px: number): string => {
  return `${px / 16}rem`;
};

export default toRem;
