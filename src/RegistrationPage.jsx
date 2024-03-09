import React, { useState } from "react";
import "./registrationPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [name, setName] = useState();
  const [sex, setSex] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [registerd, setRegisterd] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, sex, age, phone })
      .then((result) => {
        console.log(result);
        if (result.data === "Registered-successfully") {
          alert("registered succesfully");
          navigate("/home");
        } else {
          navigate("/register");
          setRegisterd("ALREADY REGISTERED!!!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="reg-box">
      <p className="head">REGISTRATION</p>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label>Name:</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-div-sex">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              value="male"
              name="gender"
              placeholder="sex"
              checked={sex === "male"}
              onChange={(e) => setSex(e.target.value)}
              required
            />
            male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              placeholder="sex"
              checked={sex === "female"}
              onChange={(e) => setSex(e.target.value)}
              required
            />
            female
          </label>
        </div>
        <div className="input-div">
          <label>Age:</label>
          <input
            type="number"
            min="18"
            max="40"
            name="age"
            placeholder="age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="input-div">
          <label>phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="phone number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <p id="option">{registerd}</p>
    </div>
  );
}
