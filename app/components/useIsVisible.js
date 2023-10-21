'use client'
import { useEffect, useRef, useState } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }

export function modeSwitch(ref) {
  const [ darkMode,setDarkMode ] = useState(false);

  useEffect(() => {
    
  })
}

  
//   transition-opacity
//   ease-in
//   duration-700
//   ${isVisible ? "opacity-100" : "opacity-0"}

// export default function Page() {
//     const ref1 = useRef();
//     const isVisible1 = useIsVisible(ref1);

//     const ref2 = useRef();
//     const isVisible2 = useIsVisible(ref2);

//     const ref3 = useRef();
//     const isVisible3 = useIsVisible(ref3);


//     return (
//         <>
//              <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
//                <>...your custom component here...</>
//              </div>
//              <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
//                <>...your custom component here...</>
//              </div>
//              <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
//                <>...your custom component here...</>
//              </div>
//         </>
//     )
// }
