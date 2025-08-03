import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  { role: 'Full Stack Intern', company: 'Bharat Intern', duration: 'Present', description: 'Developed and maintained full-stack web applications, contributing to both frontend and backend development.'},
  { role: '.NET with SQL Intern', company: 'Zivaan Marketplace', duration: '05/2022 - 06/2022', description: 'Worked on enterprise-level applications using the .NET framework and managed databases with SQL.'},
  { role: 'Web Designer Intern', company: 'Buck Softech Private Limited', duration: '03/2022 - 04/2022', description: 'Designed and developed responsive and visually appealing websites for various clients.'},
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
