import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "./StudentList";
import Course from "./Course";
export default function StudList() {
  const [studs, setStuds] = useState([]);

  const delStud = (id, name) => {
    if (window.confirm(`are you sure to delete ${name}`)) {
      axios
        .post("http://localhost:5000/deleteStudent", { id })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/getStuds")
      .then((result) => setStuds(result.data))
      .catch((err) => console.log(err));
  }, [studs]);

  return (
    <div className=" flex flex-col w-full item-center bg-violet-100 mb-10">
      <div className="w-full font-[deathStar] flex text-3xl lg:text-5xl justify-center">
        TEACH WITH OMEXA
      </div>
      <div className="grid grid-row-[1fr_auto] lg:grid-cols-[2fr_1fr]">
        <div className="w-full py-10 px-2 lg:px-20 grid grid-rows-[auto_1fr] gap-y-10">
          <div className="w-full font-[deathStar] flex text-xl justify-center">
            STUDENTS
          </div>
          <div className="border border-gray-300 rounded-xl">
            <table className=" w-full">
              <thead>
                <tr>
                  <th className="p-2 border border-gray-300">NAME</th>
                  <th className="p-2 border border-gray-300">SEX</th>
                  <th className="p-2 border border-gray-300">AGE</th>
                  <th className="p-2 border border-gray-300">PHONE</th>
                  <th className="p-2 border border-gray-300">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {studs.map((stud, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-2 border border-gray-300">
                        {stud.name}
                      </td>
                      <td className="p-2 border border-gray-300">{stud.sex}</td>
                      <td className="p-2 border border-gray-300">{stud.age}</td>
                      <td className="p-2 border border-gray-300">
                        {stud.phone}
                      </td>
                      <td
                        className="p-2 border rounded border-gray-300 flex justify-center font-semibold text-xl bg-red-600 "
                        onClick={() => delStud(stud._id, stud.name)}
                      >
                        remove
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-2">
          <Course />
        </div>
      </div>
    </div>
  );
}
