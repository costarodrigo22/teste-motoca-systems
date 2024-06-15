import { Box, TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const FilterComponent: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#2A2549',
                padding: '10px',
                borderRadius: '5px',
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Buscar por código, nome e cor"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#fff' }} />
                        </InputAdornment>
                    ),
                    sx: { color: '#fff', backgroundColor: '#3A305C', borderRadius: '5px' }
                }}
                sx={{ flexGrow: 1, marginRight: 2 }}
            />
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{ backgroundColor: '#007BFF', textTransform: 'none' }}
            >
                Novo Registro
            </Button>
        </Box>
    );
};

export default FilterComponent;
