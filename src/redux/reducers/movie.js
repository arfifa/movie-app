import movieConstant from '../constants/movie';

const initialState = {
  title: '',
  listMovieByTitle: {
    titles: [],
    names: [],
    companies: [],
  },
  errorMovieByTitle: null,
  loadingMovieByTitle: false,
  movieDetail: {},
  errorMovieDetail: null,
  loadingMovieDetail: false,
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case movieConstant.GET_MOVIE_BY_TITLE_LOADING:
      return {
        ...state,
        loadingMovieByTitle: true,
        title: action.title,
        errorMovieByTitle: null,
      };
    case movieConstant.GET_MOVIE_BY_TITLE_SUCCESS:
      return {
        ...state,
        errorMovieByTitle: null,
        loadingMovieByTitle: false,
        listMovieByTitle: action.data,
      };
    case movieConstant.GET_MOVIE_BY_TITLE_FAILED:
      return {
        ...state,
        loadingMovieByTitle: false,
        errorMovieByTitle: action.data,
      };
    case movieConstant.GET_MOVIE_DETAIL_LOADING:
      return {
        ...state,
        loadingMovieDetail: true,
        title: action.title,
        errorMovieDetail: null,
      };
    case movieConstant.GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        errorMovieDetail: null,
        loadingMovieDetail: false,
        movieDetail: action.data,
      };
    case movieConstant.GET_MOVIE_DETAIL_FAILED:
      return {
        ...state,
        loadingMovieDetail: false,
        errorMovieDetail: action.data,
      };
    default:
      return state;
  }
};

export default movie;
