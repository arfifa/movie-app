import movieConstant from '../constants/movie';
import movieService from '../services/movie';

export const getMovieByTitle = (title) => async (dispatch) => {
  dispatch({
    type: movieConstant.GET_MOVIE_BY_TITLE_LOADING,
    title,
  });
  const response = await movieService.getMovieByTitle(title);
  if (response.status) {
    dispatch({
      type: movieConstant.GET_MOVIE_BY_TITLE_SUCCESS,
      data: response.res,
    });
  } else {
    dispatch({
      type: movieConstant.GET_MOVIE_BY_TITLE_FAILED,
      data: response.res,
    });
  }
};

export const getMovieDetail = (movieID) => async (dispatch) => {
  dispatch({
    type: movieConstant.GET_MOVIE_DETAIL_LOADING,
  });
  const response = await movieService.getMovieDetail(movieID);
  if (response.status) {
    dispatch({
      type: movieConstant.GET_MOVIE_DETAIL_SUCCESS,
      data: response.res,
    });
  } else {
    dispatch({
      type: movieConstant.GET_MOVIE_DETAIL_FAILED,
      data: response.res,
    });
  }
};
