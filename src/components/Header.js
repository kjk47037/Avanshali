import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Typography, 
  Container, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: theme.spacing(2, 0),
  width: '100%',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginRight: theme.spacing(3),
  fontSize: '16px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: '24px',
  fontFamily: 'Poppins, sans-serif',
  letterSpacing: '0.5px',
}));

const ContactButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: '8px 24px',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '0.5px',
  borderWidth: '1px',
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    borderWidth: '1px',
    backgroundColor: 'rgba(124, 134, 189, 0.04)',
  }
}));

const MobileNavContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const DesktopNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ToolbarWrapper = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: 0,
  position: 'relative',
}));

const CenterNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const navItems = [
  { label: 'About Us', href: '#' },
  { label: 'Vision', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Blog', href: '#' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2 }}>
        <LogoText variant="h6" component="div">
          AVANSHALI
        </LogoText>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ContactButton variant="outlined" color="primary">
              CONTACT
            </ContactButton>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <ToolbarWrapper disableGutters>
          <LogoText
            variant="h6"
            noWrap
            component="a"
            href="/"
          >
            AVANSHALI
          </LogoText>
          
          <MobileNavContainer>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </MobileNavContainer>
          
          <CenterNavContainer>
            {navItems.map((item) => (
              <NavButton key={item.label} href={item.href}>
                {item.label}
              </NavButton>
            ))}
          </CenterNavContainer>

          <DesktopNavContainer>
            <ContactButton 
              variant="outlined"
              color="primary"
            >
              CONTACT
            </ContactButton>
          </DesktopNavContainer>
        </ToolbarWrapper>
      </Container>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default Header; 