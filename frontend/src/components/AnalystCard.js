import axios from 'axios';
import { API_ENDPOINT } from '../api/index';
import React, { useEffect, useState, useRef } from 'react';

const AnalystCard = (props) => {
  const [articleToDelete, setArticleToDelete] = useState();
  const didMount = useRef(false);

  let id = props._id;

  const handleDecline = () => {
    console.log(id);

    axios
      .delete(`${API_ENDPOINT}/api/analyst/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert('Article deleted'); //deleting for now, will be transferred to deleted collection later
          window.location.reload();
        } else {
          alert('Error deleting article');
        }
      })
      .catch((err) => {
        console.log('Error deleting article: ' + err);
      });
  };

  const handleApprove = () => {
    console.log(id);
    axios
      .get(`${API_ENDPOINT}/api/analyst/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setArticleToDelete(res.data);
        }
      })
      .catch((err) => {
        console.log('There has been an error ' + err);
      });
  };

  const handleCreate = (articleToDelete) => {
    const articleData = {
      author: articleToDelete.author,
      journalName: articleToDelete.journalName,
      yearOfPublication: articleToDelete.yearOfPublication,
      volume: articleToDelete.volume,
      number: articleToDelete.number,
      pages: articleToDelete.pages,
      doi: articleToDelete.doi,
      extractedText: '',
      articleMethodology: 'TDD',
    };

    axios
      .post(`${API_ENDPOINT}/api/analyst/movetocompleted/`, articleData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log('There has been an error ' + err);
      });

    axios
      .delete(`${API_ENDPOINT}/api/analyst/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert('Article has successfully been moved for analysis'); //deleting for now, will be transferred to deleted collection later
          window.location.reload();
        } else {
          alert('Error deleting article');
        }
      })
      .catch((err) => {
        console.log('Error deleting article: ' + err);
      });
  };

  const handleEdit = () => {
    let id = props._id;
    let title = prompt('Enter new title:', props.journalName);
    let author = prompt('Enter new author:', props.author);
    let yearOfPublication = prompt(
      'Enter new year of publication:',
      props.yearOfPublication
    );
    let volume = prompt('Enter new volume:', props.volume);
    let number = prompt('Enter new number:', props.number);
    let pages = prompt('Enter new pages:', props.pages);
    let doi = prompt('Enter new DOI:', props.doi);
    let extractedText = prompt(
      'Enter new extracted text:',
      props.extractedText
    );
    let articleMethodology = prompt(
      'Enter new article methodology:',
      props.articleMethodology
    );

    axios
      .patch(`${API_ENDPOINT}/api/analyst/${id}`, {
        journalName: title,
        author: author,
        yearOfPublication: yearOfPublication,
        volume: volume,
        number: number,
        pages: pages,
        doi: doi,
        extractedText: extractedText,
        articleMethodology: articleMethodology,
      })
      .then((res) => {
        if (res.status === 200) {
          alert('Article updated');
          window.location.reload();
        } else {
          alert('Error updating article');
        }
      })
      .catch((err) => {
        console.log('Error updating article: ' + err);
      });
  };

  useEffect(() => {
    if (!didMount.current) {
      return (didMount.current = true);
    }

    console.log('I AM ARTICLE TO DELETE');
    console.log(articleToDelete);
    handleCreate(articleToDelete);
  }, [articleToDelete]);

  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{props.journalName}</p>
        <button className='card-header-icon' aria-label='more options'>
          <span className='icon'>
            <i className='fas fa-angle-down' aria-hidden='true'></i>
          </span>
        </button>
      </header>
      <div className='card-content'>
        <div className='content'>
          <ul className='ml-0'>
            <p className='mb-1'>
              <b>Author: </b>
              {props.author}
            </p>
            <p className='mb-1'>
              <b>Year of Publication: </b>
              {props.yearOfPublication}
            </p>
            <p className='mb-1'>
              <b>Volume: </b>
              {props.volume}
            </p>
            <p className='mb-1'>
              <b>Number: </b>
              {props.number}
            </p>
            <p className='mb-1'>
              <b>Pages: </b>
              {props.pages}
            </p>
            <p className='mb-1'>
              <b>DOI: </b>
              {props.doi}
            </p>
            <p className='mb-1'>
              <b>Extracted text: </b>
              {props.extractedText}
            </p>
            <p className='mb-1'>
              <b>Methodology: </b>
              {props.articleMethodology}
            </p>
          </ul>
        </div>
      </div>
      <footer className='card-footer'>
        <button onClick={handleEdit} className='card-footer-item'>
          Edit
        </button>
        <button onClick={handleApprove} className='card-footer-item'>
          Approve
        </button>
        <button onClick={handleDecline} className='card-footer-item'>
          Decline
        </button>
      </footer>
    </div>
  );
};

export default AnalystCard;
