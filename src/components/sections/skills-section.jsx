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
            className="w-16 h-16 text-orange-600"
          >
            <path
              fill="currentColor"
              d="M4 3h16l-1.5 18L12 22l-6.5-1L4 3z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path
              fill="#fff"
              d="M12 5v15l5.5-1.5L18.5 5H12z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path
              fill="#EBEBEB"
              d="M12 10.5h3.5l-.5 2.5h-3v4l3.5-1 .5-4.5h-4z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path
              fill="#EBEBEB"
              d="M12 6.5h4.5l-.5 2.5h-4v-2.5z"
              clipRule="evenodd"
              fillRule="evenodd"
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
            className="w-16 h-16 text-blue-600"
          >
            <path
              fill="currentColor"
              d="M4 3h16l-1.5 18L12 22l-6.5-1L4 3z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path
              fill="#fff"
              d="M12 5v15l5.5-1.5L18.5 5H12z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path
              fill="#EBEBEB"
              d="M12 10.5h3.5l-.5 2.5h-3v4l3.5-1 .5-4.5h-4z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path
              fill="#EBEBEB"
              d="M12 6.5h4.5l-.5 2.5h-4v-2.5z"
              clipRule="evenodd"
              fillRule="evenodd"
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
            className="w-16 h-16 text-yellow-500"
          >
            <rect width="24" height="24" fill="currentColor" rx="2"></rect>
            <path
              fill="#000"
              d="M7.3 11.4c0-.5.2-1 .6-1.3s.9-.5 1.5-.5c.7 0 1.2.1 1.6.4s.6.6.7 1.1h-2c0-.2-.1-.4-.3-.5s-.4-.2-.7-.2c-.3 0-.5.1-.7.3s-.2.4-.2.6c0 .3.1.5.3.7s.5.3.8.3c.4 0 .7-.1 1-.3v1.8c-.4.2-.8.3-1.3.3c-.7 0-1.2-.2-1.6-.5s-.7-.7-1-1.3c-.2-.5-.3-.9-.3-1.4zm5.8 4.2c-.3 0-.5 0-.7-.1s-.4-.2-.5-.3l.4-1.8c.2.2.4.3.7.4c.2 0 .4-.1.6-.2c.2-.1.2-.3.2-.5c0-.2-.1-.4-.4-.5l-1.2-.4c-.6-.2-1-.5-1.3-.8s-.4-.7-.4-1.2c0-.5.2-1 .5-1.3s.8-.5 1.4-.5c.3 0 .6 0 .8.1s.4.2.5.3l-.4 1.8c-.2-.1-.4-.2-.6-.2s-.3-.1-.5-.1c-.2 0-.3 0-.5.1s-.2.2-.2.4c0 .2.1.3.3.4l1.2.4c.7.2 1.1.5 1.4.8s.5.7.5 1.2c0 .6-.2 1.1-.6 1.4s-.9.5-1.6.5z"
            ></path>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      {
        name: 'Bootstrap',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="w-16 h-16 text-purple-600"
          >
            <path
              fill="currentColor"
              d="M17.1,5.2H6.9C5.8,5.2,5,6.1,5,7.1v9.7c0,1.1,0.8,1.9,1.9,1.9h10.3c1.1,0,1.9-0.8,1.9-1.9V7.1C19,6.1,18.2,5.2,17.1,5.2z M15.4,12.3c0,1-0.8,1.8-1.8,1.8h-1.3v1.8h-2V8.2h3.1c1,0,1.8,0.8,1.8,1.8V12.3z"
            ></path>
            <path fill="currentColor" d="M12.3,10h1.3v2.3h-1.3V10z"></path>
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
            <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <ellipse cx="12" cy="12" rx="11" ry="4.2"></ellipse>
              <ellipse
                cx="12"
                cy="12"
                rx="11"
                ry="4.2"
                transform="rotate(60 12 12)"
              ></ellipse>
              <ellipse
                cx="12"
                cy="12"
                rx="11"
                ry="4.2"
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
            className="w-16 h-16 text-blue-500"
          >
            <path
              fill="currentColor"
              d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16.48,16.48L12,14.26V4.5l8,4.62L16.48,16.48z"
            ></path>
          </svg>
        ),
      },
    ],
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
            className="w-16 h-16 text-blue-700"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-3.5h-2v-3h2V6.5l4 3.5-4 3.5z"
            ></path>
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
              fill="currentColor"
              d="M20,16H4V8h16m0-2H4c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2z"
            ></path>
            <path
              fill="currentColor"
              d="M10,14h2v-4h-2v4z M6,14h2v-4H6v4z M14,14h2v-4h-2v4z"
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
            className="w-16 h-16 text-indigo-500"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2zm0-4v-6h2v6z"
            ></path>
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
            className="w-16 h-16 text-green-500"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14h-8v-2h8v2zm0-4h-8v-2h8v2z"
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
            className="w-16 h-16 text-purple-500"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5L12 14l2.5 2.5L12 11.5 9.5 14l2.5-2.5L12 9l-2.5 2.5L7 9l2.5 2.5L7 14l2.5-2.5zm5-5L12 14l2.5 2.5L17 14l-2.5-2.5z"
            ></path>
          </svg>
        ),
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            The technologies I work with.
          </p>
        </div>
        <div className="space-y-16">
          {skillsData.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold font-headline text-primary mb-8 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
