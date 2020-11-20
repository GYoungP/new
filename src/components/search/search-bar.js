import { ArrowBackIos } from '@material-ui/icons'
import React from 'react'

function SearchBar() {
  return (
    <div>
      <ArrowBackIos></ArrowBackIos>
      <input type="text" placeholder="검색어를 입력해주세요." />
      <div></div>
    </div>
  )
}

export default SearchBar
