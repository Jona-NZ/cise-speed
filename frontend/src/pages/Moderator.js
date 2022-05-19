import React, { useEffect, useState } from 'react';
import Card from '../components/ModeratorCard';
import { API_ENDPOINT } from '../api/index';
import axios from 'axios';

const Moderator = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/api/articles`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setArticles(res.data);
        console.log(res);
      })
      .catch((err) => {
        alert('Unable to retrieve articles: ' + err);
      });
  }, []);

  return (
    <section className='section'>
      <div className='container'>
        <div class='columns'>
          <div class='column'>
            <Card journalName='this is a journal' author='test Author' />
          </div>
          <div class='column'>
            <Card journalName='this is a journal' />
          </div>
          <div class='column'>
            <Card journalName='this is a journal' />
          </div>
          <div class='column'>
            <Card journalName='this is a journal' />
          </div>
        </div>
        <div class='columns'>
          <div class='column'>
            <Card journalName='this is a journal' />
          </div>
          <div class='column'>
            <Card journalName='this is a journal' />
          </div>
          <div class='column'>
            <Card journalName='this is a journal' />
          </div>
          <div class='column'>
            <Card journalName='this is a journal' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moderator;
