import { SearchInput, NewRecordButton, Container, ContainerLine, Line, ContainerBox, Span, Leitors } from "./style"

import { InputAdornment } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';

interface TextTitleProps {
    name: string;
}


const FilterComponent: React.FC<TextTitleProps> = ({ name }) => {
    return (
        <Container>
            <ContainerBox>
                <Span>
                    <span>{name}</span>
                </Span>
                <Leitors>
                    <SearchInput
                        variant="outlined"
                        placeholder="Buscar por código, nome e cor"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ flexGrow: 1, marginRight: 2 }}
                    />
                    <NewRecordButton
                        variant="contained"
                        startIcon={<AddIcon />}
                    >
                        Novo Registro
                    </NewRecordButton>
                </Leitors>
            </ContainerBox>
            <ContainerLine>
                <Line />
            </ContainerLine>

        </Container>

    );
};

export default FilterComponent;