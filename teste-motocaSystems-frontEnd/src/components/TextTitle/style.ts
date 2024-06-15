import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8em;
  height: 15vh;
  background: #2a233c;

  span {
    display: flex;
    color: white;
    width: 98%;
    margin-left: 2%;
    font-size: 26px;
  }
`

export const Line = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 95%;
    height: 1px;
    background-color: #fff;
  }
`
