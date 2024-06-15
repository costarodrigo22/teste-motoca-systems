import { Container, Line } from "./style";

interface TextTitleProps {
    name: string;
}

const TextTitle: React.FC<TextTitleProps> = ({ name }) => {
    return (
        <Container>
            <span>{name}</span>
            <Line />
        </Container>
    );
}

export default TextTitle;
