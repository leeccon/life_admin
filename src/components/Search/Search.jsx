import React, { useState } from "react";
import PwSearch from "./PwSearch";
import IdSearch from "./IdSearch";

const Search = () => {
  const [tab, setTab] = useState(1);

  // 페이지전환 시 사용(num값에 따라 페이지만 이동)
  const moveTab = (num) => {
    setTab(num);
  };
  return (
    <div>
      <div
        className={`tab_menu ${tab === 1 && "active"}`}
        onClick={() => moveTab(1)}
      >
        ID찾기
      </div>
      <div
        className={`tab_menu ${tab === 2 && "active"}`}
        onClick={() => moveTab(2)}
      >
        PW찾기
      </div>
      {tab === 1 && <IdSearch></IdSearch>}
      {tab === 2 && <PwSearch></PwSearch>}
    </div>
  );
};

export default Search;
