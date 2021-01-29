import gatewayHelper from '../utility/gatewayHelper';

async function getMovieByTitle(title) {
  try {
    const response = await gatewayHelper.http('GET', `search/${title}`);
    return {
      res: response.data,
      status: true,
    };
  } catch (error) {
    if (error.response) return { res: error.response.data, status: false };
    return { res: error, status: false };
  }
}

async function getMovieDetail(movieID) {
  try {
    const response = await gatewayHelper.http('GET', `film/${movieID}`);
    return {
      res: response.data,
      status: true,
    };
  } catch (error) {
    if (error.response) return { res: error.response.data, status: false };
    return { res: error, status: false };
  }
}

const movieService = {
  getMovieByTitle,
  getMovieDetail,
};

export default movieService;
