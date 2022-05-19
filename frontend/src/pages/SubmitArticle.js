import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../api/index';

const SubmitArticle = () => {
  const [journalName, setJournalName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [volume, setVolume] = useState('N/A');
  const [number, setNumber] = useState('N/A');
  const [pageNumber, setPageNumber] = useState('N/A');
  const [doi, setDoi] = useState('N/A');

  const onSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      author: authorName,
      journalName: journalName,
      yearOfPublication: publicationYear,
      volume: volume,
      number: number,
      pages: pageNumber,
      doi: doi,
    };

    axios
      .post(`${API_ENDPOINT}/api/articles`, articleData)
      .then((res) => {
        if (res.status === 200) {
          alert('Successfully submitted article');
          setJournalName('');
          setAuthorName('');
          setPublicationYear('');
          setVolume('');
          setNumber('');
          setPageNumber('');
          setDoi('');
        } else {
          alert('Error submitting article. Status: ' + res.status);
        }
      })
      .catch((err) => {
        alert('Error submitting article: ' + err);
      });
  };

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='subtitle'>Submit an Article</h2>

        <form onSubmit={onSubmit}>
          <div className='field'>
            <label className='label'>Journal Name*</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Journal name'
                onChange={(e) => setJournalName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Author Name*</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Author name'
                onChange={(e) => setAuthorName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Year of Publication*</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Year of Publication (e.g. 2022)'
                onChange={(e) => setPublicationYear(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='field is-horizontal'>
            <div className='field-body'>
              <div className='field'>
                <label className='label'>Volume</label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    placeholder='Volume (optional)'
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Number</label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    placeholder='Article number (optional)'
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Page Number</label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    placeholder='Page number (optional)'
                    onChange={(e) => setPageNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='field'>
            <label className='label'>DOI</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='DOI link'
                onChange={(e) => setDoi(e.target.value)}
              />
            </div>
          </div>
          <div className='field is-grouped' style={{ marginTop: '30px' }}>
            <div className='control'>
              <button className='button is-link'>Submit</button>
              <p className='help is-primary'>* = required</p>
            </div>
            <div className='control'>
              <button className='button is-link is-light'>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubmitArticle;
