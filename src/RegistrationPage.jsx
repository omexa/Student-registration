import React, { useState } from "react";
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
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-violet-500 rounded-md w-max mt-5 flex flex-col items-center justify-center py-20 px-10">
        <p className="text-3xl font-[deathStar] ">REGISTRATION</p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col">
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 font-bold rounded-md w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Gender:</label>
            <div className="font-medium ml-4 flex items-center justify-center">
              <label>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  placeholder="sex"
                  checked={sex === "male"}
                  onChange={(e) => setSex(e.target.value)}
                  required
                  className="w-5 h-5"
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
                  className="w-5 h-5 ml-5"
                />
                female
              </label>
            </div>
          </div>
          <div>
            <label className="font-medium">Age:</label>
            <input
              type="number"
              min="18"
              max="40"
              name="age"
              placeholder="age"
              onChange={(e) => setAge(e.target.value)}
              required
              className="p-2 rounded-xl w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
              className="p-2 rounded-xl w-full"
            />
          </div>
          <button
            type="submit"
            className="active:scale-[0.96] bg-slate-600 mt-5 w-full p-2 font-semibold border-spacing-2 rounded-md text-white"
          >
            SUBMIT
          </button>
        </form>
        <p id="option">{registerd}</p>
      </div>
    </div>
  );
}
