import React, { useEffect, useState } from "react";
import axios from "axios";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Course() {
  const [dept, setDept] = useState("");
  const [task, setTasks] = useState([]);
  const [isAdd, setIsAdd] = useState();

  const addDept = () => {
    axios
      .post("http://localhost:5000/addCourse", { dept })
      .then((result) => {
        console.log(result);
        setDept("");
        setIsAdd("Added SuccessFully");
        setTimeout(() => {
          setIsAdd("");
        }, 30000);
      })
      .catch((err) => {
        console.log(err);
        setIsAdd("IS ALREADY REGISTERED");
      });
  };
  const deleteTask = (id, name) => {
    if (window.confirm(`are you sure to delete ${name}`)) {
      axios
        .post("http://localhost:5000/deleteCourse", { id })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/getCourse")
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  }, [dept, task]);

  return (
    <div className="pt-3 w-full flex flex-col items-center bg-violet-100 border border-red-600  rounded-md">
      <div className="bg-fuchsia-500 w-full p-1">
        <label className="grid grid-cols-[1fr_auto]">
          <input
            type="text"
            value={dept}
            placeholder="insert "
            onChange={(e) => setDept(e.target.value)}
            className="border border-violet-500 p-3"
          />
          <button
            onClick={addDept}
            disabled={!dept}
            className="p-3 text-white font-semibold border bg-violet-500 disabled:bg-violet-300"
          >
            ADD
          </button>
        </label>
      </div>
      <h1 className="font-[deathStar] text-2xl">COURSES ARE HERE</h1>
      <ul className="w-full grid grid-cols-1 gap-2">
        {task.map((dep, index) => {
          return (
            <li
              className="bg-violet-200 border p-2 rounded-md grid grid-cols-[1fr,auto]"
              key={index}
            >
              {dep.dept}
              <button
                className="border rounded-md  bg-red-600 text-white w-5 h-full"
                onClick={() => deleteTask(dep._id, dep.dept)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
