import { Box, Container, Typography, Grid, Card, CardContent, CardHeader, Button, Stack } from '@mui/material';
import { Code, Bot, PenTool, GitBranch, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'I code dynamic and responsive websites from scratch, ensuring seamless user experiences and optimal performance.'
  },
  {
    icon: Bot,
    title: 'AI Engineer',
    description: 'Developing intelligent systems and machine learning models to solve complex problems and drive innovation.'
  },
  {
    icon: PenTool,
    title: 'Web Design',
    description: 'Creating visually stunning and user-friendly interfaces that capture attention and guide users effectively.'
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Implementing AI-powered automation to streamline workflows and boost operational efficiency.'
  },
  {
    icon: GitBranch,
    title: 'N8N Workflow',
    description: 'Building powerful, custom-automated workflows using N8N to connect various apps and services.'
  },
  {
    icon: Code,
    title: 'Python Development',
    description: 'Leveraging Python for web backends, scripting, and automation to create efficient solutions.'
  }
];

export default function ServicesSection() {
  return (
    <Box
      id="services"
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
            My Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
            }}
          >
            What I can do for you.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.default',
                    border: '1px solid #334155',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                      borderColor: '#3b82f6',
                      '& .service-title': {
                        color: '#3b82f6',
                      },
                      '& .service-icon-inline': {
                        color: '#3b82f6',
                      },
                    },
                  }}
                >
                  <CardHeader
                    sx={{
                      textAlign: 'center',
                      pb: 1,
                    }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ width: '100%' }}
                    >
                      <IconComponent
                        className="service-icon-inline"
                        style={{
                          width: '2em',
                          height: '2em',
                          color: '#3b82f6',
                          verticalAlign: 'middle',
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        className="service-title"
                        variant="h5"
                        component="h3"
                        sx={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          fontWeight: 600,
                          transition: 'color 0.3s ease',
                          textAlign: 'left',
                          fontSize: '1.5rem',
                          display: 'inline-block',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Stack>
                  </Box>
                  <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Button
                      component="a"
                      href="#"
                      sx={{
                        color: '#3b82f6',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
