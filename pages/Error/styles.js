import styled, { keyframes } from 'styled-components';

const pscaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.8);
  }
`;

const fadeBigInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Container = styled.section`
  position: absolute;
  left: 0;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  place-content: center;
  transition: all 0.6s ease-out;
  overflow-x: hidden;
  padding: 10px;
  img {
    width: 50%;
    animation: ${fadeBigInLeft} 700ms both;
  }
  p {
    display: inline;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: clamp(20px, 3vw, 2.5rem);
    color: #c14c6f;
    animation: ${fadeInRight} 700ms ease-in-out both;
  }
  a {
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: clamp(15px, 2vw, 1.5rem);
    color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    animation: ${pscaleIn} 2000ms both;
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export { Container };
