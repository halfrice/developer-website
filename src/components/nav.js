import React from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { navLinks } from "../config"
import { Link } from "gatsby"
import device from "../styles/device"
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
  z-index: 9000;
`
const Navbar = styled.nav`
  ${mixins.flex.between};
  color: ${theme.colors.lightSlate};
  width: 100%;
`
const Logo = styled.div`
  ${mixins.flex.center};
  width: 32px;
  height: 18px;
  background: ${theme.colors.darkPink};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -8px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 8px solid ${theme.colors.darkPink};
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 8px solid ${theme.colors.darkPink};
  }
`
const LogoLink = styled(Link)`
  color: ${theme.colors.lightSlate};
  font-weight: 800;
`
const HamburgerWrapper = styled.div``
const HamburgerContainer = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -15px 0 0;
  /* padding: 15px -12px 15px 15px; */
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${device.tablet`display: flex;`};
  ${device.phone`display: flex;`};
`
const Hamburger = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.ham.width}px;
  height: 24px;
`
const HamburgerBars = styled.div`
  background-color: transparent;
  position: absolute;
  width: ${theme.ham.width}px;
  height: 2px;
  border-radius: 3px;
  top: 50%;

  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${theme.colors.lightSlate};
    position: absolute;
    width: ${theme.ham.width}px;
    height: 2px;
  }
  &:before {
    top: ${props => (props.menuOpen ? `0` : `-7px`)};
    transform: rotate(${props => (props.menuOpen ? `45deg` : `0deg`)});
    transition: ${props =>
      props.menuOpen ? theme.ham.beforeActive : theme.ham.before};
  }
  &:after {
    bottom: ${props => (props.menuOpen ? `0` : `-7px`)};
    transform: rotate(${props => (props.menuOpen ? `-45deg` : `0deg`)});
    transition: ${props =>
      props.menuOpen ? theme.ham.afterActive : theme.ham.after};
  }
`
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${device.tablet`display: none;`};
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
  state = { isMounted: false, menuOpen: false }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100)
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
    console.log("menu toggled.")
  }

  render() {
    const { isMounted, menuOpen } = this.state

    return (
      <NavContainer>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                {/* <Logo>
                  <LogoLink to="/">Logo</LogoLink>
                </Logo> */}
                <LogoLink to="/">
                  <Logo>N</Logo>
                </LogoLink>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <HamburgerWrapper style={{ transitionDelay: `500ms` }}>
                  <HamburgerContainer onClick={() => this.toggleMenu()}>
                    <Hamburger>
                      <HamburgerBars menuOpen={menuOpen} />
                    </Hamburger>
                  </HamburgerContainer>
                </HamburgerWrapper>
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
