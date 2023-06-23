import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function CustomCard({ children, title, onDelete, onClick, disable }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    if (disable) {
      setIsCardClicked(true);
    } else {
      setIsCardClicked(false);
      onClick();
    }
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onDelete();
  };

  return (
    <Card
      sx={{
        width: 300,
        cursor: disable ? 'not-allowed' : 'pointer',
        transition: 'box-shadow 0.3s',
        boxShadow: isHovered ? '0 0 8px rgba(0, 0, 0, 0.4)' : '0 0 4px rgba(0, 0, 0, 0.2)',
        opacity: disable ? 0.5 : 1, // Gray out the card when disabled
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <IconButton onClick={handleDeleteClick} aria-label="Remove" disabled={disable}>
            <CloseIcon fontSize="medium" />
          </IconButton>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
