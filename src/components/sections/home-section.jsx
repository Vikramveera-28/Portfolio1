import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background/50 z-10" />
      <div className="absolute inset-0 hidden md:block md:w-1/2 right-0">
          <Image
            src="https://placehold.co/800x1200"
            alt="Vikram Kumar"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="professional portrait"
          />
      </div>
       <Image
          src="https://placehold.co/600x800"
          alt="Vikram Kumar"
          layout="fill"
          objectFit="cover"
          className="md:hidden opacity-10"
          data-ai-hint="professional portrait"
        />

      <div className="container relative z-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-accent font-semibold mb-2 text-lg md:text-xl">FULL STACK DEVELOPER</p>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Vikram Kumar</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">From Jharkhand Ranchi</p>
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
