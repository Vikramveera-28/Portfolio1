import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'HTML', description: 'The backbone of the web, giving life to websites with its structure and content.' },
  { name: 'CSS & Tailwind', description: 'Styling the web with beautiful, responsive designs and utility-first frameworks.' },
  { name: 'JavaScript & React', description: 'Building dynamic, interactive, and high-performance user interfaces.' },
  { name: 'Java', description: 'Robust, object-oriented programming for powerful backend systems.' },
  { name: 'Python', description: 'Versatile language for web development, data science, and automation.' },
  { name: '.NET & SQL', description: 'Developing enterprise-level applications with Microsoft technologies.' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">My Skills</h2>
            <p className="text-lg text-muted-foreground mt-2">The technologies I work with.</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map(skill => (
                <li key={skill.name} className="bg-background/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl text-primary mb-2">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
