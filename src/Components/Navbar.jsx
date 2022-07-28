import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { toggleData } from '../Reudx/Auth/Action';
export default function Navbar() {
  const token=useSelector(state=>state.auth.toggle)
  console.log(token)
  const [state, setState] = React.useState(false);
   const dispatch=useDispatch()
  const toggleDrawer =
    (open) => {setState( open )};
    
    

     const handleLogout=()=>{
      
      dispatch(toggleData())
      
     }

    const list = () => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={()=>{toggleDrawer( false)}}
        onKeyDown={()=>{toggleDrawer( false)}}
      >
        <List>
          <Link to="/">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
          
          
          </Link>
         
          <Link to="/grocery">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Grocery"} />
              </ListItemButton>
            </ListItem>
          
          
          </Link>
           
          <Link to="/pharmacy">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Pharmacy"} />
              </ListItemButton>
            </ListItem>
          
          
          </Link>

        </List>
        <Divider />
        <List>

            {
            token  ?<ListItem disablePadding>
              <ListItemButton onClick={handleLogout}  >
                <ListItemIcon>
               <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Log out"} />
              </ListItemButton   >
            </ListItem>  :
            <Link to="/login">
            <ListItemButton >
                <ListItemIcon >
               <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItemButton>
                 </Link>
         }
        </List> 
      </Box>
    );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Drawer
        anchor={"left"}
        open={state}
        onClose={()=>{toggleDrawer( false)}}
      >
        {list()}
      </Drawer>
        <Toolbar>
          <IconButton
          onClick={()=>{toggleDrawer( true)}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {/* <Link to="/">
          <Button color="inherit" className='home' >Home</Button>
          </Link> */}
           {
            token ? <Button>Logout</Button>: null
           }
           {
           token?   <Button   onClick={handleLogout} color="inherit">Logout</Button>  : <Link to="/login">
            <Button color="inherit">Login</Button>
            </Link>
           }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}






// export default function TemporaryDrawer() {
 

 

//   return (
//     <div>
    
//         <React.Fragment key={left}>
//           <Button onClick={}></Button>
          
//         </React.Fragment>
//     </div>
//   );


