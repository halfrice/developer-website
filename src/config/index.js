module.exports = {
  site: {
    title: "Neel Hiroshi - Software Engineer",
    shortTitle: "Neel Hiroshi",
    description:
      "Neel Hiroshi is a Software and DevOps Engineer based in San Jose, CA who is disrupting digital media and making the world a better place through constructing elegant hierarchies for maximum code reuse and extensibility.",
    keywords:
      "Neel Hiroshi, Neel, Hiroshi, Halfrice, software engineer, devops engineer, software, devops, dev-ops, front-end engineer, back-end engineer, full-stack engineer, front end, back end, full stack, engineer, web developer, game developer, developer, dev, javascript",
    url: "https://neelhiro.com",
    prefix: "/",
    language: "en_US",
  },
  manifest: {
    name: "Neel Hiroshi - Software Engineer",
    shortName: "Neel Hiroshi",
    startUrl: "/",
    backgroundColor: "#000000",
    themeColor: "#555555",
    display: "standalone",
  },
  socialMedia: [
    // { name: "Facebook", url: "#", color: "#3b5998" },
    {
      name: "Google",
      url: "#",
      color: "#4285f4",
      username: "neelhiroshi@gmail.com",
    },
    {
      name: "Twitter",
      url: "#",
      color: "#1da1f2",
      username: "twitter.com/neelhiroshi",
    },
    {
      name: "Linkedin",
      url: "#",
      color: "#405de6",
      username: "linkedin.com/neelhiroshi",
    },
    {
      name: "Github",
      url: "#",
      color: "#4078c0",
      username: "github.com/halfrice",
    },
    {
      name: "Codepen",
      url: "#",
      color: "#0ebeff",
      username: "codepen.com/halfrice",
    },
  ],
  navLinks: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Apps",
      url: "#apps",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ],
  statusLinks: [
    { name: "React", url: "#" },
    { name: "GatsbyJS", url: "#" },
    { name: "Netlify", url: "#" },
  ],
  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "50px",
    rotate: { x: 0, y: 0, z: 0 },
    delay,
    useDelay: "always",
    duration: 600,
    opacity: 0,
    scale: 1,
    easing: "ease-in-out",
    desktop: true,
    mobile: true,
    reset: false,
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
