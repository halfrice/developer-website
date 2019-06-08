import React from "react"
import styled from "styled-components"
import { navLinks } from "../config"
import { Link } from "gatsby"
import mixins from "../styles/mixins"
import theme from "../styles/theme.yaml"
import { rhythm } from "../utils/typography"

const NavContainer = styled.header`
  ${mixins.flex.center};
  background-color: ${theme.colors.dark};
  height: ${theme.nav.height};
  padding: 0 ${rhythm(1)};
  position: fixed;
  width: 100%;
`
const Navbar = styled.nav`
  ${mixins.flex.between};
  color: ${theme.colors.lightBlue};
  width: 100%;
`
const Logo = styled.div`
  ${mixins.flex.center};
  color: ${theme.colors.lightBlue};
`
const LogoLink = styled(Link)``
const NavLinks = styled.div`
  display: flex;
  align-items: center;
`
const NavItem = styled.div``
const NavLink = styled.a`
  padding: 12px 16px;
`

class Nav extends React.Component {
  render() {
    return (
      <NavContainer>
        <Navbar>
          <Logo>
            <LogoLink to="/">Logo</LogoLink>
          </Logo>
          <NavLinks>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <NavItem key={i}>
                  <NavLink key={i} href={url}>
                    {name}
                  </NavLink>
                </NavItem>
              ))}
          </NavLinks>
        </Navbar>
      </NavContainer>
    )
  }
}

export default Nav
