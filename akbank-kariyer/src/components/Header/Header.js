import React from 'react'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import HeaderTop from '../HeaderTop/HeaderTop'
import { Styled } from './Header.styled'

const Header = () => {
  return (
    <Styled>
        <HeaderTop />
        <HeaderBottom />
    </Styled>
  )
}

export default Header