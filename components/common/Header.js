import Typography from '@mui/material/Typography';

export default function Header({title}) {
    return (
        <Typography variant='h3' sx={{ mb: 5, textAlign: 'center' }}>
            {title}
        </Typography>
    );
}