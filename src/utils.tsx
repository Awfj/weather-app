export const checkIfExpired = (requestTime: number) => {
  const currentDate = new Date().getTime();
  const expirationDate = 7.2e6;
  const isExpired = currentDate - requestTime > expirationDate;
  return isExpired;
};

export const findLocation = async (): Promise<string> => {
  const response = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
  const data = await response.json();
  const city = data.city.toLowerCase();
  return city;
};

export const getDefaultCity = async () => {
  let defaultCity = localStorage.getItem("default_city");
  if (!defaultCity) {
    defaultCity = await findLocation();
    localStorage.setItem("default_city", defaultCity);
  }
  return defaultCity;
};

export const removeExpiredData = (city: string) => {
  for (let key in localStorage) {
    if (key.includes("weather") && !key.includes(city)) {
      const requestTime = JSON.parse(localStorage[key]).requestTime;
      if (checkIfExpired(requestTime)) {
        localStorage.removeItem(key);
      }
    }
  }
};
