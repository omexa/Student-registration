import React, { useEffect, useState } from "react";
import "./nav.css";
import axios from "axios";
import StudentList from "./StudentList";
import Course from "./Course";
export default function Home() {
  const [studs, setStuds] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getStuds")
      .then((result) => setStuds(result.data))
      .catch((err) => console.log(err));
  }, []);

  const disStyle = {
    backgroundColor: "green",
    fontFamily: "fantasy",
    fontSize: "20px",
    color: "white",
  };
  return (
    <div>
      <div className="home-text">TEACH WITH OMEXA</div>
      <div className="home-text">MY STUDENTS ARE HERE</div>
      <table
        border={2}
        cellPadding={2}
        cellSpacing={2}
        style={{
          background: "brown",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <td>NAME</td>
            <td>SEX</td>
            <td>AGE</td>
            <td>PHONE</td>
          </tr>
        </thead>
        <tbody>
          {studs.map((stud, index) => {
            return (
              <tr key={index} style={disStyle}>
                <td>{stud.name}</td>
                <td>{stud.sex}</td>
                <td>{stud.age}</td>
                <td>{stud.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <StudentList />
      <Course />
    </div>
  );
}
