import React from "react"
import Helmet from "react-helmet"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"
import { navLinks } from "~config"
import { Menu } from "~components"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"
import { throttle } from "~utils"

const { colors, nav } = theme

const NavContainer = styled.header`
  ${mixins.flex.center};
  ${mixins.padding.sides};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props =>
    props.scrollDirection === "none" ? nav.height : nav.dirtyHeight};
  background-color: ${props =>
    props.scrollDirection === "up" ? colors.lightBlack : colors.dark};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  z-index: 11;
  transition: ${theme.transition};
  transform: translateY(
    ${props =>
      props.scrollDirection === "down" ? `-${nav.dirtyHeight}` : "0px"}
  );
`
const Navbar = styled.nav`
  ${mixins.flex.between};
  ${device.tablet`flex-direction: row-reverse;`};
  color: ${theme.colors.lightSlate};
  width: 100%;
  z-index: 12;
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
const HamburgerContainer = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -15px 0 0;
  ${device.tablet`margin: 0 0 0 -15px`};
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
  ${mixins.flex.center};
  ${device.tablet`display: none;`};
  margin: 0 -15px 0 0;
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
const NavLink = styled(AnchorLink)`
  padding: 12px 16px;
`

class Nav extends React.Component {
  state = {
    isMounted: false,
    menuOpen: false,
    menuScrolling: false,
    scrollDirection: "none",
    lastScrollTop: 0,
    prevScrolled: 0,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100)

    window.addEventListener("scroll", () => throttle(this.handleScroll()))
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })

    window.removeEventListener("scroll", () => this.handleScroll())
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, prevScrolled } = this.state
    const scrolled = window.scrollY
    const navHeight = parseInt(nav.height)
    const delta = 5

    if (!isMounted || Math.abs(prevScrolled - scrolled) <= delta || menuOpen) {
      return
    }

    if (scrolled < delta) {
      this.setState({ scrollDirection: "none" })
    } else if (scrolled > prevScrolled && scrolled > navHeight) {
      if (scrollDirection !== "down") {
        this.setState({ scrollDirection: "down" })
      }
    } else if (scrolled + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        this.setState({ scrollDirection: "up" })
      }
    }

    this.setState({ prevScrolled: scrolled })
  }

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state

    return (
      <NavContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? "hidden" : ""} />
        </Helmet>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <LogoLink to="/" onClick={menuOpen ? this.toggleMenu : null}>
                  <Logo>N</Logo>
                </LogoLink>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <HamburgerContainer
                  onClick={this.toggleMenu}
                  style={{ transitionDelay: `500ms` }}
                >
                  <Hamburger>
                    <HamburgerBars menuOpen={menuOpen} />
                  </Hamburger>
                </HamburgerContainer>
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
                      <NavListItem style={{ transitionDelay: `${i * 200}ms` }}>
                        <NavLink key={i} href={url} offset={-60}>
                          {name}
                        </NavLink>
                      </NavListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </NavList>
          </NavLinks>
        </Navbar>

        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </NavContainer>
    )
  }
}

export default Nav
