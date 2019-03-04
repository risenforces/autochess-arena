import React from "react"
import styled from "styled-components"
import Router from "next/router"

const StyledLink = styled.span`
  color: rgb(153, 153, 153);
  display: block;
  transition: color 0.2s ease 0s;
  font-size: 14px;
  line-height: 17px;
  padding: 8px 20px;
  cursor: pointer;

  &:hover {
    background-color: rgb(250, 250, 250);
    color: rgb(0, 0, 0);
  }
`

export const MiniProfileMenuItem = ({ children, to, external, ...rest }) => {
  const handle = external
    ? () => (window.location.href = to)
    : () => Router.push(to)

  return (
    <StyledLink onClick={handle} {...rest}>
      {children}
    </StyledLink>
  )
}
