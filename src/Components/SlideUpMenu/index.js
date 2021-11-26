import { useState, useMemo, useRef, useCallback,useEffect,forwardRef,useImperativeHandle } from "react";
import Svg from '../Svg'
import { gsap } from "gsap";
import './slideUp.css';

const SlideUpMenu = forwardRef(
  (
    { items, onSelect, onOpen },
    ref
  )=> {
  const slideRef = useRef();
  const buttonRef = useRef();
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState(0);

  useImperativeHandle(ref, () => ({
    close() {
    setIsOpened(false)
    }

  }));
  const handleSelect = useCallback((id) => {
    setSelected(id);
    setIsOpened(false);
  },[])

  useEffect(() => {
    onSelect && onSelect(selected)
  }, [selected]);

  useEffect(() => {
    (isOpened && onOpen) && onOpen()
  }, [isOpened]);

  const selectedIcon = useMemo(() => {
    const selection = items.filter(item => item.id === selected);
    return selection[0]?.name
  }, [selected, items]);

  useEffect(() => {
    gsap.to(slideRef.current, 0.5,{ height: `${isOpened ? 'auto' : '0'}`, ease: "power4.out"});
  }, [isOpened]);
  return (
    <div  className={`${isOpened ? 'isOpened' : ''} slideUp-wrapper`} >
      <div ref={slideRef} className='slideUp'>
        {
          items && items.map(item => {
            return (
            <button className={`${selected === item.id ? 'selected' : ''} slideUp-button`} type='button' onClick={() => handleSelect(item.id)}>
              <Svg name={`${item.name}`} />
            </button>
          )})
        }
      </div>
      <div ref={buttonRef} onClick={()=>setIsOpened(!isOpened)}  className='slideUp-selected'>
          <Svg name={`${!isOpened ? selectedIcon : 'close'}`} />
      </div>
    </div>
  );
})

export default SlideUpMenu;
