
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import ecommerceImg from '../../assets/images/Ecommerce.png';
// import aiChatBot from '../../assets/images/aiChatBot.png';

const projects = [
  {
    title: 'Ecommerce Website',
    description: 'A fully functional e-commerce platform with features like product catalog, shopping cart, and user accounts.',
    image: ecommerceImg,
    imageHint: 'ecommerce online shopping',
    skills: {
      'Frontend': ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      'Backend': ['Django', 'json-server'],
      'Database': ['MySQL']
    },
    link: '#',
  },
  {
    title: 'AI Chat Bot',
    description: 'An intelligent chatbot powered by generative AI to handle user queries and provide instant support.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'robot chatbot',
    skills: {
      'Frontend': ['HTML', 'CSS', 'JS', 'React', 'Bootstrap', 'Material UI'],
      'Backend': ['Flask API'],
      'Database': ['MySQL'],
      'AI-Framework': ['CrewAI', 'Gemini API'],
    },
    link: '#',
  }
];

export default function ProjectsSection() {
  return (
    <Box
      id="projects"
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
            My Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
            }}
          >
            A selection of my recent work.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  border: '1px solid #334155',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    {Array.isArray(project.skills) ? (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.skills.map(skill => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              color: '#3b82f6',
                              border: '1px solid rgba(59, 130, 246, 0.2)',
                            }}
                          />
                        ))}
                      </Box>
                    ) : (
                      <Box>
                        {Object.entries(project.skills).map(([category, skills]) => (
                          <Box key={category} sx={{ mb: 2 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                color: '#3b82f6',
                                mb: 1,
                              }}
                            >
                              {category}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {skills.map(skill => (
                                <Chip
                                  key={skill}
                                  label={skill}
                                  size="small"
                                  sx={{
                                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    color: '#3b82f6',
                                    border: '1px solid rgba(59, 130, 246, 0.2)',
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                </CardContent>
                
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
