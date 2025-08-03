import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = [
  { degree: 'Master of Computer Applications', university: 'Parul University', duration: '2022 - Present', details: 'Pursuing advanced studies in computer science and software development.'},
  { degree: 'Bachelor of Science in Mathematics', university: 'Tiruvalluvar University', duration: '2018 - 2021', details: 'Graduated with a degree in Mathematics, developing strong analytical and problem-solving skills.'},
  { degree: 'Bachelor of Computer Applications', university: 'Ranchi University', duration: '2019 - 2022', details: 'Achieved a score of 74.43%, building a strong foundation in computer fundamentals.'},
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32">
       <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">Education</h2>
            <p className="text-lg text-muted-foreground mt-2">My academic background.</p>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-8">
              {education.map(edu => (
                <div key={edu.university} className="relative pl-8">
                  <div className="absolute left-0 top-1 h-full border-l-2 border-border"></div>
                  <div className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-xl text-primary">{edu.degree}</h4>
                      <Badge variant="secondary">{edu.duration}</Badge>
                  </div>
                  <p className="text-sm font-medium mb-1">{edu.university}</p>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
