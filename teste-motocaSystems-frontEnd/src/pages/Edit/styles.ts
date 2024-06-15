import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #2a233c !important;
  height: 91vh !important;
  overflow-y: hidden;

  h1 {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 19px;
  }
`
export const ContainerControler = styled.form``

export const ContainerContent = styled.div`
  h1 {
    margin-bottom: 3%;
  }
`
export const Space = styled.div`
  margin: 4px;
`

export const Form = styled.form`
  margin-left: 35%;
  margin-right: 35%;
  display: flex;
  flex-direction: column;

  @media (min-width: 381px) and (max-width: 559px) {
    margin-left: 20%;
    margin-right: 20%;
  }
  @media (min-width: 560px) and (max-width: px) {
    margin-left: 25%;
    margin-right: 25%;
  }

  @media (min-width: 150px) and (max-width: 380px) {
    margin-left: 15%;
    margin-right: 15%;
  }
`
