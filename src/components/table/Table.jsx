import React from "react";
import { Button } from "../buttons/Button";
import "./Table.css";
import { useState } from "react";
import { fetchData } from "../api/Api";
import { useEffect } from "react";

const Table = () => {
  const [pageNo, setPageNo] = useState(1);
  let [employeesList, setEmployeesList] = useState([]);
  let [maxPages, setMaxPages] = useState(1);
  let employeesPerPage = 10;
  let fetchedData = async () => {
    try {
      let response = await fetchData();
      //   console.log(response);
      setEmployeesList(response);
      //   let totalPages = Math.ceil(employeesList.length / employeesPerPage);
      //   console.log(totalPages);
      //   setMaxPages(totalPages);
    } catch (error) {
      console.log("failed to fetch data");
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);
  useEffect(() => {
    let totalPages = Math.ceil(employeesList.length / employeesPerPage);
    console.log(totalPages);
    setMaxPages(totalPages);
  }, [employeesList]);
  let filteredData = (employeesList, pageNo) => {
    let startIndex = (pageNo - 1) * employeesPerPage;
    let endIndex = startIndex + employeesPerPage;
    return employeesList.slice(startIndex, endIndex);
  };
  let list = filteredData(employeesList, pageNo);

  const handleNext = () => {
    if (pageNo < maxPages) {
      setPageNo((prev) => {
        return prev + 1;
      });
    }
  };
  const handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo((prev) => {
        return prev - 1;
      });
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td className="colOne">ID</td>
            <td className="colTwo">Name</td>
            <td className="colThree">Email</td>
            <td className="colFour">Role</td>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.role}</td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={4}
              style={{
                padding: "1rem",
              }}
            >
              <Button handleClick={handlePrevious} children="Previous" />
              <input
                disabled
                type="text"
                style={{
                  margin: "0px 10px",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "green",
                  border: "0px",
                  borderRadius: "5px",
                  color: "white",
                  textAlign: "center",
                }}
                name="pageNo"
                value={pageNo}
              />
              <Button handleClick={handleNext} children="Next" />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
