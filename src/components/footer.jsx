import { Box, Container, Typography } from '@mui/material';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        py: 3,
        borderTop: '1px solid #334155',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mb: 1,
            }}
          >
            Made with <Heart style={{ width: '16px', height: '16px', color: '#f59e0b' }} /> by Vikram Kumar from Ranchi, Jharkhand.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            © {new Date().getFullYear()} Persona Portfolio. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
