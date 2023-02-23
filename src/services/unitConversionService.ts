export const inchesToFeetInches = (value: number): string => {
  const feet: number = Math.round(value / 12);
  const inches: number = value % 12;
  return `${feet}'${inches}"`;
};
