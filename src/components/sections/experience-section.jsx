import { Box, Container, Typography, Card, CardContent, Chip, Grid } from '@mui/material';

const experiences = [
  { role: 'AI Engineer', company: 'Bizzzup Upscalling', duration: '07/04/2025 - Present', description: 'Developing and deploying artificial intelligence models to enhance business processes and create innovative solutions.'},
  { role: 'Full Stack Intern', company: 'Login 360', duration: '15/06/2024 - 15/10/2024', description: 'Contributed to the development of web applications, working across the full stack to implement new features and resolve bugs.'},
  { role: 'IoT Trainer, Epub Trainer', company: 'Arunai Info Service', duration: '02/01/2023 - 31/05/2024', description: 'Trained individuals in Internet of Things technologies and e-publication standards, delivering hands-on workshops and creating educational materials.'},
];

export default function ExperienceSection() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
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
            Work Experience
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
            }}
          >
            My professional journey so far.
          </Typography>
        </Box>
        
        <Card
          sx={{
            backgroundColor: 'background.paper',
            border: '1px solid #334155',
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ position: 'relative' }}>
              {experiences.map((exp, index) => (
                <Box key={exp.company} sx={{ position: 'relative', pl: 4, mb: 4 }}>
                  {/* Timeline line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: index === experiences.length - 1 ? 0 : -16,
                      width: '2px',
                      backgroundColor: '#3b82f6',
                    }}
                  />
                  
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: -5,
                      top: 8,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6',
                      border: '2px solid #1e293b',
                    }}
                  />
                  
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: '#3b82f6',
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                        }}
                      >
                        {exp.role}
                      </Typography>
                      <Chip
                        label={exp.duration}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          color: '#3b82f6',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                        }}
                      />
                    </Box>
                    
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                        fontSize: '1rem',
                      }}
                    >
                      {exp.company}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
