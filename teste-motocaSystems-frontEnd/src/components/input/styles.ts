import styled from "styled-components"

import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"

export const InputWrapper = styled.div`
  margin-bottom: 16px;
`

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`

export const StyledInputLabel = styled(InputLabel)`
  color: #e7e3fc;

  &.Mui-focused {
    color: #e7e3fc;
  }
`
export const StyledSelect = styled(Select)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #e7e3fc;
    }
    &:hover fieldset {
      border-color: #e7e3fc;
    }
    &.Mui-focused fieldset {
      border-color: #e7e3fc;
    }
  }
  & .MuiSelect-icon {
    color: #e7e3fc;
  }
  & .MuiInputBase-input {
    color: #e7e3fc;
  }
  & .MuiInputLabel-root {
    color: #e7e3fc;
  }
  & .MuiInputLabel-outlined {
    transform: translate(14px, 14px) scale(1);
    &.Mui-focused {
      transform: translate(14px, -6px) scale(0.75);
    }
  }
`

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #e7e3fc;
    }
    &:hover fieldset {
      border-color: #e7e3fc;
    }
    &.Mui-focused fieldset {
      border-color: #e7e3fc;
    }
  }
  & .MuiInputLabel-root {
    color: #e7e3fc;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: #e7e3fc;
  }
  & .MuiOutlinedInput-input {
    color: #e7e3fc;
  }
`
