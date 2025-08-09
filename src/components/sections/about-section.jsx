import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Img from '../../assets/images/photography.jpg';

export default function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                {/* Decorative border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    right: 8,
                    bottom: 8,
                    border: '2px solid #3b82f6',
                    borderRadius: 2,
                    transform: 'rotate(-6deg)',
                  }}
                />
                
                {/* Profile image */}
                <Paper
                  component="img"
                  src={Img}
                  alt="Vikram Kumar"
                  sx={{
                    position: 'relative',
                    width: { xs: 250, lg: 300 },
                    height: { xs: 300, lg: 350 },
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              About Me
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              I'm a dedicated and passionate student at Parul University, driven to create user-centric web experiences. 
              With a solid foundation in both frontend and backend technologies, I enjoy turning complex problems into 
              beautiful, intuitive, and efficient solutions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
