export const makeImagePath = (id: string, format?: string) => {
  console.log(`https://image.tmdb.org/t/p/${format ?? "original"}${id}`);
  return `https://image.tmdb.org/t/p/${format ?? "original"}${id}`;
};
