import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Layers, Database, Droplets, Leaf, Wind } from 'lucide-react';

const skillsData = [
  {
    title: 'Web Design',
    skills: [
      { name: 'HTML', icon: <Droplets className="w-5 h-5 mr-2" /> },
      { name: 'CSS', icon: <Droplets className="w-5 h-5 mr-2" /> },
      { name: 'JavaScript', icon: <Droplets className="w-5 h-5 mr-2" /> },
    ],
    icon: <Code className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Frameworks',
    skills: [
        { name: 'Django', icon: <Leaf className="w-5 h-5 mr-2" /> },
        { name: 'React', icon: <Wind className="w-5 h-5 mr-2" /> },
        { name: 'Bootstrap', icon: <Droplets className="w-5 h-5 mr-2" /> },
        { name: 'Material UI', icon: <Droplets className="w-5 h-5 mr-2" /> },
    ],
    icon: <Layers className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Databases',
    skills: [
        { name: 'MySQL', icon: <Database className="w-5 h-5 mr-2" /> },
        { name: 'SQL', icon: <Database className="w-5 h-5 mr-2" /> }
    ],
    icon: <Database className="w-12 h-12 text-primary" />,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">My Skills</h2>
          <p className="text-lg text-muted-foreground mt-2">The technologies I work with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <Card key={category.title} className="bg-background/50 text-center flex flex-col items-center p-6">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold font-headline text-primary mb-4">{category.title}</h3>
              <div className="flex flex-col items-start self-stretch gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-lg px-4 py-2 w-full flex items-center justify-center">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
