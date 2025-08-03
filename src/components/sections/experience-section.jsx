import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  { role: 'AI Engineer', company: 'Bizzzup Upscalling', duration: '07/04/2025 - Present', description: 'Developing and deploying artificial intelligence models to enhance business processes and create innovative solutions.'},
  { role: 'Full Stack Intern', company: 'Login 360', duration: '15/06/2024 - 15/10/2024', description: 'Contributed to the development of web applications, working across the full stack to implement new features and resolve bugs.'},
  { role: 'IoT Trainer, Epub Trainer', company: 'Arunai Info Service', duration: '02/01/2023 - 31/05/2024', description: 'Trained individuals in Internet of Things technologies and e-publication standards, delivering hands-on workshops and creating educational materials.'},
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
       <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">Work Experience</h2>
            <p className="text-lg text-muted-foreground mt-2">My professional journey so far.</p>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-8">
              {experiences.map(exp => (
                <div key={exp.company} className="relative pl-8">
                  <div className="absolute left-0 top-1 h-full border-l-2 border-border"></div>
                   <div className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex justify-between items-start mb-1">
                     <h4 className="font-semibold text-xl text-primary">{exp.role}</h4>
                     <Badge variant="secondary">{exp.duration}</Badge>
                  </div>
                  <p className="text-sm font-medium mb-1">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
          </CardContent>
        </Card>
       </div>
    </section>
  )
}
