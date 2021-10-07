import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
      >
        <List>
          {['Overview', 'Components'].map((text) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid sx={{ width: 1 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingY: 20,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: 'h4.fontSize',
                marginLeft: 10,
              }}
            >
              CatppuccinoUI
            </Typography>
          </Box>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
