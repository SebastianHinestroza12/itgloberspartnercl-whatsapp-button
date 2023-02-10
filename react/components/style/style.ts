import styled from 'styled-components'

const StyledComponent = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 53px !important;
  height: 52px;
  background-color: black;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  left: 15px;
  z-index: 1200;
  animation: bouncing 2s ease-in-out infinite;

  @keyframes bouncing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
`

export { StyledComponent}
