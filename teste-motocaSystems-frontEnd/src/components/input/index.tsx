import { InputWrapper } from "./styles"

import TextField from '@mui/material/TextField';

export interface InputComponentProps {
    label: string;
    type: string;
    fullWidth?: boolean;
}

const InputComponent: React.FC<InputComponentProps> = ({ label, type = "text", fullWidth = true, ...props }) => {
    return (
        <InputWrapper>
            <TextField
                label={label}
                variant="outlined"
                fullWidth={fullWidth}
                type={type}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#E7E3FC',
                        },
                        '&:hover fieldset': {
                            borderColor: '#E7E3FC',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#E7E3FC',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#E7E3FC',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#E7E3FC',
                    },
                    '& .MuiOutlinedInput-input': {
                        color: '##E7E3FC',
                    }, '& .MuiInputLabel-input': {
                        color: '##E7E3FC',
                    }, 'input': {
                        color: '#E7E3FC',
                    }
                }}
                {...props}
            />
        </InputWrapper>
    );
}

export default InputComponent;
