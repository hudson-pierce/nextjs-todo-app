import Fab from '@mui/material/Fab';

export default function CustomFab({ color, onClick, children }) {
  return (
    <Fab variant='extended' color={color} onClick={onClick} sx={{ textTransform: 'none', borderRadius: '5px', margin: '2%' }}>
      {children}
    </Fab>
  );
}
