import React from "react"
import styled from "styled-components"
import Router from "next/router"

const StyledLink = styled.a`
  color: #067df7;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Link = ({ href, external, children, ...rest }) => {
  const handler = external
    ? () => (window.location.href = href)
    : () => Router.push(href)

  return (
    <StyledLink onClick={handler} {...rest}>
      {children}
    </StyledLink>
  )
}
