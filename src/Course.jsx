import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Course() {
  const [dept, setDept] = useState("");
  const [task, setTasks] = useState([]);
  const [isAdd, setIsAdd] = useState();

  const addDept = () => {
    axios
      .post("http://localhost:5000/addTask", { dept })
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/getTasks")
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  }, [dept]);

  const tasks = {
    backgroundColor: "GREEN",
    borderRadius: "10PX",
    margin: "5px",
    fontSize: "30px",
    width: "70%",
    display: "grid",
    gridTemplateColumns: "1fr max-content",
  };
  const addBt = {
    backgroundColor: "red",
    color: "white",
    fontSize: "20px",
  };
  const removeTask = (selected) => {
    axios
      .delete(`http://localhost:5000/tasks/${selected}`)
      .then((result) => {});
  };

  return (
    <div>
      <h1>TASKS AR THERE</h1>
      <h1>{isAdd}</h1>
      <div>
        <label>
          <input
            type="text"
            value={dept}
            placeholder="insert your task"
            onChange={(e) => setDept(e.target.value)}
          />
          <button onClick={addDept}>ADD</button>
        </label>
      </div>
      <ul>
        {task.map((dep, index) => {
          return (
            <li style={tasks}>
              {dep.dept}
              <button style={addBt} onClick={() => removeTask(dep._id)}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
// import React, { useState } from "react";

// export default function Course() {
//   const [dept, setDept] = useState("");
//   const [depts, setDepts] = useState([]);

//   const addDept = (e) => {
//     e.preventDefault();
//     setDepts((prev) => [...prev, dept]);
//   };

//   return (
//     <div>
//       <label>
//         NEW COURSE:
//         <input
//           type="text"
//           value={dept}
//           onChange={(e) => setDept(e.target.value)}
//         />
//         <button onClick={addDept}>ADD</button>
//       </label>
//       <div>{depts}</div>
//     </div>
//   );
// }
