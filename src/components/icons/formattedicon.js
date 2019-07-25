import React from "react"
import PropTypes from "prop-types"
import {
  IconCodepen,
  IconDatabase,
  IconDevices,
  IconFacebook,
  IconGithub,
  IconGoogle,
  IconInstagram,
  IconLinkedin,
  IconTesseract,
  IconTwitter,
} from "~components/icons"

const FormattedIcon = ({ name }) => {
  switch (name) {
    case "Codepen":
      return <IconCodepen />
    case "Facebook":
      return <IconFacebook />
    case "Github":
      return <IconGithub />
    case "Google":
      return <IconGoogle />
    case "Instagram":
      return <IconInstagram />
    case "Linkedin":
      return <IconLinkedin />
    case "Twitter":
      return <IconTwitter />

    case "Database":
      return <IconDatabase />
    case "Devices":
      return <IconDevices />
    case "Devops":
      return <IconTesseract />

    default:
      return <IconGithub />
  }
}

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default FormattedIcon
