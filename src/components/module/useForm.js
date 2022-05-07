import { useState } from "react";

const useForm = (initialData) => {
  const [data, setData] = useState(initialData);
  const handleChange = (key) => (e) => {
    const val = e.target.value;
    setData({
      ...data,
      [key]: val,
    });
  };
  return [data, handleChange];
};

export default useForm;
