import { InputWrapper } from "./styles";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export interface InputComponentProps {
    label: string;
    type: string;
    fullWidth?: boolean;
    width?: string;
    height?: string;
    options?: { value: string; label: string }[];
}

const InputComponent: React.FC<InputComponentProps> = ({ label, type = "text", fullWidth = true, width = '100%', height = 'auto', options, ...props }) => {
    return (
        <InputWrapper>
            {type === 'select' ? (
                <FormControl variant="outlined" fullWidth={fullWidth} sx={{ width: width }}>
                    <InputLabel sx={{
                        color: '#E7E3FC', '&.Mui-focused': { color: '#E7E3FC' }
                    }}>{label}</InputLabel>
                    <Select
                        label={label}
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
                            '& .MuiSelect-icon': {
                                color: '#E7E3FC',
                            },
                            '& .MuiInputBase-input': {
                                color: '#E7E3FC',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#E7E3FC',
                            },
                            '& .MuiInputLabel-outlined': {
                                transform: 'translate(14px, 14px) scale(1)',
                                '&.Mui-focused': {
                                    transform: 'translate(14px, -6px) scale(0.75)',
                                },
                            },
                        }}
                        {...props}
                    >
                        {options?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : (
                <TextField
                    label={label}
                    variant="outlined"
                    fullWidth={fullWidth}
                    type={type}
                    sx={{
                        width: width,
                        '& .MuiOutlinedInput-root': {
                            height: height,
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
                            color: '#E7E3FC',
                        },
                        'input': {
                            color: '#E7E3FC',
                        }
                    }}
                    {...props}
                />
            )
            }
        </InputWrapper >
    );
}

export default InputComponent;
