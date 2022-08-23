import { atom, selector } from "recoil";

export const minuteState = atom<number>({
  key: "minutes",
  default: 0,
});

export const hourState = selector<number>({
  key: "hours",
  get: ({ get }) => {
    return get(minuteState) / 60;
  },
  set: ({ set }, newValue) => {
    set(minuteState, newValue);
  },
});
