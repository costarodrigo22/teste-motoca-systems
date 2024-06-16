import { StyledFormControl, InputWrapper, StyledInputLabel, StyledSelect, StyledTextField } from "./styles"

import MenuItem from '@mui/material/MenuItem';

interface InputComponentProps {
    label: string;
    type?: string;
    fullWidth?: boolean;
    options?: { value: string; label: string }[];
}

const InputComponent: React.FC<InputComponentProps> = ({ label, type = "text", fullWidth = true, options, ...props }) => {

    return (
        <InputWrapper>
            {type === 'select' ? (
                <StyledFormControl variant="outlined" fullWidth={fullWidth} >
                    <StyledInputLabel>
                        {label}
                    </StyledInputLabel>
                    <StyledSelect
                        label={label}
                        {...props}
                    >
                        {options?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </StyledFormControl>
            ) : (
                <StyledTextField
                    label={label}
                    variant="outlined"
                    fullWidth={fullWidth}
                    type={type}
                    sx={{ height: '50%' }}
                    {...props}
                />
            )}
        </InputWrapper>
    );
};

export default InputComponent;
