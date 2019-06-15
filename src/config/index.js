module.exports = {
  site: {
    title: "Neel Hiro - Software Engineer",
    shortTitle: "Neel Hiro",
    description: "Software Engineer Website",
    keywords: "software engineer, software, engineer, developer, dev",
    url: "https://neelhiro.com",
    prefix: "/",
    language: "en_US",
  },
  manifest: {
    name: "Neel Hiro - Software Engineer",
    shortName: "Neel Hiro",
    startUrl: "/",
    backgroundColor: "#000000",
    themeColor: "#555555",
    display: "standalone",
  },
  navLinks: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
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
    viewFactor: 0.4,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
