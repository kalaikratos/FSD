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
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <InputLabel id="demo-simple-select-label">Shop</InputLabel>
          
        </div>
        <div>
        <Button style={{color: "white"}}>
          <ShoppingCartIcon />
          Cart ({cart})</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}