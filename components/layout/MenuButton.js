import Button from '@mui/material/Button'
import { useRouter } from 'next/router';

export default function MenuButton({ route, title }) {
    const router = useRouter();

    return (
        <div style={{padding: 10}}>
            <Button color="inherit" onClick={() => router.push(route)} sx={{ textTransform: 'none', fontSize: '20px'}}>
                {title}
            </Button>
        </div>
    );
}

