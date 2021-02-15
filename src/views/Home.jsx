import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';

const ContainerHome = styled.div`
  width: 1008px;
  display: grid;
  box-sizing: border-box;
  padding: 20px;
  grid-template-areas: 
    "content content content content content content category-search1"
    "content content content content content content category-search2";
  min-height: 76vh;
  background-color: #fff;
  margin: auto;
  gap: 5px 20px;
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

const Content = styled.div`
  min-height: 100px;
  box-sizing: border-box;
  border: 1px solid #E8E8E8;
  padding: 10px;
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  margin-top: -7px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const ResultCategory = styled.p`
  color:#999;
  font-size: 12px;
  font-weight: 400;
`;

const ResultCategoryLink = styled(Link)`
  color: #136CB2;
  &:hover {
    text-decoration: none;
  }
`;

const TitleResultCategory = styled.h3`
  color: #A58500;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 0.5em;
  padding: 0;
`;

const TableSearchResult = styled.table`
  width: 100%;
  tr {
    max-height: 100px;
    min-height: 80px;
  }
  tr:nth-child(even) {background: #FBFBFB}
  tr:nth-child(odd) {background: #F6F6F5}
`;

const MovieImage = styled.img`
  height: 50px;
  width: 30px;
  
  &:hover {
    cursor: pointer
  }
`;

const CategorySearch1Wrapper = styled.div`
  grid-area: category-search1;
  background-color: #EEEEED;
  border-radius: 10px;
`;

const CategorySearch2Wrapper = styled.div`
  grid-area: category-search2;
  background-color: #EEEEED;
  border-radius: 10px;
`;

const Home = () => {
  const movieList = useSelector((state) => state.movie);
  const {
    title, listMovieByTitle, errorMovieByTitle, loadingMovieByTitle,
  } = movieList;

  return (
    <ContainerHome>
      <ContentWrapper>
        <Content>
          <Title>Results for</Title>
          <ResultCategory>
            Jump to:
            {' '}
            <ResultCategoryLink href="#">
              Title
            </ResultCategoryLink>
            {' | '}
            <ResultCategoryLink href="#">
              Names
            </ResultCategoryLink>
            {' | '}
            <ResultCategoryLink href="#">
              Keyword
            </ResultCategoryLink>
            {' | '}
            <ResultCategoryLink href="#">
              Companies
            </ResultCategoryLink>
          </ResultCategory>
          <div>
            {loadingMovieByTitle && 'loading'}
            {errorMovieByTitle !== null && title.length <= 0
              && 'Please type word to search!'}
            {
              errorMovieByTitle !== null && title.length > 0 && errorMovieByTitle.message
            }
            {
              errorMovieByTitle === null && !loadingMovieByTitle && (
                <>
                  {listMovieByTitle.titles.length <= 0
                    && <h5>No Movie Found!</h5>}
                  {listMovieByTitle.titles.length > 0 && (
                    <>
                      <TitleResultCategory>Titles</TitleResultCategory>
                      <TableSearchResult>
                        <tbody>
                          {listMovieByTitle.titles.map((item) => (
                            <tr key={item.id}>
                              <td width="30">
                                <MovieImage src={item.image} alt="tes" />
                              </td>
                              <td className="px-2">
                                <ResultCategoryLink to={{
                                  pathname: '/detail-movie',
                                  movieID: `?${item.id}`,
                                }}
                                >
                                  {item.title}
                                </ResultCategoryLink>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </TableSearchResult>
                    </>
                  )}
                </>
              )
            }
          </div>
        </Content>
      </ContentWrapper>
      <CategorySearch1Wrapper>
        <h3>Category Search</h3>
      </CategorySearch1Wrapper>
      <CategorySearch2Wrapper>
        <h3>Advanced Search</h3>
      </CategorySearch2Wrapper>
    </ContainerHome>
  );
};

export default Home;
