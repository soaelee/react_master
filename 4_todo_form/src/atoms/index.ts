import { atom, selector } from "recoil";
/*
1. Atom만 사용할 때는 state = useRecoilValue(atom);
2. SetFn만 사용할 때는 setFn = useSetRecoilState(atom);
3. 둘 다 사용할 때는 [atom, setFn] = useRecoilState(atom);
*/

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
