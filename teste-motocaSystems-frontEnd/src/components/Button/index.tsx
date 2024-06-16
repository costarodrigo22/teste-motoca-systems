import { Button } from "./styles"

interface ButtonComponentProps {
    name: string;
    imgSrc?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ name, imgSrc }) => {
    return (
        <Button type="submit">
            {imgSrc && <img src={imgSrc} alt={`${name} icon`} style={{ marginRight: '8px' }} />}
            {name}  </Button>
    )
}

export default ButtonComponent;