import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';

const education = [
  { degree: 'Bachelor of Science in Mathematics', university: 'Tiruvalluvar University', duration: '2018 - 2021', details: 'Graduated with a degree in Mathematics, developing strong analytical and problem-solving skills.'},
];

export default function EducationSection() {
  return (
    <Box
      id="education"
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
            Education
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
            }}
          >
            My academic background.
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
              {education.map((edu, index) => (
                <Box key={edu.university} sx={{ position: 'relative', pl: 4 }}>
                  {/* Timeline line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: index === education.length - 1 ? 0 : -16,
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
                        {edu.degree}
                      </Typography>
                      <Chip
                        label={edu.duration}
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
                      {edu.university}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {edu.details}
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
