import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { name: 'HTML', description: 'The backbone of the web, giving life to websites with its structure and content.' },
  { name: 'CSS & Tailwind', description: 'Styling the web with beautiful, responsive designs and utility-first frameworks.' },
  { name: 'JavaScript & React', description: 'Building dynamic, interactive, and high-performance user interfaces.' },
  { name: 'Java', description: 'Robust, object-oriented programming for powerful backend systems.' },
  { name: 'Python', description: 'Versatile language for web development, data science, and automation.' },
  { name: '.NET & SQL', description: 'Developing enterprise-level applications with Microsoft technologies.' },
];

const experiences = [
  { role: 'Full Stack Intern', company: 'Bharat Intern', duration: 'Present', description: 'Developed and maintained full-stack web applications, contributing to both frontend and backend development.'},
  { role: '.NET with SQL Intern', company: 'Zivaan Marketplace', duration: '05/2022 - 06/2022', description: 'Worked on enterprise-level applications using the .NET framework and managed databases with SQL.'},
  { role: 'Web Designer Intern', company: 'Buck Softech Private Limited', duration: '03/2022 - 04/2022', description: 'Designed and developed responsive and visually appealing websites for various clients.'},
];

const education = [
  { degree: 'Master of Computer Applications', university: 'Parul University', duration: '2022 - Present', details: 'Pursuing advanced studies in computer science and software development.'},
  { degree: 'Bachelor of Computer Applications', university: 'Ranchi University', duration: '2019 - 2022', details: 'Achieved a score of 74.43%, building a strong foundation in computer fundamentals.'},
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-[300px] h-[350px] lg:w-[350px] lg:h-[400px]">
              <div className="absolute -inset-2 border-2 border-primary rounded-xl rotate-[-6deg] "></div>
              <Image
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&h=500&fit=crop"
                alt="Vikram Kumar"
                width={400}
                height={500}
                className="relative object-cover rounded-xl shadow-lg"
                data-ai-hint="profile picture"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">About Me</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm a dedicated and passionate student at Parul University, driven to create user-centric web experiences. With a solid foundation in both frontend and backend technologies, I enjoy turning complex problems into beautiful, intuitive, and efficient solutions.
            </p>
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="skills">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {skills.map(skill => (
                        <li key={skill.name}>
                          <h4 className="font-semibold text-lg text-primary">{skill.name}</h4>
                          <p className="text-muted-foreground">{skill.description}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="experience">
                 <Card>
                  <CardContent className="pt-6 space-y-6">
                      {experiences.map(exp => (
                        <div key={exp.company}>
                          <div className="flex justify-between items-start">
                             <h4 className="font-semibold text-lg text-primary">{exp.role}</h4>
                             <Badge variant="secondary">{exp.duration}</Badge>
                          </div>
                          <p className="text-sm font-medium">{exp.company}</p>
                          <p className="text-muted-foreground mt-1">{exp.description}</p>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education">
                 <Card>
                  <CardContent className="pt-6 space-y-6">
                      {education.map(edu => (
                        <div key={edu.university}>
                          <div className="flex justify-between items-start">
                             <h4 className="font-semibold text-lg text-primary">{edu.degree}</h4>
                             <Badge variant="secondary">{edu.duration}</Badge>
                          </div>
                          <p className="text-sm font-medium">{edu.university}</p>
                          <p className="text-muted-foreground mt-1">{edu.details}</p>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
