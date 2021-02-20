import axios from 'axios';

const baseURL = 'http://cb3b49492df2.ngrok.io';

export default axios.create({
  baseURL,
});
