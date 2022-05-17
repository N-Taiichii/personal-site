import styled from "styled-components";
import "animate.css";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #bbdef0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: fixed;
  top: 0;
  z-index: 10;
  animation: fadeInDown;
  animation-duration: 1s;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkScroll)`
  color: #505a5b;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s ease-in;

  &:hover {
    color: #f49f0a;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3rem;
    cursor: pointer;
    color: #505a5b;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #f49f0a;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #505a5b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #f49f0a;
  }

  &.active {
    border-bottom: 3px solid #f49f0a;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Resume = styled.a`
  border-radius: 50px;
  background: linear-gradient(45deg, #505a5b, #00a6a6);
  white-space: nowrap;
  padding: 10px 22px;
  color: #bbdef0;
  font-size: 2rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.6s ease-in-out;
    background: linear-gradient(45deg, #f49f0a, #505a5b);
    color: #505a5b;
  }
`;
