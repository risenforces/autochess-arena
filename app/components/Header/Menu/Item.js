import React from "react"
import styled from "styled-components"
import Router from "next/router"

const StyledHeaderMenuItem = styled.a`
  display: block;
  font-size: 12px;
  padding: 10px;
  color: #999;
  text-transform: uppercase;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`

export const HeaderMenuItem = ({
  children,
  to,
  external,
  condition,
  ...rest
}) => {
  if (condition !== undefined && !condition) return null

  const handle = external
    ? () => (window.location.href = to)
    : () => Router.push(to)

  return (
    <StyledHeaderMenuItem onClick={handle} {...rest}>
      {children}
    </StyledHeaderMenuItem>
  )
}
