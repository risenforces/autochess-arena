import styled from "styled-components"
import Router from "next/router"

const StyledIntroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 16px;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none !important;
  border-radius: 5px;
  color: ${props => props.color || "#000"};
  background-color: ${props => props.backgroundColor || "#fff"};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 10px;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 7px 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 16px;
  }
`

export const IntroButton = ({ href, external, children, ...rest }) => {
  const handler = external
    ? () => (window.location.href = href)
    : () => Router.push(href)

  return (
    <StyledIntroButton onClick={handler} {...rest}>
      {children}
    </StyledIntroButton>
  )
}
