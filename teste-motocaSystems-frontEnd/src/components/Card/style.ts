import styled from "styled-components"

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #312d4b;
  color: #ffffff;
  padding: 16px;
  border-radius: 30px;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 2%;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 16px;
`

export const SepareitorTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`
export const SepareitorContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const Rows = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 16px;
  width: 50%;
`

export const IconButton = styled.button`
  border: 1px solid transparent;
  background: none;
  color: ${(props) => props.color};
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s;
`
