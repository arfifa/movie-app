import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  'x-rapidapi-key': 'c8abfd183cmsh0b5cde4c5533f10p106f07jsnb5ecde3a0766',
  useQueryString: true,
};

async function http(method, endpoint) {
  console.log(`${BASE_URL}haha`);
  let response = null;

  if (method.toUpperCase() === 'GET') {
    response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method: method.toUpperCase(),
      headers,
    });
  }

  return response;
}

const gatewayHelper = { http };

export default gatewayHelper;
