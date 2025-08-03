import { Mail, Phone, Linkedin, Facebook, Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">Contact Me</h2>
          <p className="text-lg text-muted-foreground mt-2">Get in touch. I'm always open to discussing new projects and opportunities.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:vikramkumaru28@gmail.com" className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                  <span>vikramkumaru28@gmail.com</span>
                </a>
                <a href="tel:+919514945463" className="flex items-center gap-3 group">
                  <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                  <span>+91 9514945463</span>
                </a>
              </div>
            </div>
             <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Follow Me</h3>
               <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                   <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
               </div>
            </div>
             <div>
               <Button asChild size="lg">
                <a href="/Vikram_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
