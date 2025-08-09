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
            }}
          >
            © {new Date().getFullYear()} Personal Portfolio. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
