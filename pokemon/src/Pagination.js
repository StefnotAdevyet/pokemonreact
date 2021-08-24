import React from 'react'

export default function Pagination({ goToPreviousPage, goToNextPage }) {
  return (
    <div>
      {goToPreviousPage && <button onClick={goToPreviousPage}>Prev</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  )
}