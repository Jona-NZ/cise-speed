import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { API_ENDPOINT } from '../api/index';
import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_ENDPOINT}/api/books`)
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }

  render() {
    const books = this.state.books;
    console.log('PrintBook: ' + books);
    let bookList;

    if (!books) {
      bookList = 'there is no book record!';
    } else {
      bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }

    return (
      <div className='ShowBookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>

            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;
