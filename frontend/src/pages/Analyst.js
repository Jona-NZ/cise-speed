import React, { useEffect, useState } from 'react';
import Card from '../components/AnalystCard';
import { API_ENDPOINT } from '../api/index';
import axios from 'axios';

const Analyst = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/api/analyst/`, {
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
    let numColumns = Math.ceil(articles.length / 4);
    let rows = [];
    let count = 0;

    for (let i = 0; i < numColumns; i++) {
      let row = [];
      for (let j = 0; j < 4; j++) {
        if (articles[count] !== undefined) {
          row.push(articles[count]);
        }
        count++;
      }
      rows.push(row);
    }

    return rows.map((row) => {
      return (
        <div className="columns">
          {row.map((article, i) => {
            return (
              <div className="column">
                <Card {...article} key={i} />
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <section className="section">
      <div className="container">
        {articles.length === 0 && (
          <div className="notification is-warning">
            <p className="has-text-centered is-size-4">
              <strong>No articles to analyse</strong>
            </p>
          </div>
        )}
        {renderCards()}
      </div>
    </section>
  );
};

export default Analyst;
