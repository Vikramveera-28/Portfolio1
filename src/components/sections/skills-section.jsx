import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Layers, Database, Droplets, Leaf, Wind } from 'lucide-react';

const skillsData = [
  {
    title: 'Web Design',
    skills: [
      { name: 'HTML', icon: <Droplets className="w-8 h-8 text-primary" /> },
      { name: 'CSS', icon: <Droplets className="w-8 h-8 text-primary" /> },
      { name: 'JavaScript', icon: <Droplets className="w-8 h-8 text-primary" /> },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
        { name: 'Django', icon: <Leaf className="w-8 h-8 text-primary" /> },
        { name: 'React', icon: <Wind className="w-8 h-8 text-primary" /> },
        { name: 'Bootstrap', icon: <Droplets className="w-8 h-8 text-primary" /> },
        { name: 'Material UI', icon: <Droplets className="w-8 h-8 text-primary" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
        { name: 'MySQL', icon: <Database className="w-8 h-8 text-primary" /> },
        { name: 'SQL', icon: <Database className="w-8 h-8 text-primary" /> }
    ],
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
        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold font-headline text-primary mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 text-center w-24">
                    {skill.icon}
                    <p className="font-semibold text-lg">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
