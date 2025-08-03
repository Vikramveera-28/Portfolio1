
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Ecommerce Website',
    description: 'A fully functional e-commerce platform with features like product catalog, shopping cart, and user accounts.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce online shopping',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'MySQL', 'json-server'],
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
    <section id="projects" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my recent work.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background/50 overflow-hidden flex flex-col">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover"
                  data-ai-hint={project.imageHint}
                />
                <CardTitle className="pt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {Array.isArray(project.skills) ? (
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(project.skills).map(([category, skills]) => (
                      <div key={category}>
                        <h4 className="font-semibold mb-2 text-primary">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map(skill => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
