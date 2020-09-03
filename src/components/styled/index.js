import styled, { css, keyframes } from "styled-components";
import { Button } from "react-bootstrap";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const StyledButton = styled(Button)`
  font-family: ${({ theme }) => theme.fontStyle.button};
  animation: ${fadeIn} 0.2s ease-in-out;

  ${({ secondary }) =>
    secondary &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      padding: 0;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      position: relative;
      width: max-content;
      &::before {
        content: "";
        position: absolute;
        bottom: -1px;
        width: 0px;
        height: 2px;
        transition: all 0.5s ease-in-out;
        opacity: 0;
        background: ${({ theme }) => theme.colors.primary};
      }
      &:active,
      &:focus {
        background: #cc8c00;
      }

      &:hover {
        &::before {
          width: 100%;
          opacity: 1;
        }
        color: ${({ theme }) => theme.colors.primary};
        border-radius: 0;
        background: none;
      }
    `};

  ${({ primary }) =>
    primary &&
    css`
      padding: 6px 1.5rem;
      border: none;
      background: ${({ theme }) => theme.colors.primary};
      color: black;
      text-transform: uppercase;
      font-size: 1.2rem;
      border-radius: 0;
      height: 40px;
      line-height: 32px;
      letter-spacing: 0.5px;
      transition: background 0.3s ease-in-out;

      &:hover {
        background: #cc8c00;
        color: black;
      }
      &:active,
      &:focus {
        background: #cc8c00;
      }
      @media ${({ theme }) => theme.mediaQueries.above1200} {
        font-size: 1.5rem;
        padding: 1rem 1.5rem;
        height: 60px;
        line-height: 32px;
        width: max-content;
      }
    `};
`;
