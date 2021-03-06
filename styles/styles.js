import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const bounceIn = keyframes`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;

const layout = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100vh;
  position: relative;
  @media (min-width: 25em) {
    max-width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 43.75em) {
    max-width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 56.25em) {
    max-width: 60%;
    margin: 0 auto;
  }
  @media (min-width: 75em) and (max-width: 486.063em) {
    max-width: 35rem;
    margin: 0 auto;
  }
`;

const main = styled.main`
  margin-top: 3rem;
  width: 100%;
  min-height: 81vh;
  flex: 1;
  display: flex;
  flex-flow: column wrap;
`;

const form = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  place-content: center;

  label {
    display: block;
    color: ${({ theme }) => theme.font};
    font-family: ${({ theme }) => theme.fontSecondary};
    margin: 0 0 10px 0;
    width: 100%;
    font-size: clamp(14px, 1rem, 2vw);
  }
  label:last-of-type {
    margin-top: 1rem;
  }
  input {
    padding: 1rem;
    outline: 0;
    margin: 0 0 10px 0;
    border: none;
    border-radius: 4px;
    width: 100%;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.input};
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: clamp(12px, 2vw, 0.8rem);
    &::placeholder {
      color: ${({ theme }) => theme.textLow};
    }
  }
`;

const button = styled.button`
  margin: 15px 0;
  border: none;
  outline: none;
  padding: 15px 5px;
  border-radius: 8px;
  width: 45%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background: ${({ theme }) => theme.primary};
  font-family: ${({ theme }) => theme.fontSecondary};
  color: #fefefe;
  animation: ${bounceIn} 600ms both;
  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
  &.btn-active {
    background: ${({ theme }) => theme.primary};
  }
  &.btn-inactive {
    background: ${({ theme }) => theme.disabled};
  }
`;

const div = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const section = styled.section`
  width: 100%;
  margin-top: 1rem;

  .container {
    background: ${({ theme }) => theme.box};
    width: 100%;
    height: max-content;
    padding: 10px 0 0 10px;
    border-left: 3px solid ${({ theme }) => theme.textLow};
    position: relative;
    margin-top: 2rem;
    animation: ${fadeInDown} 1000ms both;
    animation-iteration-count: 1;
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      a {
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: inset 0 -6px ${({ theme }) => theme.primary};
        font-family: ${({ theme }) => theme.fontSecondary};
        transition: box-shadow 0.4s ease-in-out;
        &:hover {
          box-shadow: inset 0 -6px ${({ theme }) => theme.primaryHover};
          animation: ${Pulse} 500ms both;
        }
      }
      img {
        display: block;
        position: absolute;
        top: 15px;
        right: 0;
        margin-right: 10px;
        outline: 0;
        border: 0;
        cursor: pointer;
        background: rgba(0, 0, 0, 0);
        &:hover {
          animation: ${Pulse} 1000ms both;
        }
      }
    }
    .added {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      p {
        font-size: clamp(10px, 2vw, 0.6rem);
        font-family: ${({ theme }) => theme.fontSecondary};
        margin-right: 10px;
      }
    }
  }
`;

const hr = styled.hr`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  height: 1px;
  border: none;
  opacity: 0.2;
  animation: ${zoomIn} 1000ms both;
`;

const error = styled.span`
  display: block;
  font-size: clamp(12px, 2vw, 0.8rem);
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.title};
  animation: ${fadeIn} 1000ms both;
`;

const header = styled.header`
  height: 2rem;
`;

export { layout, main, form, button, div, section, hr, error, header };
