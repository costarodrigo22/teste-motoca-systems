import styled from "styled-components"
import { Box, TextField, Button } from "@mui/material"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15vh;
  background: #2a233c;
`
export const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: #2a233c;
  padding: 10px;
  border-radius: 5px;
`

export const SearchInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #3a305c;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    & fieldset {
      border-color: #3a305c;
    }
    &:hover fieldset {
      border-color: #6b5da8;
    }
    &.Mui-focused fieldset {
      border-color: #6b5da8;
    }
  }
  & .MuiInputBase-input {
    color: #fff;
  }
  & .MuiSvgIcon-root {
    color: #fff;
  }
`

export const NewRecordButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  height: 40px;
  text-transform: none;
  &:hover {
    background-color: #0056b3;
  }
`

export const Line = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-left: 2%;

  &::after {
    content: "";
    position: absolute;
    width: 95%;
    height: 1px;
    background-color: white !important;
  }
`

export const ContainerLine = styled.div`
  width: 100%;
`

export const Leitors = styled.div`
  display: flex;
  width: 38%;
  margin-right: 2%;
`

export const Span = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 2%;
  width: 58%;

  span {
    display: flex;
    color: white;
    font-size: 26px;
  }
`
