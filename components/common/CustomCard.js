import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function CustomCard({ children, title, onDelete, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onDelete();
  };

  return (
    <Card
      sx={{
        width: 300,
        cursor: 'pointer',
        transition: 'box-shadow 0.3s',
        boxShadow: isHovered ? '0 0 8px rgba(0, 0, 0, 0.4)' : '0 0 4px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent onClick={onClick}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>        
          <IconButton onClick={handleDeleteClick} aria-label="Remove">
            <CloseIcon fontSize="medium" />
          </IconButton>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
