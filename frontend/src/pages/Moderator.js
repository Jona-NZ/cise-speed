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
      })
      .catch((err) => {
        alert('Unable to retrieve articles: ' + err);
      });
  }, []);

  let renderCards = () => {
    let numColumns = Math.round(articles.length / 4);
    console.log(numColumns);

    let count = 0;

    for (let i = numColumns; i >= 0; i--) {
      <div className='columns'>
        {/* for (let i = 0; i < 4; i++) {

        if (i == 3) {
          count += 3;
        } 
      } */}
      </div>;
    }

    let cards = articles.map((article, i) => {
      return <Card {...article} key={i} />;
    });
    return cards;
  };

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>{renderCards()}</div>
        </div>
      </div>
    </section>
  );
};

export default Moderator;
