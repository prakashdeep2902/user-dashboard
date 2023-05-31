In component i have made 5 File the use of all 5 file is written below 


Hosted Link:https://analyticdge.netlify.app/

1)apis
APIs
fetchUsers()
A function that fetches the users data from the API.
Returns
Promise: A Promise that resolves to the fetched users data.
<!-- Example Usage -->
import { fetchUsers } from '../apis/userApi';

const fetchData = async () => {
  try {
    const usersData = await fetchUsers();
    console.log(usersData);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchData();
In the example above, the fetchUsers() function is imported from the userApi module and used within an asynchronous function fetchData(). 
The function fetches the users data and logs it to the console. Error handling is also included.
Make sure to update the example and description according to the specific API functions you have in your project.





2)DataGrid Component
The DataGrid component is responsible for rendering a table with pagination and search functionality .
Props
None

<!-- Example Usage -->

import React from 'react';
import DataGrid from './DataGrid';
const MyComponent = () => {
  return (
    <div>
      <h1>My Data Grid</h1>
      <DataGrid />
      {/* ... */}
    </div>
  );
};
export default MyComponent;

In the example above, the DataGrid component is used within the MyComponent component. It is rendered without any props.
Make sure to adjust the example and descriptions based on your specific implementation of the DataGrid component.






3)Pagination Component

The Pagination component is responsible for rendering pagination controls.
Props
currentPage: The current page number.
totalPages: The total number of pages.
onPageChange: A callback function invoked when the page is changed. It receives the new page number as a parameter.
isPrevButtonDisabled: A boolean indicating whether the previous button should be disabled.
isNextButtonDisabled: A boolean indicating whether the next button should be disabled.
<!-- Example Usage -->

import React from 'react';
import Pagination from './Pagination';
const MyComponent = () => {
  const handlePageChange = (page) => {
    // Handle the page change
    console.log('Page changed:', page);
  };

  return (
    <div>
      <h1>My Pagination</h1>
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={handlePageChange}
        isPrevButtonDisabled={false}
        isNextButtonDisabled={false}
      />
      {/* ... */}
    </div>
  );
};

export default MyComponent;

In the example above, the Pagination component is used within the MyComponent component. It provides the necessary props for the pagination functionality.
Make sure to adjust the example and descriptions based on your specific implementation of the Pagination component.

4)SearchBar Component

The SearchBar component is responsible for rendering a search input field and filter options.
Props
onSearch: A callback function invoked when the search term or filter option is changed. 
It receives the selected filter option and search term as parameters.

<!--Example Usage  -->
import React from 'react';
import SearchBar from './SearchBar';
const MyComponent = () => {
  const handleSearch = (option, term) => {
    // Handle the search term and filter option change
    console.log('Filter Option:', option);
    console.log('Search Term:', term);
  };

  return (
    <div>
      <h1>My Search Bar</h1>
      <SearchBar onSearch={handleSearch} />
      {/* ... */}
    </div>
  );
};

export default MyComponent;

In the example above, the SearchBar component is used within the MyComponent component. 
It provides the handleSearch function as the onSearch prop, which is called whenever the search term or filter option is changed.
Make sure to adjust the example and descriptions based on your specific implementation of the SearchBar component.


5)TableHeader Component
The TableHeader component is responsible for rendering the header of a table and allowing the user to change the sorting options.
Props
onSortChange: A callback function invoked when the sorting option is changed. It receives the selected sort option as a parameter.

<!-- Example Usage -->

import React from 'react';
import TableHeader from './TableHeader';

const MyComponent = () => {
  const handleSortChange = (sortOption) => {
    // Handle the sorting option change
    console.log('Sort Option:', sortOption);
  };

  return (
    <div>
      <h1>My Table</h1>
      <table>
        <TableHeader onSortChange={handleSortChange} />
        {/* ... */}
      </table>
    </div>
  );
};

export default MyComponent;

In the example above, the TableHeader component is used within the MyComponent component. 
It provides the handleSortChange function as the onSortChange prop, which is called whenever the user selects a new sorting option.
Make sure to adjust the example and descriptions based on your specific implementation of the TableHeader component.
Remember to update the README.md file with the appropriate documentation for all the components and functions in your project.


















