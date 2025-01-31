import { useState } from "react";

const useRegister = () => {
  const [visiblePassword, setVisiblePassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleVisiblePassword = (key: "password" | "confirmPassword") => {
    setVisiblePassword((prevState) => {
      return { ...prevState, [key]: !prevState[key] };
    });
  };

  return { visiblePassword, handleVisiblePassword };
};

export default useRegister;
