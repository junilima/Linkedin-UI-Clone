import React from 'react'

import TrendingPanel from './TrendingPanel'

import { Container } from './styles'
import LoadingTrendingPanel from '../Shimmer/LoadingTrendingPanel'

const RightColumn = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
    </Container>
  )
}

export default RightColumn
