import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/project-card';

const projects = [
  {
    title: "Blog Websites",
    description: "A full-featured blog platform with dynamic content, user authentication, and a clean, responsive layout.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&h=400&fit=crop",
    imageHint: "blog website",
    link: "#",
  },
  {
    title: "Fashion Store",
    description: "An e-commerce site for a fashion brand, complete with product galleries, a shopping cart, and a secure checkout process.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&h=400&fit=crop",
    imageHint: "fashion store",
    link: "#",
  },
  {
    title: "Gym Websites",
    description: "A promotional website for a fitness center, featuring class schedules, membership information, and trainer profiles.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&h=400&fit=crop",
    imageHint: "gym website",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">My Work</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my recent projects.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">See More</Button>
        </div>
      </div>
    </section>
  );
}
