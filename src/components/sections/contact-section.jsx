import { Box, Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { Mail, Phone, Linkedin, Facebook, Download, Github } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import CV from '../../assets/document/vikram_resume.pdf'

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
            }}
          >
            Get in touch. I'm always open to discussing new projects and opportunities.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: '#3b82f6',
                  mb: 3,
                  fontSize: '1.5rem',
                }}
              >
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  component="a"
                  href="mailto:vikramkumaru28@gmail.com"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: 'text.primary',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#3b82f6',
                    },
                  }}
                >
                  <Mail style={{ width: '20px', height: '20px', color: 'inherit' }} />
                  <span>vikramkumaru28@gmail.com</span>
                </Box>
                <Box
                  component="a"
                  href="tel:+919514945463"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: 'text.primary',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#3b82f6',
                    },
                  }}
                >
                  <Phone style={{ width: '20px', height: '20px', color: 'inherit' }} />
                  <span>+91 9514945463</span>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: '#3b82f6',
                  mb: 3,
                  fontSize: '1.5rem',
                }}
              >
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  component="a"
                  href="mailto:vikramkumaru28@gmail.com"
                  aria-label="Email"
                  sx={{
                    border: '1px solid #334155',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      color: '#3b82f6',
                    },
                  }}
                >
                  <Mail style={{ width: '20px', height: '20px' }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={{
                    border: '1px solid #334155',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      color: '#3b82f6',
                    },
                  }}
                >
                  <Linkedin style={{ width: '20px', height: '20px' }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  sx={{
                    border: '1px solid #334155',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      color: '#3b82f6',
                    },
                  }}
                >
                  <Facebook style={{ width: '20px', height: '20px' }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  sx={{
                    border: '1px solid #334155',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      color: '#3b82f6',
                    },
                  }}
                >
                  <Github style={{ width: '20px', height: '20px' }} />
                </IconButton>
              </Box>
            </Box>
            
            <Button
              component="a"
              href={CV}
              download
              variant="contained"
              size="large"
              startIcon={<Download />}
              sx={{
                background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Download CV
            </Button>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
