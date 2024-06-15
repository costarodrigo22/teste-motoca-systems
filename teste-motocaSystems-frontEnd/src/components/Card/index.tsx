import { StyledCard, ButtonBox, IconButton, CardContent, SepareitorContent, SepareitorTitle, Rows } from './style';

import { Typography, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Card = () => {
    return (
        <StyledCard>
            <CardContent>
                <SepareitorTitle>

                    <Typography variant="body2" color="primary" style={{ marginBottom: '8px' }}>
                        #0001
                    </Typography>

                </SepareitorTitle>

                <SepareitorContent>

                    <Rows>
                        <Typography variant="h6" component="div" >
                            HONDA POP 110I
                        </Typography>
                        <Chip label="Em estoque" color="success" style={{ padding: '8px', margin: '2px 2px 12px 12px' }} />
                    </Rows>

                    <Typography variant="body2">
                        Valor: R$ 15.000,00
                    </Typography>
                    <Typography variant="body2">
                        Cor: BRANCA
                    </Typography>
                </SepareitorContent>

            </CardContent>
            <ButtonBox>
                <IconButton color="#f44336">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="#ffffff" >
                    <VisibilityIcon />
                </IconButton>
            </ButtonBox>
        </StyledCard>
    );
};

export default Card;
