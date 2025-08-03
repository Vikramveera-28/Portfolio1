import { Card, CardContent } from '@/components/ui/card';

const skillsData = [
  {
    title: 'Web Design',
    skills: 'HTML, CSS, JS',
  },
  {
    title: 'Framework',
    skills: 'Django, React, Bootstrap, Material UI',
  },
  {
    title: 'Database',
    skills: 'MySQL, SQL',
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
            <Card key={category.title} className="bg-background/50 text-center">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold font-headline text-primary mb-4">{category.title}</h3>
                <p className="text-muted-foreground text-lg">{category.skills}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
