import { useState } from "react";

export const useShow = (initialState) => {
  const [show, setShow] = useState(initialState);
  const handleShowMessage = () => setShow(!show);

  return { show, handleShowMessage };
};
