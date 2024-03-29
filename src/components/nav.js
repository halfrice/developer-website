import React from "react"
import Helmet from "react-helmet"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"
import { navLinks } from "~config"
import { Menu } from "~components"
import {
  FormattedIcon,
  IconFloppy,
  IconDownload,
  IconHalfrice,
} from "~components/icons"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"
import { throttle } from "~utils"

const { colors, nav, fontSize, fonts } = theme

const NavContainer = styled.header`
  ${mixins.flex.between};
  ${mixins.padding.sides};
  ${props => (props.scrollDirection !== "none" ? mixins.navShadow : null)};
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
  /* ${device.tablet`flex-direction: row-reverse;`}; */
  position: relative;
  color: ${colors.lightSlate};
  width: 100%;
  font-family: ${fonts.sourceSansPro};
  z-index: 12;
`
const LogoLink = styled(Link)`
  ${mixins.flex.center};
  margin: 0;
  /* margin: 0 0 0 -15px; */
  /* ${device.tablet`margin: 0 -15px 0 0;`}; */
  /* padding: 15px; */
`
const LogoWrapper = styled.div`
  width: 32px;
  height: 32px;
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    /* stroke: ${colors.lightGreen}; */
    user-select: none;
    transition: ${theme.shortTransition};
    #circle {
      stroke: ${colors.lightGreen};
    }
    #n {
      stroke: ${colors.lightGreen};
    }
    &:active,
    &:focus,
    &:hover {
      opacity: 0.5;
    }
  }
`
const HamburgerContainer = styled.div`
  ${mixins.flex.center};
  overflow: visible;
  margin: 0 -15px 0 0;
  /* ${device.tablet`margin: 0 0 0 -15px`}; */
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
  min-height: 24px;
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
  position: relative;
  ${device.tablet`display: none;`};
`
const NavList = styled.ol`
  list-style: none;
  div {
    ${mixins.flex.between};
  }
`
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSize.md};
  font-weight: 600;
`
const NavLink = styled(AnchorLink)`
  padding: 8px 12px;
  transition: ${theme.shortTransition};
  svg {
    fill: ${colors.lightGreen};
    stroke: ${colors.lightGreen};
    width: ${fontSize.lg};
    height: ${fontSize.lg};
    margin-right: 10px;
  }
`
const ResumeLink = styled.a`
  ${mixins.flex.center};
  font-size: ${fontSize.md};
  font-weight: 600;
  padding: 8px 12px;
  margin: 0 -15px 0 10px;
  color: ${colors.lightSlate};
  transition: ${theme.shortTransition};
  &:active,
  &:focus,
  &:hover {
    color: ${colors.darkSlate};
    transition: ${theme.transition};
    svg {
      fill: ${colors.darkSlate};
    }
  }
  svg {
    width: ${fontSize.md};
    height: ${fontSize.md};
    fill: ${colors.lightSlate};
    margin-right: 7px;
    transition: ${theme.transition};
  }
`

class Nav extends React.Component {
  state = {
    isMounted: false,
    menuOpen: false,
    scrollDirection: "none",
    prevY: 0,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100)

    window.addEventListener("scroll", () => throttle(this.handleScroll()))
    window.addEventListener("resize", () => throttle(this.handleResize()))
    window.addEventListener("keydown", e => this.handleKeydown(e))
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })

    window.removeEventListener("scroll", () => this.handleScroll())
    window.removeEventListener("resize", () => this.handleResize())
    window.removeEventListener("keydown", e => this.handleKeydown(e))
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

  calcNavHeight() {
    const { scrollDirection } = this.state

    return scrollDirection === "none"
      ? parseInt(nav.height)
      : parseInt(nav.dirtyHeight) + 20
  }

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, prevY } = this.state
    const y = window.scrollY
    const navHeight = this.calcNavHeight()
    const delta = 5

    if (!isMounted || Math.abs(prevY - y) <= delta || menuOpen) {
      return
    }

    if (y < delta) {
      this.setState({ scrollDirection: "none" })
    } else if (y > prevY && y > navHeight) {
      if (scrollDirection !== "down") {
        this.setState({ scrollDirection: "down" })
      }
    } else if (y + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        this.setState({ scrollDirection: "up" })
      }
    }

    this.setState({ prevY: y })
  }

  handleResize = () => {
    if (window.innerWidth >= 899.98 && this.state.menuOpen) {
      this.toggleMenu()
    }
  }

  handleKeydown = e => {
    if (!this.state.menuOpen) {
      return
    }

    if (e.which === 27 || e.key === "Escape") {
      this.toggleMenu()
    }
  }

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state
    const navHeight = this.calcNavHeight()

    return (
      <NavContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? "blur" : ""} />
        </Helmet>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <LogoLink to="/" onClick={menuOpen ? this.toggleMenu : null}>
                  <LogoWrapper>
                    <IconHalfrice />
                  </LogoWrapper>
                </LogoLink>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <HamburgerContainer
                  onClick={this.toggleMenu}
                  style={{ transitionDelay: `600ms` }}
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
                          {/* <FormattedIcon name={name} /> */}
                          {name}
                        </NavLink>
                      </NavListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </NavList>

            <TransitionGroup>
              {isMounted && (
                <CSSTransition classNames="fadedown" timeout={3000}>
                  <div style={{ transitionDelay: `600ms` }}>
                    <ResumeLink
                      href="/resume"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <IconDownload />
                      Resume
                    </ResumeLink>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </NavLinks>
        </Navbar>

        <Menu
          menuOpen={menuOpen}
          toggleMenu={this.toggleMenu}
          navHeight={navHeight}
        />
      </NavContainer>
    )
  }
}

export default Nav
