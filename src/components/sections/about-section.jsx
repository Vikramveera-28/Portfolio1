import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
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
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">About Me</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm a dedicated and passionate student at Parul University, driven to create user-centric web experiences. With a solid foundation in both frontend and backend technologies, I enjoy turning complex problems into beautiful, intuitive, and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
