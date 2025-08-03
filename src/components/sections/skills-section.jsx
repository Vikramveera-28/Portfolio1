import SkillCard from '@/components/skill-card';

const skillsData = [
  {
    title: 'Web Design',
    skills: [
      {
        name: 'HTML',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16"
          >
            <path
              fill="#E34F26"
              d="M1.6 21.3L.1 3h23.8l-1.5 18.3L12 24l-10.4-2.7z"
            ></path>
            <path fill="#F16529" d="M12 22.1V4.9h9.6l-1.3 15-8.3 2.2z"></path>
            <path
              fill="#EBEBEB"
              d="M12 10.1v3.8h4.4l-.4 4.5-4 1.1v4l7.3-2 .8-9.1H12v-4zM12 6.8h8.8l.2-2H12v2z"
            ></path>
            <path
              fill="#FFF"
              d="M12 10.1v3.8H7.2l-.3-3.8H12zm0 9.2l-4-1.1-.3-4.5h4.3v-3.7H4.3l-.4-4.2h8.1V5H3.4l.7 10.3 7.9 2.1v4.8z"
            ></path>
          </svg>
        ),
      },
      {
        name: 'CSS',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16"
          >
            <path
              fill="#1572B6"
              d="M1.6 21.3L.1 3h23.8l-1.5 18.3L12 24l-10.4-2.7z"
            ></path>
            <path fill="#33A9DC" d="M12 22.1V4.9h9.6l-1.3 15-8.3 2.2z"></path>
            <path
              fill="#FFF"
              d="M12 10.1v3.8h4.4l-.4 4.5-4 1.1v4l7.3-2 .8-9.1H12v-4zM12 6.8h8.8l.2-2H12v2z"
            ></path>
            <path
              fill="#EBEBEB"
              d="M12 10.1v3.8H7.2l-.3-3.8H12zm0 9.2l-4-1.1-.3-4.5h4.3v-3.7H4.3l-.4-4.2h8.1V5H3.4l.7 10.3 7.9 2.1v4.8z"
            ></path>
          </svg>
        ),
      },
      {
        name: 'JavaScript',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16"
          >
            <path fill="#F7DF1E" d="M0 0h24v24H0z"></path>
            <path d="M4.3 18.4h3.1c.2 1.1.9 1.7 2.2 1.7 1.2 0 1.9-.5 1.9-1.3s-.6-1.1-2-1.6c-2.1-.7-3.4-1.6-3.4-3.7 0-1.8 1.4-3.2 3.6-3.2 1.8 0 3 .9 3.5 2.5l-2.9.8c-.2-.6-.5-1-1-1-.6 0-1 .3-1 .8s.4.7 1.5 1.1c2.1.7 3.6 1.7 3.6 3.8C20 18.1 18.5 20 16 20c-2.4 0-4-1.3-4.6-3.2l3-1.1c.3.8.7 1.3 1.5 1.3.8 0 1.4-.4 1.4-1.1s-.4-1-1.6-1.5c-1.6-.6-3.1-1.5-3.1-3.5 0-1.7 1.2-3 3.4-3 1.6 0 2.8.7 3.3 2.2l-2.8.8c-.2-.5-.5-.8-.9-.8-.5 0-.9.3-.9.7s.3.7 1.4 1.1c1.8.6 3.2 1.6 3.2 3.6 0 2-1.4 3.4-3.9 3.4s-3.7-1.4-4.2-3.3z"></path>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Frontend and framework',
    skills: [
      {
        name: 'Bootstrap',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16"
          >
            <path
              fill="#7952B3"
              d="M19 2H5C3.34 2 2 3.34 2 5v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-2-3-2z"
            ></path>
            <path
              fill="#FFF"
              d="M14.2 14.5c0 .9-.6 1.6-1.7 1.6h-3c-1.1 0-1.7-.7-1.7-1.6v-5c0-.9.6-1.6 1.7-1.6h3c1.1 0 1.7.7 1.7 1.6v5zm-3.8-4.2h2.2c.5 0 .8.3.8.7v3c0 .4-.3.7-.8.7h-2.2c-.5 0-.8-.3-.8-.7v-3c0-.4.3-.7.8-.7z"
            ></path>
          </svg>
        ),
      },
      {
        name: 'React',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16 text-cyan-400"
          >
            <circle cx="12" cy="12" r="2.5" fill="currentColor"></circle>
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <ellipse cx="12" cy="12" rx="11" ry="4.5"></ellipse>
              <ellipse
                cx="12"
                cy="12"
                rx="11"
                ry="4.5"
                transform="rotate(60 12 12)"
              ></ellipse>
              <ellipse
                cx="12"
                cy="12"
                rx="11"
                ry="4.5"
                transform="rotate(120 12 12)"
              ></ellipse>
            </g>
          </svg>
        ),
      },
      {
        name: 'Material UI',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16"
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
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16"
          >
            <path fill="#092E20" d="M20 3H4C3.45 3 3 3.45 3 4v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path>
            <path fill="#FFF" d="M6.5 13.5h1.9l.6 2.3h2l-2.9-9h-2l-2.9 9h2l.7-2.3zm1.6-1.7l.8-3.1.8 3.1h-1.6zM12.9 8.8h2.6v6.2h-2.1v-1.1h-.1c-.4.8-1.1 1.3-2.1 1.3-.9 0-1.6-.4-2-1.1-.4-.8-.6-1.8-.6-2.9s.2-2.1.6-2.9c.4-.7 1.1-1.1 2-1.1.9 0 1.6.4 2.1 1.1h.1V8.8zm-2.4 4.8c0 .8.2 1.5.5 1.9.3.4.7.6 1.2.6s.9-.2 1.2-.6c.3-.4.5-1.1.5-1.9s-.2-1.5-.5-1.9c-.3-.4-.7-.6-1.2-.6s-.9.2-1.2.6c-.3.4-.5 1.1-.5 1.9z"></path>
          </svg>
        )
      },
      {
        name: 'Flask API',
        icon: (
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16"
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
            className="w-16 h-16"
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
            className="w-16 h-16 text-gray-400"
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
            className="w-16 h-16"
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
            className="w-16 h-16"
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
            className="w-16 h-16"
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

const SkillCategory = ({ title, skills, direction }) => (
  <div className="space-y-8">
    <h3 className="text-2xl font-bold font-headline text-primary text-center">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-12 md:gap-16">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          icon={skill.icon}
          name={skill.name}
          index={index}
          direction={direction}
        />
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  const half = Math.ceil(skillsData.length / 2);
  const leftSkills = skillsData.slice(0, half);
  const rightSkills = skillsData.slice(half);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary overflow-x-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            The technologies I work with.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-16">
            {leftSkills.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                direction="left"
              />
            ))}
          </div>
          <div className="space-y-16">
            {rightSkills.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                direction="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
