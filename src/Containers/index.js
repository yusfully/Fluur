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

const Actions = ({ label }) => {
  const [selected, setSelected] = useState();
  const [selected2, setSelected2] = useState();
  const secondSlideMenuRef = useRef();
  const firstSlideMenuRef = useRef();

  const handleSelect = (name, isFirst) => {
    if (isFirst) {
      setSelected(name);
      return;
    }
    setSelected2(name);
  };

  const list = useMemo(() => {
    if (!label) return [];
    return Object.keys(label).map((key) => {
      return key;
    });
  }, [label]);

  const selection1 = useMemo(() => {
    if (selected) return selected;
    const storage = localStorage.getItem("selection1");
    if (storage && label[storage] && !selected) return storage;
    if (list.length > 0) return list[0];
    return [];
  }, [list, selected]);

  const selection2 = useMemo(() => {
    debugger;
    if (selected) {
      if (!selected2) return label[selection1][0];
    }
    if (selected2) return selected2;
    const storage = localStorage.getItem("selection2");
    if (storage && label[selection1].includes(storage) && !selected2)
      return storage;
    if (label[selection1].length > 0) return label[selection1][0];
    return [];
  }, [selection1, selected, selected2]);

  console.log(selection1, selection2, label[selection1]);
  useEffect(() => {
    localStorage.setItem("selection1", selection1);
    localStorage.setItem("selection2", selection2);
  }, [selection1, selection2]);

  return (
    <div className="actions-cover">
      <div className="actions-left">
        <Action
          name="first"
          selected={selection1}
          ref={firstSlideMenuRef}
          onOpen={() => secondSlideMenuRef?.current.close()}
          onSelect={(item) => handleSelect(item, true)}
          items={list}
        ></Action>
      </div>
      <div className="actions-center"></div>
      <div className="actions-right">
        <Action
          name="second"
          selected={selection2}
          onSelect={(item) => handleSelect(item, false)}
          onOpen={() => firstSlideMenuRef?.current.close()}
          ref={secondSlideMenuRef}
          items={label[selection1]}
        ></Action>
      </div>
    </div>
  );
};
export default Actions;
