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

  return (
    <div>
      <h1>here registered female students only students display</h1>
      <table>
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
            if (stud.sex === "female") {
              return (
                <tr key={index}>
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
