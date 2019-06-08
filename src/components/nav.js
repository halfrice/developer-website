import React from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
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
  color: ${theme.colors.lightSlate};
  width: 100%;
`
const Logo = styled.div`
  ${mixins.flex.center};
`
const LogoLink = styled(Link)``
const NavLinks = styled.div`
  display: flex;
  align-items: center;
`
const NavList = styled.ol`
  list-style: none;
  div {
    ${mixins.flex.between};
  }
`
const NavListItem = styled.li`
  position: relative;
`
const NavLink = styled.a`
  padding: 12px 16px;
`

class Nav extends React.Component {
  state = { isMounted: false }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100)
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  render() {
    const { isMounted } = this.state

    return (
      <NavContainer>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Logo>
                  <LogoLink to="/">Logo</LogoLink>
                </Logo>
              </CSSTransition>
            )}
          </TransitionGroup>
          <NavLinks>
            <NavList>
              <TransitionGroup>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                      <NavListItem
                        key={i}
                        style={{ transitionDelay: `${i * 200}ms` }}
                      >
                        <NavLink key={i} href={url}>
                          {name}
                        </NavLink>
                      </NavListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </NavList>
          </NavLinks>
        </Navbar>
      </NavContainer>
    )
  }
}

export default Nav
