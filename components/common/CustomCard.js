import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function CustomCard({ children, title, onDelete, onClick }) {
  const [isIconButtonVisible, setIconButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setIconButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIconButtonVisible(false);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onDelete();
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardContent onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          {isIconButtonVisible && (
            <IconButton onClick={handleDeleteClick} aria-label="Remove">
              <CloseIcon fontSize="medium" />
            </IconButton>
          )}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
