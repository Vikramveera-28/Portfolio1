import { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Code style={{ color: '#f59e0b' }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Persona Portfolio
        </Typography>
      </Box>
      <List>
        {navLinks.map(({ href, label }) => (
          <ListItem key={label} component="a" href={href} onClick={handleNavClick}>
            <ListItemText 
              primary={label} 
              sx={{ 
                '& .MuiListItemText-primary': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#3b82f6',
                  }
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #334155',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <Code style={{ color: '#f59e0b' }} />
            <Typography variant="h6" component="a" href="#home" sx={{ 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              color: 'inherit',
              '&:hover': {
                color: '#3b82f6'
              }
            }}>
              Persona Portfolio
            </Typography>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map(({ href, label }) => (
              <Button
                key={label}
                component="a"
                href={href}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#3b82f6',
                    '&::after': {
                      width: '100%',
                    }
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: '#3b82f6',
                    transition: 'width 0.3s ease',
                  }
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: '#1e293b',
            borderRight: '1px solid #334155'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
