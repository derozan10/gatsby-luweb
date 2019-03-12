import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  border-color: transparent;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
  li {
    border-color: transparent;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
