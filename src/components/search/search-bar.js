import React from 'react'
import styled, { css } from 'styled-components'

const cssCommon = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const SearchContainer = styled.div`
  border-bottom: 1px solid #0cde8b;
  position: relative;
  padding: 30px 0;
  width: 100%;
  display: block;
  background-color: #fff;
`

const BeforeIcon = styled.div`
  ${cssCommon}
  background-image: url('https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png');
  background-size: 467px 442px;
  background-repeat: no-repeat;
  background-position: -164px -343px;
  width: 21px;
  height: 18px;
  left: 20px;
`

const InputContainer = styled.div`
  position: absolute;
  width: calc(100% - 110px);
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
`

const Input = styled.input`
  font-size: 16px;
  &::placeholder {
    color: #ddd;
  }
`

const SearchIcon = styled.div`
  ${cssCommon}
  background-image: url('https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png');
  background-size: 467px 442px;
  background-repeat: no-repeat;
  background-position: -356px -260px;
  width: 24px;
  height: 24px;
  right: 14px;
`
const ResetIcon = styled.div`
  ${cssCommon}
  background-image: url('https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png');
  background-size: 467px 442px;
  background-repeat: no-repeat;
  background-position: -389px -29px;
  width: 20px;
  height: 20px;
  right: 0;
`

function SearchBar() {
  return (
    <SearchContainer>
      <BeforeIcon />
      <InputContainer>
        <Input type="text" placeholder="검색어를 입력해주세요." />
        <ResetIcon />
      </InputContainer>
      <SearchIcon />
    </SearchContainer>
  )
}

export default SearchBar
