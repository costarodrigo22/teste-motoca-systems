import { Container, ContainerContent, Form, ContainerControler, Space } from "./styles"

import TextTitle from "../../components/TextTitle"
import InputComponent from "../../components/input"
import ButtonComponent from "../../components/Button"

export default function Edit() {

    const statusOptions = [
        { value: 'active', label: 'Ativo' },
        { value: 'inactive', label: 'Inativo' },
        { value: 'pending', label: 'Pendente' },
    ];

    return (
        <Container>
            <TextTitle name={"Editar"} />
            <ContainerControler>
                <ContainerContent>
                    <h1>Edite as informações que preferir! 📝</h1>
                    <Form>
                        <InputComponent label={"Código"} type="password" height="50px" />
                        <Space />
                        <InputComponent label={"Modelo da moto"} type="text" height="50px" />
                        <Space />
                        <InputComponent label={"Cor"} type="text" height="50px" />
                        <Space />
                        <InputComponent label={"Valor"} type="text" height="50px" />
                        <Space />
                        <InputComponent label={"Status"} type="select" options={statusOptions} height="50px" />
                        <Space />
                        <ButtonComponent name="ATUALIZAR" imgSrc="../../src/assets/icon/update.svg" />
                    </Form>
                </ContainerContent>
            </ContainerControler>
        </Container>
    )
}