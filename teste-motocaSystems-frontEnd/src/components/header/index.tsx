import { Container, Space } from "./styles"

import Profile from "../../assets/icon/profile.svg"
import House from "../../assets/icon/house.svg"

export default function Header() {
    return (
        <Container>

            <Space />
            <img src={House} alt="casa" width={25} className="short" />

            <Space />
            <img src={Profile} alt="perfil" width={35} />

            <Space />
        </Container>
    )
}