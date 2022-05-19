const AdminCard = (props) => {
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
        <a href="/" className="card-footer-item">
          Edit
        </a>
        <a href="/" className="card-footer-item">
          Delete
        </a>
      </footer>
    </div>
  );
};

export default AdminCard;
