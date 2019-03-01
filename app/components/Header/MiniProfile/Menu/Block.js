import styled from "styled-components"

export const MiniProfileMenuBlock = styled.div`
  width: 200px;
  padding: 8px 0;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 100%;

  border-radius: 5px;
  background-color: #fff;

  transform: ${({ isOpen }) =>
    isOpen ? "translateY(15px)" : "translateY(12px)"};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  box-shadow: ${({ isOpen }) =>
    isOpen
      ? "rgba(0, 0, 0, 0.12) 0px 6px 32px 0px"
      : "rgba(0, 0, 0, 0.02) 0px 4px 4px 0px"};
  transition: opacity 0.2s ease 0s, transform 0.2s ease 0s,
    box-shadow 0.5s ease 0s;
`
