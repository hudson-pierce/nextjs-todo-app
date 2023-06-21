import { Grid, Box } from '@mui/material';

export default function CustomGrid({ items, renderItem }) {
  return (
    <Grid container spacing={6}>
      {items.map((item, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={3}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {renderItem(item)}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}