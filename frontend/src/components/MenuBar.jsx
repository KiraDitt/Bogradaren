import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function MenuBar() {
  const [value, setValue] = useState(0);

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
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} sx={{ '& .Mui-selected': {
            color: '#3f554d',
            fontWeight: 'bold',
        } }}
      >
        <BottomNavigationAction label="My Books" icon={<MenuBookIcon sx= {{ color: '#3f554d'}}/>} />
        <BottomNavigationAction label="Search" icon={<SearchIcon  sx= {{ color: '#3f554d'}}/>} />
      </BottomNavigation>
    </Paper>
  );
}
