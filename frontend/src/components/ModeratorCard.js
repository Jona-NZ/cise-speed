import axios from 'axios';
import { API_ENDPOINT } from '../api/index';
import React, { useEffect, useState, useRef } from 'react';

const ModeratorCard = (props) => {
  const [articleToDelete, setArticleToDelete] = useState();
  const didMount = useRef(false);

  let id = props._id;

  // delete current article from database if decline button is clicked
  const handleDecline = () => {
    console.log(id);

    axios
      .delete(`${API_ENDPOINT}/api/articles/${id}`)
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
    axios
      .get(`${API_ENDPOINT}/api/articles/${id}`)
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
    };

    axios
      .post(`${API_ENDPOINT}/api/articles/movetoanalysis/`, articleData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log('There has been an error ' + err);
      });

    axios
      .delete(`${API_ENDPOINT}/api/articles/${id}`)
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

  useEffect(() => {
    if (!didMount.current) {
      return (didMount.current = true);
    }

    console.log(articleToDelete);
    handleCreate(articleToDelete);
  }, [articleToDelete]);

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{props.journalName}</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <ul className="ml-0">
            <p className="mb-1">
              <b>Author: </b>
              {props.author}
            </p>
            <p className="mb-1">
              <b>Year of Publication: </b>
              {props.yearOfPublication}
            </p>
            <p className="mb-1">
              <b>Volume: </b>
              {props.volume}
            </p>
            <p className="mb-1">
              <b>Number: </b>
              {props.number}
            </p>
            <p className="mb-1">
              <b>Pages: </b>
              {props.pages}
            </p>
            <p className="mb-1">
              <b>DOI: </b>
              {props.doi}
            </p>
          </ul>
        </div>
      </div>
      <footer className="card-footer">
        <button onClick={handleApprove} className="card-footer-item">
          Approve
        </button>
        <button onClick={handleDecline} className="card-footer-item">
          Decline
        </button>
      </footer>
    </div>
  );
};

export default ModeratorCard;
