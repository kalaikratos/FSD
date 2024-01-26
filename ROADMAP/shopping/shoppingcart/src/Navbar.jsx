import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';

import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Navbar({cart}) {
  return (
    <AppBar position="static" className='nav'>
      <Toolbar>
        <div id="navbar">
          <Typography variant="h6" ClassName="nav-cont">
            
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" >
            Home
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" >
            About
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" >
            Contact
          </Typography>
          
        </div>
        <div>
        <Button style={{color: "black"}}>
          <ShoppingCartIcon />
          Cart ({cart})</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}