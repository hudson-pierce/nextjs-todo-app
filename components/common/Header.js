import Typography from '@mui/material/Typography';

export default function Header({title, children}) {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 3, textAlign: 'center' }}>
                {title}
            </Typography>
            {children}
        </div>
    );
}