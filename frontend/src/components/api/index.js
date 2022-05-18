let API_ENDPOINT = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  API_ENDPOINT = 'http://localhost:3000';
} else {
  // production code
  API_ENDPOINT = '';
}

module.exports = { API_ENDPOINT };
