import React from 'react'

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles'

const MobileHeader = () => {
  return (
    <Container>
      <ProfileCircle src="https://github.com/junilima" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  )
}

export default MobileHeader
