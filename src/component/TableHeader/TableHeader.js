import React from 'react';

import './TableHeader.css'
const TableHeader = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const { value } = event.target;
    onSortChange(value);
  };

  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>
          Full Name
          <select onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="firstName">Ascending</option>
            <option value="-firstName">Descending</option>
          </select>
        </th>
        <th>
          Email
          <select onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="email">Ascending</option>
            <option value="-email">Descending</option>
          </select>
        </th>
        <th>
          Age
          <select onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="age">Ascending</option>
            <option value="-age">Descending</option>
          </select>
        </th>
        <th>
          Gender
          <select onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="gender">Ascending</option>
            <option value="-gender">Descending</option>
          </select>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
