import axios from 'axios';
import { API_ENDPOINT } from '../api/index';

const ModeratorCard = (props) => {
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
    console.log('approve');
  };
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
          </ul>
        </div>
      </div>
      <footer className='card-footer'>
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

export default ModeratorCard;
