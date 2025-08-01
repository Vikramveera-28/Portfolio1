import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, PenTool, Database, CodeXml, Dot } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: 'Web Development',
    description: 'I code dynamic and responsive websites from scratch, ensuring seamless user experiences and optimal performance.'
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: 'Android Development',
    description: 'Crafting native Android applications that are intuitive, performant, and deliver a great mobile experience.'
  },
  {
    icon: <PenTool className="w-12 h-12 text-primary" />,
    title: 'Web Design',
    description: 'Creating visually stunning and user-friendly interfaces that capture attention and guide users effectively.'
  },
  {
    icon: <CodeXml className="w-12 h-12 text-primary" />,
    title: 'Java Development',
    description: 'Building robust and scalable backend systems and applications using the power of Java.'
  },
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    title: 'Python Development',
    description: 'Leveraging Python for web backends, scripting, and automation to create efficient solutions.'
  },
  {
    icon: <Dot className="w-12 h-12 text-primary" />,
    title: '.NET Development',
    description: 'Developing powerful enterprise-grade applications on the Microsoft .NET platform with C#.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">My Services</h2>
          <p className="text-lg text-muted-foreground mt-2">What I can do for you.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-background/50 hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{service.description}</p>
                <a href="#" className="text-primary font-semibold mt-4 inline-block group-hover:underline">Learn More</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
