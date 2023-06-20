import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WorkoutDetails from '../components/workouts/WorkoutDetails';

// Dummy data (will be replaced with data from DB)
const EXERCISES = [
  'Bench Press',
  'Deadlifts',
  'Dumbbell Fly',
  'Shoulder Press',
  'Squats'
];

// Dummy data (will be replaced with data from DB)
const WORKOUTS = [
  {
    name: "Workout A",
    exercises: [
      {
        name: "Squats",
        reps: 10,
        sets: 3,
        weight: 240
      },
      {
        name: "Deadlifts",
        reps: 5,
        sets: 3,
        weight: 300
      },      
      {
        name: "Lunges",
        reps: 10,
        sets: 3,
        weight: 100
      },
      {
        name: "Crunches",
        reps: 10,
        sets: 3,
        weight: 10
      },
      {
        name: "Kettlebell Swings",
        reps: 10,
        sets: 3,
        weight: 10
      },
    ]
  },
  {
    name: "Workout B",
    exercises: [
      {
        name: "Bench Press",
        reps: 5,
        sets: 3,
        weight: 120
      },
      {
        name: "Shoulder Press",
        reps: 5,
        sets: 3,
        weight: 50
      }
    ]
  }
];

// width of the sidebar
const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [workouts, setWorkouts] = useState(WORKOUTS);
  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0]);

  const handleWorkoutClick = (event) => {
    setSelectedWorkout(workouts.find((workout) => workout.name === event.target.textContent));
  };

  useEffect(() => {
    console.log(selectedWorkout);
  }, [selectedWorkout]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {selectedWorkout.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {workouts.map((workout) => (
            <ListItem key={workout.name} disablePadding>
              <ListItemButton onClick={handleWorkoutClick}>
                <ListItemIcon>
                  <FitnessCenterIcon/>
                </ListItemIcon>
                <ListItemText primary={workout.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <WorkoutDetails workout={selectedWorkout}></WorkoutDetails>
      </Main>
    </Box>
  );
}
