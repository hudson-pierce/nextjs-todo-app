import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuButton from './MenuButton';

export default function Menu() {
    return (
        <AppBar position='sticky' sx={{backgroundColor: '#3d3d3d'}}>
            <Toolbar>
                <MenuButton route='/' title='Home'/>
                <MenuButton route='/workouts' title='Workouts'/>
                <MenuButton route='/dashboard' title='Dashboard'/>
            </Toolbar>
        </AppBar>
    );
}