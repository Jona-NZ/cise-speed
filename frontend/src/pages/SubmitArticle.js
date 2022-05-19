import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../api/index';

const SubmitArticle = () => {
  const [journalName, setJournalName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [volume, setVolume] = useState('');
  const [number, setNumber] = useState('');
  const [pageNumber, setPageNumber] = useState('');
  const [doi, setDoi] = useState('');

  /* ALERT HANDLING */
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    'Successfully submitted! Your submission will be reviewed shortly.'
  );
  const [errorMessage, setErrorMessage] = useState(
    'Error submitting article. Please try again shortly.'
  );

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
          setSuccessMessage(
            `Successfully submitted ${journalName}! Your submission will be reviewed shortly.`
          );
          setSuccessAlert(true);
          setJournalName('');
          setAuthorName('');
          setPublicationYear('');
          setVolume('');
          setNumber('');
          setPageNumber('');
          setDoi('');
        } else {
          setErrorMessage(
            `Error submitting article: ${res.status}. Please try again shortly.`
          );
          setErrorAlert(true);
        }
      })
      .catch((err) => {
        setErrorMessage(
          `Error submitting article: ${err}. Please try again shortly.`
        );
        setErrorAlert(true);
      });
  };

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='subtitle'>Submit an Article</h2>

        {successAlert && (
          <div className='notification is-success' name='reference'>
            {successMessage}
          </div>
        )}

        {errorAlert && (
          <div className='notification is-danger' name='reference'>
            {errorMessage}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div className='field'>
            <label className='label'>Journal Name*</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                value={journalName}
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
                value={authorName}
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
                value={publicationYear}
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
                    value={volume}
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
                    value={number}
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
                    value={pageNumber}
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
                value={doi}
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
