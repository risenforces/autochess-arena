import React from "react"
import styled from "styled-components"
import Link from "next/link"

const StyledLink = styled.a`
  color: rgb(153, 153, 153);
  display: block;
  text-decoration: none;
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

export const MiniProfileMenuItem = ({ children, toPage, ...rest }) => {
  if (toPage) {
    return (
      <Link passHref {...rest}>
        <StyledLink>{children}</StyledLink>
      </Link>
    )
  }
  return <StyledLink {...rest}>{children}</StyledLink>
}
