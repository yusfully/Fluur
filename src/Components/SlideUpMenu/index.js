import {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Svg from "../Svg";
import { gsap } from "gsap";
import "./slideUp.css";

const SlideUpMenu = forwardRef(
  ({ selected, items, onSelect, onOpen, initial }, ref) => {
    const slideRef = useRef();
    const buttonRef = useRef();
    const [isOpened, setIsOpened] = useState(false);
    debugger;
    useImperativeHandle(ref, () => ({
      close() {
        setIsOpened(false);
      },
    }));
    const handleSelect = useCallback((item) => {
      debugger;
      onSelect && onSelect(item);
      setIsOpened(false);
    }, []);

    useEffect(() => {}, [selected]);

    useEffect(() => {
      isOpened && onOpen && onOpen();
    }, [isOpened]);

    useEffect(() => {
      gsap.to(slideRef.current, 0.5, {
        height: `${isOpened ? "auto" : "0"}`,
        ease: "power4.out",
      });
    }, [isOpened]);
    return (
      <div className={`${isOpened ? "isOpened" : ""} slideUp-wrapper`}>
        <div ref={slideRef} className="slideUp">
          {items &&
            items.map((item) => {
              return (
                <button
                  className={`${
                    selected === item ? "selected" : ""
                  } slideUp-button`}
                  type="button"
                  onClick={() => handleSelect(item)}
                >
                  <Svg name={`${item}`} />
                </button>
              );
            })}
        </div>
        <div
          ref={buttonRef}
          onClick={() => setIsOpened(!isOpened)}
          className="slideUp-selected"
        >
          <Svg name={`${!isOpened ? selected : "close"}`} />
        </div>
      </div>
    );
  }
);

export default SlideUpMenu;
