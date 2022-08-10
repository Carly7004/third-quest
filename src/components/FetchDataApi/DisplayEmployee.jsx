import React from "react";

const DisplayEmployee = ({ employee }) => {
  return (
    employee && (
      <div className="DisplayEmployee">
        <img src={employee.picture.large} alt={employee.name.first} />
        <ul>
          <li>Gender: {employee.gender}</li>
          <li>
            Name: {employee.name.title} {employee.name.last}{" "}
            {employee.name.first}
          </li>
          <li>E-mail: {employee.email}</li>
          <li>Cell: {employee.cell}</li>
          <li>Phone: {employee.phone}</li>
          <li>Date Of Birth: {employee.dob.age}, {employee.dob.date}</li>
          <li>
            Location: {employee.location.street.number}{" "}
            {employee.location.street.name}, {employee.location.postcode}{" "}
            {employee.location.city}
          </li>
        </ul>
      </div>
    )
  );
};

export default DisplayEmployee;
