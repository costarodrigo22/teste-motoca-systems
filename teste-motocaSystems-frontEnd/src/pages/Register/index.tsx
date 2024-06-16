import { Container, ContainerContent, Form, ContainerControler, Space } from "./styles"

import TextTitle from "../../components/TextTitle"
import InputComponent from "../../components/Input"
import ButtonComponent from "../../components/Button"

export default function Register() {

    const statusOptions = [
        { value: 'active', label: 'Ativo' },
        { value: 'inactive', label: 'Inativo' },
        { value: 'pending', label: 'Pendente' },
    ];

    return (
        <Container>
            <TextTitle name={"Registro de Motos"} />
            <ContainerControler>
                <ContainerContent>
                    <h1>Preencha as informações a baixo para registrar uma Moto 🏍️</h1>
                    <Form>
                        <InputComponent label={"Código"} type="password" />
                        <Space />
                        <InputComponent label={"Modelo da moto"} type="text" />
                        <Space />
                        <InputComponent label={"Cor"} type="text" />
                        <Space />
                        <InputComponent label={"Valor"} type="text" />
                        <Space />
                        <InputComponent label={"Status"} type="select" options={statusOptions} />
                        <Space />
                        <ButtonComponent name="REGISTRAR" imgSrc="../../src/assets/icon/plus.png" />
                    </Form>
                </ContainerContent>
            </ContainerControler>
        </Container>
    )
}