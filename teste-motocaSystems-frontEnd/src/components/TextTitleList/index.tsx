import { Container, Line } from "./style";

interface TextTitleListProps {
    name: string;
}

const TextTitleList: React.FC<TextTitleListProps> = ({ name }) => {
    return (
        <Container>
            <span>{name}</span>
            <Line />
        </Container>
    );
}

export default TextTitleList;
