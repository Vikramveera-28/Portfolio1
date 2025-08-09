import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import HtmlIcon from '../../assets/Icons/Html.png';
import CssIcon from '../../assets/Icons/Css.png';
import JsIcon from '../../assets/Icons/Js.png';
import ReactIcon from '../../assets/Icons/React.png';
import BootstrapIcon from '../../assets/Icons/Bootstrap.png';
import DjangoIcon from '../../assets/Icons/Django.png';

const skillsData = [
  {
    title: 'Web Design',
    skills: [
      {
        name: 'HTML',
        icon: HtmlIcon,
      },
      {
        name: 'CSS',
        icon: CssIcon,
      },
      {
        name: 'JavaScript',
        icon: JsIcon,
      },
    ],
  },
  {
    title: 'Frontend and framework',
    skills: [
      {
        name: 'Bootstrap',
        icon: BootstrapIcon,
      },
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Material UI',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style={{ width: '64px', height: '64px' }}
          >
            <path
              fill="#0081CB"
              d="M12 12l-2-2-2 2 2 2 2-2zm-4 4l-2-2-2 2 2 2 2-2z"
            ></path>
            <path fill="#0081CB" d="M12 4l-6 6 2 2 4-4 4 4 2-2-6-6z"></path>
            <path
              fill="#00BFFF"
              d="M16 12l2-2 2 2-2 2-2-2zm-4 4l2-2 2 2-2 2-2-2z"
            ></path>
            <path fill="#00BFFF" d="M12 20l6-6-2-2-4 4-4-4-2 2 6 6z"></path>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Django',
        icon: DjangoIcon,
      },
      {
        name: 'Flask API',
        icon: (
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style={{ width: '64px', height: '64px' }}
          >
            <path fill="#000" d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.1 9.9c-.3.3-.7.4-1.1.4s-.8-.1-1.1-.4c-1.1-.9-1.3-2.6-.5-3.4.3-.3.7-.4 1.1-.4s.8.1 1.1.4c1 .9 1.3 2.6.5 3.4zM8.9 9.9c-.3.3-.7.4-1.1.4s-.8-.1-1.1-.4c-1.1-.9-1.3-2.6-.5-3.4.3-.3.7-.4 1.1-.4s.8.1 1.1.4c1 .9 1.3 2.6.5 3.4z"></path>
            <path fill="#FFF" d="M12 16.5c-3 0-5.5-2.5-5.5-5.5 0-.6.1-1.1.3-1.6.9 1.4 2.6 2.4 4.5 2.4s3.6-1 4.5-2.4c.2.5.3 1.1.3 1.6 0 3-2.5 5.5-5.5 5.5z"></path>
          </svg>
        )
      }
    ]
  },
  {
    title: 'Databases',
    skills: [
      {
        name: 'MySQL',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style={{ width: '64px', height: '64px' }}
          >
            <path fill="#00758F" d="M22.3 12c0 5.7-4.6 10.3-10.3 10.3S1.7 17.7 1.7 12 6.3 1.7 12 1.7s10.3 4.6 10.3 10.3z"></path>
            <path fill="#F29111" d="M12 3.7c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3c1.7 0 3.3-.5 4.6-1.4l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3 3c.9-1.3 1.4-2.9 1.4-4.6 0-4.6-3.8-8.3-8.4-8.3z"></path>
            <path fill="#FFF" d="M11.3 8.1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.1 5.4c0-1.1.9-2 2-2h.1l.9 1 .9-1h.1c1.1 0 2 .9 2 2v2.2c0 .5-.4.9-1 .9h-4c-.5 0-.9-.4-.9-.9v-2.2z"></path>
          </svg>
        ),
      },
      {
        name: 'SQL',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style={{ width: '64px', height: '64px' }}
          >
            <path
              fill="#F29111"
              d="M19.1 4H4.9C4.4 4 4 4.4 4 4.9v14.2c0 .5.4.9.9.9h14.2c.5 0 .9-.4.9-.9V4.9c0-.5-.4-.9-.9-.9z"
            ></path>
            <path
              fill="#FFF"
              d="M12.9 8.2c-.7 0-1.3.2-1.8.6l2.1 2.1c.4-.5.6-1.1.6-1.8 0-1.6-1.3-2.9-2.9-2.9-1.1 0-2.1.6-2.6 1.5l-1.9-1.9C7.8 6.4 9.8 5 12 5c2.9 0 5.4 2.1 5.8 4.9h-4.9zM11.1 15.8c.7 0 1.3-.2 1.8-.6l-2.1-2.1c-.4.5-.6 1.1-.6 1.8 0 1.6 1.3 2.9 2.9 2.9 1.1 0 2.1-.6 2.6-1.5l1.9 1.9c-1.4 1.4-3.4 2.3-5.6 2.3-2.9 0-5.4-2.1-5.8-4.9h4.9z"
            ></path>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'AI Framework',
    skills: [
      {
        name: 'CrewAI',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style={{ width: '64px', height: '64px' }}
          >
            <path
              fill="#4A90E2"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4v-6h2v6h-2z"
            />
          </svg>
        ),
      },
      {
        name: 'Google ADK',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style={{ width: '64px', height: '64px' }}
          >
            <path
              fill="#4285F4"
              d="M12 11.54L15.39 9.5 12 7.46 8.61 9.5 12 11.54z"
            ></path>
            <path
              fill="#FBBC05"
              d="M7.5 10.35v3.3L12 16.35l4.5-2.7v-3.3L12 13.05 7.5 10.35z"
            ></path>
            <path
              fill="#EA4335"
              d="M12 2L4.5 6.5v11L12 22l7.5-4.5v-11L12 2zm0 18.35L6.5 16.35v-7.7L12 12.05l5.5-3.4v7.7L12 20.35z"
            ></path>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'AI Automation',
    skills: [
      {
        name: 'N8N',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style={{ width: '64px', height: '64px' }}
          >
            <path
              fill="#7B68EE"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            ></path>
            <path
              fill="#FFF"
              d="M10.3 8.1L8.5 12l1.8 3.9h2.4l-1.8-3.9 1.8-3.9h-2.4zm4.4 0L12.9 12l1.8 3.9h2.4l-1.8-3.9 1.8-3.9h-2.4z"
            ></path>
          </svg>
        ),
      },
    ],
  },
];

const SkillCategory = ({ title, skills }) => (
  <Box sx={{ mb: 6 }}>
    <Typography
      variant="h3"
      sx={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
        color: '#3b82f6',
        textAlign: 'center',
        mb: 4,
        fontSize: { xs: '1.5rem', md: '2rem' },
      }}
    >
      {title}
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {skills.map((skill, index) => (
        <Grid item key={skill.name}>
          <Card
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'background.paper',
              border: '1px solid #334155',
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2)',
              },
            }}
          >
            <CardContent sx={{ textAlign: 'center', p: 2 }}>
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  mb: 1,
                  backgroundColor: 'transparent',
                }}
              >
                {typeof skill.icon === 'string' ? (
                  <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%' }} />
                ) : (
                  skill.icon
                )}
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontSize: '0.875rem',
                }}
              >
                {skill.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default function SkillsSection() {
  const half = Math.ceil(skillsData.length / 2);
  const leftSkills = skillsData.slice(0, half);
  const rightSkills = skillsData.slice(half);

  return (
    <Box
      id="skills"
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
            My Skills
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
            }}
          >
            The technologies I work with.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {leftSkills.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {rightSkills.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
