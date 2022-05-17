import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #bbdef0;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  animation: fadeInDown;
  animation-duration: 2s;
`;

export const CloseIcon = styled(FaTimes)`
  color: #505a5b;
  transition: 0.2s ease-in;

  &:hover {
    color: #f49f0a;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 4rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #505a5b;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  margin-right: 25px;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #505a5b;
  cursor: pointer;

  &:hover {
    color: #f49f0a;
    background: #505a5b;
    border-radius: 15px;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarResume = styled.a`
  border-radius: 50px;
  background: linear-gradient(45deg, #505a5b, #00a6a6);
  white-space: nowrap;
  padding: 16px 64px;
  color: #bbdef0;
  font-size: 2.5rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(45deg, #f49f0a, #505a5b);
    color: #505a5b;
  }
`;
