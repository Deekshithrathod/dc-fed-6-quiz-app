export const asyncGetFlagURL = async (country: string) => {
  const BASE_URL = `https://restcountries.com/v3.1/name/`;
  const res = await fetch(`${BASE_URL}/${country}`);
  const data = await res.json();

  return data[0].flags.svg;
};
