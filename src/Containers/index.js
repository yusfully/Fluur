import React, { useState, useRef, useMemo, useEffect } from "react";
import Action from "../Components/SlideUpMenu";
import "./actions.css";
const labels = [
  {
    id: 0,
    name: "santa",
    items: [
      {
        id: 0,
        name: "santa1",
      },
      {
        id: 1,
        name: "santa2",
      },
      {
        id: 2,
        name: "santa3",
      },
    ],
  },
  {
    id: 1,
    name: "snowflake",
    items: [
      {
        id: 0,
        name: "santa2",
      },
      {
        id: 1,
        name: "santa3",
      },
      {
        id: 2,
        name: "santa1",
      },
    ],
  },
  {
    id: 2,
    name: "things",
    items: [
      {
        id: 0,
        name: "santa3",
      },
      {
        id: 1,
        name: "santa2",
      },
      {
        id: 2,
        name: "santa1",
      },
    ],
  },
];

const Actions = () => {
  const [selected, setSelected] = useState(0);
  const [selected2, setSelected2] = useState(0);
  const secondSlideMenuRef = useRef();
  const firstSlideMenuRef = useRef();

  const handleSelect = (id, isFirst) => {
    if (isFirst) {
      setSelected(id);
      return;
    }
    setSelected2(id);
  };

  const selectedSubLabel = useMemo(() => {
    const subList = labels.filter((item) => item.id === selected);
    return subList[0].items;
  }, [selected]);

  useEffect(() => {
    const item1 = labels.filter((item) => item.id === selected)[0].name;
    const item2 = selectedSubLabel.filter((item) => item.id === selected2)[0]
      .name;

    localStorage.setItem("selection1", item1);
    localStorage.setItem("selection2", item2);
  }, [selected, selected2]);

  return (
    <div className="actions-cover">
      <div className="actions-left">
        <Action
          ref={firstSlideMenuRef}
          onOpen={() => secondSlideMenuRef?.current.close()}
          onSelect={(id) => handleSelect(id, true)}
          items={labels}
        ></Action>
      </div>
      <div className="actions-center"></div>
      <div className="actions-right">
        <Action
          onSelect={(id) => handleSelect(id, false)}
          onOpen={() => firstSlideMenuRef?.current.close()}
          ref={secondSlideMenuRef}
          items={selectedSubLabel}
        ></Action>
      </div>
    </div>
  );
};
export default Actions;
