import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../apis/userApi';
import './DataGrid.css';
import Pagination from '../pagination/Pagination';
import SearchBar from '../searchbar/SearchBar';
import TableHeader from '../TableHeader/TableHeader';

const DataGrid = () => {
  // State variables
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filterOption, setFilterOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  // Fetch user data from the API and update the state
  const fetchData = async () => {
    const usersData = await fetchUsers();
    const data = usersData.users;
    setUsers(data);
    setTotalPages(Math.ceil(data.length / 10));
  };

  // Handle page change event
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle search event
  const handleSearch = (option, term) => {
    setFilterOption(option);
    setSearchTerm(term);
  };

  let filteredUsers = users;

  if (filterOption && searchTerm) {
    // Apply filtering if both filter option and search term are provided
    filteredUsers = users.filter((user) => {
      if (filterOption === 'email') {
        return user.email.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (filterOption === 'age') {
        return user.age.toString() === searchTerm;
      } else if (filterOption === 'name') {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (filterOption === 'gender') {
        return user.gender.toLowerCase() === searchTerm.toLowerCase();
      }
      return false;
    });
  }

  // Calculate the range of displayed users based on the current page
  
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  let displayedUsers = filteredUsers.slice(startIndex, endIndex);

  // Handle sort change event
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  if (sortOption) {
    // Apply sorting based on the selected sort option
    displayedUsers = displayedUsers.sort((a, b) => {
      if (sortOption === 'email') {
        return a.email.localeCompare(b.email);
      } else if (sortOption === 'age') {
        return a.age - b.age;
      } else if (sortOption === 'name') {
        const fullNameA = `${a.firstName} ${a.lastName}`;
        const fullNameB = `${b.firstName} ${b.lastName}`;
        return fullNameA.localeCompare(fullNameB);
      } else if (sortOption === 'gender') {
        return a.gender.localeCompare(b.gender);
      }
      return 0;
    });
  }

  // Determine if the previous and next buttons should be disabled
  const isPrevButtonDisabled = currentPage === 1;
  const isNextButtonDisabled = currentPage === totalPages;

  return (
    <div>
      <SearchBar onSearch={handleSearch} /> {/* Render the search bar component and pass the handleSearch function as a prop */}
      <table className="data-grid">
        <TableHeader onSortChange={handleSortChange} /> {/* Render the table header component and pass the handleSortChange function as a prop */}
        <tbody>
          {displayedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isPrevButtonDisabled={isPrevButtonDisabled}
        isNextButtonDisabled={isNextButtonDisabled}
      /> {/* Render the pagination component and pass relevant props */}
    </div>
  );
};

export default DataGrid;
