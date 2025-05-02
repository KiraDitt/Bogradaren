import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Paper, IconButton, Typography, Box, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header({ title = 'My Books' }) {
    const navigate = useNavigate();

    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 1,
                }}
            >
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIosRoundedIcon SX={{ color: '#3f554d' }} />
                </IconButton>
                <Typography
                    variant='subtitle1'
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: '#3f554d',
                        fontWeight: 'bold',
                        marginRight: 4,
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Paper>
    );
}