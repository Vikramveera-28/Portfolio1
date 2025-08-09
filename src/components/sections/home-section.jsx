import { Button, Typography, Box, Container } from '@mui/material';
import { ArrowDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&h=1080&fit=crop"
        alt="Background"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2,
        }}
      />
      
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          zIndex: 1,
        }}
      />
      
      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#f59e0b',
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            AI ENGINEER
          </Typography>
          
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.1,
            }}
          >
            Hi, I'm{' '}
            <Box component="span" sx={{ color: '#3b82f6' }}>
              Vikram Kumar
            </Box>
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            From India
          </Typography>
          
          <Button
            component="a"
            href="#contact"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
              },
            }}
          >
            Contact Me <ArrowDown style={{ marginLeft: '8px' }} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
