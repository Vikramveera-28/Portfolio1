"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon, Sparkles, Loader2 } from 'lucide-react';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { useToast } from "@/hooks/use-toast"

type Project = {
  title: string;
  description: string;
  image: string;
  imageHint: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [description, setDescription] = useState(project.description);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerateDescription = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsGenerating(true);
    try {
      const result = await generateProjectDescription({ projectDescription: description });
      setDescription(result.alternativeDescription);
    } catch (error) {
      console.error('Failed to generate description:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate a new description. Please try again.",
      })
    }
    setIsGenerating(false);
  };

  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-lg">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        data-ai-hint={project.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-headline text-2xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4 text-sm opacity-90">{description}</p>
          <div className="flex items-center gap-4">
            <Button size="icon" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <LinkIcon className="h-5 w-5" />
                <span className="sr-only">View Project</span>
              </a>
            </Button>
             <Button size="icon" variant="secondary" onClick={handleGenerateDescription} disabled={isGenerating}>
              {isGenerating ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5" />}
              <span className="sr-only">Generate new description</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
