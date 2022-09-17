import { useEffect,useState } from "react";
export const useHookInputs = (input) => {
    const [empty, setEmpty] = useState(false);
useEffect(()=>{
    setEmpty(false);
},[input]);
   return{
       empty,
       setEmpty
   }
}