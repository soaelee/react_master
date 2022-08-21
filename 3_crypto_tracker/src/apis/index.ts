const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

export const fetchCoinInfo = async (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinTickers = async (coinId: string) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
};

// floor는 내림처리, ceil은 올림처리
// 오늘부터 일주일 전 구하기
const endDate = Math.floor(Date.now() / 1000);
const startDate = endDate - 60 * 60 * 24 * 7 * 2;

export const fetchCoinHistory = async (coinId: string) => {
  console.log(startDate, endDate);
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
};
