import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary py-6">
      <div className="container text-center text-muted-foreground text-sm">
        <p className="flex items-center justify-center gap-1.5">
          Made with <Heart className="h-4 w-4 text-accent" /> by Vikram Kumar from Ranchi, Jharkhand.
        </p>
        <p>© {new Date().getFullYear()} Persona Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
