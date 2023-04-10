import React, { useState } from 'react';

const users = [
  { id: 1, name: 'John', surname: 'Doe', degree: 'Bachelor' },
  { id: 2, name: 'Jane', surname: 'Doe', degree: 'Bachelor' },
  { id: 3, name: 'Bob', surname: 'Smith', degree: 'Bachelor' },
  { id: 4, name: 'Alice', surname: 'Johnson', degree: 'Bachelor' },
];


export default function AdminStatistics (){
  const [individualSearchTerm, setIndividualSearchTerm] = useState('');
  const [courseSearchTerm, setCourseSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('individual');
  const [absenceRate, setAbsenceRate] = useState('');
  const [matchingUser, setMatchingUser] = useState(null);

  const handleIndividualSearchTermChange = (event) => {
    setIndividualSearchTerm(event.target.value);
  };

  const handleCourseSearchTermChange = (event) => {
    setCourseSearchTerm(event.target.value);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  const handleAbsenceRateChange = (event) => {
    setAbsenceRate(event.target.value);
  };

  const handleSearch = () => {
    if (searchType === 'individual') {
      const matchingUser = users.find((user) => {
        const searchTermLower = individualSearchTerm.toLowerCase();
        return (
          user.name.toLowerCase().includes(searchTermLower) ||
          user.surname.toLowerCase().includes(searchTermLower) ||
          user.id.toString().includes(searchTermLower)
        );
      });
      setMatchingUser(matchingUser);
    } else {
      console.log(`Searching for ${searchType} "${courseSearchTerm}" with absence rate filter of ${absenceRate}`);
    }
  };


  return (
    <div>
      <div>
        <button type="button" onClick={() => handleSearchTypeChange('individual')} className={searchType === 'individual' ? 'active' : ''}>Individual</button>
        <button type="button" onClick={() => handleSearchTypeChange('course')} className={searchType === 'course' ? 'active' : ''}>Course</button>
      </div>
      {searchType === 'individual' ? (
        <div className='individual'>
          <input type="text" value={individualSearchTerm} onChange={handleIndividualSearchTermChange} />
        </div>
      ) : (
        <div className='course'> 
          <input type="text" value={courseSearchTerm} onChange={handleCourseSearchTermChange} />
          <label>
            Absence Rate Filter:
            <input type="number" value={absenceRate} onChange={handleAbsenceRateChange} />
          </label>
        </div>
      )}
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
      {matchingUser && (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>ID</th>
              <th>Degree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">{matchingUser.name} {matchingUser.surname}</a> </td>
              <td>{matchingUser.id}</td>
              <td>{matchingUser.degree}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};