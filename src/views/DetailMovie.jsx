import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import { useHistory, Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../redux/actions/movie';

const Container = styled.div`
  width: 1008px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 2fr 1fr;
  min-height: 76vh;
  background-color: #999999;
  margin: auto;
  gap: 3px;
`;

const DetailMovieWrapper = styled.div`
  background-color: #fff;
`;

const BannerContainer = styled.div`
  background-color: #333333;
`;

const DetailMenu = styled.div`
	color:#C0C0C0;
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
	height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailMenuLink = styled(Link)`
  color:#C0C0C0;
  padding-left: 5px;
  padding-right: 5px;
`;

const TitleWrapper = styled.div`
  display: flex;
  min-height: 60px;
  margin-top: 10px;
  align-items: flex-start;
  justify-content: space-between;
`;

const IconWatchList = styled(Icon.FilePlus)`
  color:#C0C0C0;
  stroke-width: 3px;
  margin-left: 15px;
  margin-right: 15px;
`;

const MovieTitle = styled.h5`
  color: #fff;
  font-size: 28px;
  margin-bottom: 0;
  font-weight: 500;
`;

const MovieYear = styled.span`
  color:#C0C0C0;
  font-size: 20px;
`;

const MovieBriefLink = styled(Link)`
  color:#C0C0C0;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 11px;
`;

const ContainerRating = styled.div`
  color: #FFF;
  padding-right: 20px;
`;

const Rating = styled.h5`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  margin: 0px;
`;

const RatingVotes = styled.p`
  font-size: 12px;
  color:#C0C0C0;
`;

const PosterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 3fr;
  gap: 7px;
  margin-top: 10px;
`;

const ImagePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
`;

const TrailerWrapper = styled.div`
 background-color: #C0C0C0;
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #E3E2DD;
  margin-bottom: 10px;
`;

const NewsUpdateWrapper = styled.div`
  background-color: #fff;
`;

const DetailMovie = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { movieID } = history.location;

  const movieDetailData = useSelector((state) => state.movie);
  const {
    movieDetail, errorMovieDetail, loadingMovieDetail,
  } = movieDetailData;

  useEffect(() => {
    dispatch(getMovieDetail(movieID));
  }, []);

  return (
    <Container>
      <DetailMovieWrapper>
        { loadingMovieDetail && 'loading'}
        {errorMovieDetail !== null && errorMovieDetail.message}
        {errorMovieDetail === null && !loadingMovieDetail && (
        <>
          <BannerContainer>
            <DetailMenu>
              <div>
                <DetailMenuLink to="#">
                  FULL CAST AND CREW
                </DetailMenuLink>
                {'  |  '}
                <DetailMenuLink to="#">
                  TRIVIA
                </DetailMenuLink>
                {'  |  '}
                <DetailMenuLink to="#">
                  USER REVIEWS
                </DetailMenuLink>
                {'  |  '}
                <DetailMenuLink to="#">
                  IMDbPro
                </DetailMenuLink>
                {'  |  '}
                <DetailMenuLink to="#">
                  MORE
                </DetailMenuLink>
              </div>
              <div>
                <DetailMenuLink to="#">
                  SHARE
                </DetailMenuLink>
              </div>
            </DetailMenu>
            <TitleWrapper>
              <div className="d-flex">
                <IconWatchList size={40} />
                <div>
                  <MovieTitle>
                    {movieDetail.title}
                    <MovieYear>{`(${movieDetail.year})`}</MovieYear>
                  </MovieTitle>
                  <div style={{ color: '#C0C0C0' }}>
                    <MovieBriefLink to="#">
                      D
                    </MovieBriefLink>
                    {'  |  '}
                    <MovieBriefLink to="#">
                      {movieDetail.length}
                    </MovieBriefLink>
                    {'  |  '}
                    <MovieBriefLink to="#">
                      Drama, Romance
                    </MovieBriefLink>
                    {'  |  '}
                    <MovieBriefLink to="#">
                      30 January 2009 (USA)
                    </MovieBriefLink>
                  </div>
                </div>
              </div>
              <ContainerRating>
                <Rating>
                  {movieDetail.rating}
                  <span style={{ fontSize: 11 }}>/10</span>
                </Rating>
                <RatingVotes>{movieDetail.rating_votes}</RatingVotes>
              </ContainerRating>
            </TitleWrapper>
            <PosterWrapper>
              <ImagePoster src={movieDetail.poster} alt="image poster movie" />
              <TrailerWrapper />
            </PosterWrapper>
          </BannerContainer>
          <DescriptionContainer>
            <p>{movieDetail.plot}</p>
          </DescriptionContainer>
        </>
        )}
      </DetailMovieWrapper>
      <NewsUpdateWrapper>
        <h5>Ranking and News Movie Update</h5>
      </NewsUpdateWrapper>
    </Container>
  );
};

export default DetailMovie;
