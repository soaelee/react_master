import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourState, minuteState } from "./atoms";

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourState);

  const onChangeMiutes = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };
  const onChangeHours = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value * 60);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={onChangeMiutes}
      />
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={onChangeHours}
      />
    </div>
  );
};

export default App;
