import React, { useEffect, useState } from "react";
import axios from "axios";
export default function StudentList() {
  const [studs, setStuds] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/registeredStudent")
      .then((result) => setStuds(result.data))
      .catch((err) => console.log(err));
  }, []);
  const rowStyle = {
    color: "white",
    fontFamily: "arial",
  };
  const femleStyle = {
    backgroundColor: "green",
    fontFamily: "fantasy",
    fontSize: "20px",
    color: "white",
  };
  return (
    <div>
      <h1
        style={{
          color: "black",
          fontFamily: "fantasy",
          backgroundColor: "green",
          borderRadius: 3,
          padding: 5,
        }}
      >
        here registered female students only students display
      </h1>
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
          <tr style={rowStyle}>
            <td>NAME</td>
            <td>SEX</td>
            <td>AGE</td>
            <td>PHONE</td>
          </tr>
        </thead>
        <tbody>
          {studs.map((stud, index) => {
            if (stud.sex === "female") {
              return (
                <tr style={femleStyle} key={index}>
                  <td>{stud.name}</td>
                  <td>{stud.sex}</td>
                  <td>{stud.age}</td>
                  <td>{stud.phone}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
