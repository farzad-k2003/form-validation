import { useState } from "react";
import useForm from "../module/useForm.js";
import "./Main.css";

const Main = () => {
  const [data, setData] = useForm({ email: "", password: "" });
  const [password, setPassword] = useState(true);
  const [email, setEmail] = useState(true);

  const handleSubmit = () => {
    let emailCondition =
      data?.email.includes(".com") && data?.email.includes("@");

    if (emailCondition) {
      setEmail(true);
    } else {
      setEmail(false);
    }
    if (data?.password.length >= 8) {
      setPassword(true);
    } else {
      setPassword(false);
    }
  };

  const handlePassword = (event) => {
    if (event.target.value.length <= 16) {
      setData("password")(event);
    }
  };

  return (
    <div className="main">
      <div>
        <label>Email: </label>
        <input type="text" onChange={setData("email")} value={data?.email} />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" onChange={handlePassword} value={data?.password} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {!email && <p>email not valid </p>}
      {!password && <p>password not valid</p>}
    </div>
  );
};

export default Main;
