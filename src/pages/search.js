import React, { useState, useEffect } from 'react'

import SearchBar from '../components/search/search-bar'
import History from '../components/search/history'

function SearchPage() {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  // 검색어 추가
  const handleAddKeyword = (text) => {
    console.log('text', text)
    const newKeyword = {
      id: Date.now(),
      text,
    }
    setKeywords([newKeyword, ...keywords])
  }

  // 검색어 삭제
  const handleRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keywords) => {
        return keywords.id !== id
      }),
    )
  }

  // 검색어 전체삭제
  const handleClearKeyword = () => {
    setKeywords([])
  }

  return (
    <div>
      <SearchBar onAddKeyword={handleAddKeyword} />
      <History
        keywords={keywords}
        onClearKeyword={handleClearKeyword}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </div>
  )
}

export default SearchPage
