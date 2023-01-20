import { useState } from "react";

export const useForm = (initialState, refForm) => {
  const [state, setState] = useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setState({
      ...state,
      [name]: value,
    });

  const reset = () => {
    setState(initialState);
    refForm.current?.reset();
  };

  return [state, setState, handleChange, reset];
};

/* 
const info1 =  {name:"Alexander",img:"https:img.png"}
const info2 = {description:"description 1"}

const allInfo = {...info1,...info2}

{name:"Alexander",img:"https:img.png",description:"description 1"}
*/
