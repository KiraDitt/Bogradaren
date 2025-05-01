import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MenuBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={location.pathname} // Matches current route
                onChange={(event, newValue) => {
                    navigate(newValue); // Navigate to new route
                }} sx={{
                    '& .Mui-selected': {
                        color: '#3f554d',
                        fontWeight: 'bold',
                    }
                }}
            >
                <BottomNavigationAction
                    label="Home"
                    value="/"
                    icon={<HomeIcon sx={{ color: '#3f554d' }} />}
                />
                <BottomNavigationAction
                    label="My Books" 
                    value="/my-books"
                    icon={<MenuBookIcon sx={{ color: '#3f554d' }} />} 
                />
                <BottomNavigationAction 
                    label="Search"
                    value="/search" 
                    icon={<SearchIcon sx={{ color: '#3f554d' }} />} 
                />
            </BottomNavigation>
        </Paper>
    );
}
