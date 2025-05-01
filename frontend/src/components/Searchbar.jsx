import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function Searchbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        padding: '0 12px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0px 1px 4px rgba(0,0,0,0.1)',
        '&:hover': {
            backgroundColor: '#f6f6f6',
        }
      }}
    >
      <IconButton sx={{ p: '10px', color: '#3f554d' }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Title, author or ISBN"
        sx={{
          ml: 2,
          flex: 1,
          color: '#6b6b6b',
          '&::placeholder': {
            opacity: 1,
            color: '#6b6b6b',
          },
        }}
      />
      <IconButton sx={{ p: '10px', color: '#3f554d' }}>
        <CameraAltIcon />
      </IconButton>
    </Box>
  );
}
