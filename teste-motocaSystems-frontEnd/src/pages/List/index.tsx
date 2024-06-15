import { Container, ContainerContent } from "./styles"

import TextTitleList from "../../components/TextTitleList"
import Card from "../../components/Card"

export default function List() {
    return (
        <Container>
            <TextTitleList name={"Tabela de Motos"} />
            <ContainerContent>
                <Card />
                <Card />
                <Card />
                <Card />
            </ContainerContent>

        </Container>
    )
}