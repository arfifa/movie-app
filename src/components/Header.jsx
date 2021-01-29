import React, { useState } from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import { useHistory } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { getMovieByTitle } from '../redux/actions/movie';
// Assets
import LogoImage from '../assets/img/logo.png';

const Container = styled.div`
  background-color: #121212;
  height: 55px;
  box-sizing: border-box;
  color: #fff;
  display: grid;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right:10px;
  padding-left: 10px;
  grid-template-columns: 1fr 1fr 7fr 2fr 1fr;
  align-items: center;
  gap: 10px;
`;

const LogoImageContainer = styled.img`
  object-fit: scale-down;
  margin: auto;
  width: 80%;
  height: 35px;
`;

const BurgerMenuIcon = styled(Icon.Menu)`
  color: #919191;
  stroke-width: 3px;
  margin-right: 5px;
`;

const ButtonMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;
  
  .buttonText {
    margin-top: -3px;
  }

  &:hover {
    cursor: pointer;
    background-color: #707070;

    ${BurgerMenuIcon} {
      color: #fff
    }
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
  

  &:focus-within {
    border: 2px solid #F5C518;
    border-radius: 5px;
  }
`;

const SearchSelectOption = styled.select`
  width: 50px;
  border-width: 0px;
  border-right-width: 1px;

  &:focus {
    outline: none;
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border-width: 0px;
  padding-left: 10px;
  padding-right: 10px;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(Icon.Search)`
  color: #919191;
  stroke-width: 3px;
  margin-left: 15px;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const [typeWord, setTypeWord] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    dispatch(getMovieByTitle(typeWord));
    history.push('/');
  };
  return (
    <>
      <Container>
        <LogoImageContainer src={LogoImage} />
        <ButtonMenu>
          <BurgerMenuIcon size={20} />
          <span className="buttonText">Menu</span>
        </ButtonMenu>
        <SearchInputContainer>
          <SearchSelectOption>
            <option value="volvo">All</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </SearchSelectOption>
          <SearchInput
            type="text"
            placeholder="Search IMDb"
            value={typeWord}
            onChange={(e) => setTypeWord(e.target.value)}
          />
          <SearchIcon size={15} onClick={handleSearch} />
        </SearchInputContainer>
      </Container>
    </>
  );
};

export default Header;
