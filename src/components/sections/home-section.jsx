import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background/60 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&h=1080&fit=crop"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        data-ai-hint="professional portrait abstract"
      />
      <div className="container relative z-20">
        <div className="flex flex-col items-center">
          <div>
            <p className="text-accent font-semibold mb-2 text-lg md:text-xl">AI ENGINEER</p>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Vikram Kumar</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">From India</p>
            <a href="#contact">
              <Button size="lg">
                Contact Me <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
