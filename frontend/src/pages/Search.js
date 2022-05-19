import React, { useState } from 'react';
import { API_ENDPOINT } from '../api/index';
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);

    axios
      .get(`${API_ENDPOINT}/api/articles/search/${search}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='subtitle'>Search for an Article by Methodology</h2>
        <form onSubmit={handleSearch}>
          <div className='field is-horizontal'>
            <div className='field-body'>
              <div className='control'>
                <div className='select'>
                  <select onChange={(e) => setSearch(e.target.value)}>
                    <option>Select Methodology</option>
                    <option>TDD</option>
                  </select>
                </div>
              </div>
              <div className='field'>
                <button
                  className='button is-link'
                  style={{ marginLeft: '10px' }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>

        {results.length > 0 && (
          <table className='table'>
            <thead>
              <tr>
                <th>Journal Name</th>
                <th>Author</th>
                <th>Publication Year</th>
                <th>Volume</th>
                <th>Number</th>
                <th>Pages</th>
                <th>DOI</th>
              </tr>
            </thead>
            <tbody>
              {results.map((article, i) => {
                return (
                  <tr key={i}>
                    <td>{article.journalName}</td>
                    <td>{article.author}</td>
                    <td>{article.yearOfPublication}</td>
                    <td>{article.volume}</td>
                    <td>{article.number}</td>
                    <td>{article.pages}</td>
                    <td>{article.doi}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Search;
