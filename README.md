# Portfolio React App

A personal portfolio website built with React, Material UI, Bootstrap, and Vite.

## Features

- Modern React with Vite build tool
- Material UI components for consistent design
- Bootstrap CSS for responsive layout
- Dark theme with custom styling
- Component-based architecture
- Smooth scrolling navigation
- Contact form with validation
- Skills showcase with interactive cards
- Project gallery with detailed information
- Responsive design for all devices

## Technologies Used

- React 18
- Material UI (MUI) v5
- Bootstrap CSS
- Vite
- React Hook Form
- Zod validation
- Lucide React Icons
- Google Fonts (Space Grotesk, Source Code Pro)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:9002`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── sections/       # Page sections
│   ├── contact-form.jsx # Contact form component
│   ├── footer.jsx      # Footer component
│   └── header.jsx      # Header component
├── assets/            # Static assets (images, icons)
├── app/              # Global styles
├── App.jsx           # Main App component
└── main.jsx          # Application entry point
```

## Design System

### Colors
- Primary: #3b82f6 (Blue)
- Secondary: #f59e0b (Orange)
- Background: #0f172a (Dark Blue)
- Surface: #1e293b (Lighter Dark Blue)
- Text Primary: #f8fafc (White)
- Text Secondary: #cbd5e1 (Light Gray)

### Typography
- Headlines: Space Grotesk (Bold)
- Body: Space Grotesk (Regular)
- Code: Source Code Pro (Monospace)

### Components
- Material UI components with custom styling
- Bootstrap grid system for responsive layouts
- Custom CSS variables for consistent theming
- Smooth animations and transitions

## Features

### Sections
1. **Home** - Hero section with background image
2. **About** - Personal information with profile image
3. **Skills** - Interactive skill cards organized by category
4. **Experience** - Timeline of work experience
5. **Education** - Academic background
6. **Projects** - Portfolio of projects with technologies used
7. **Services** - Services offered with icons
8. **Contact** - Contact form and social links

### Interactive Elements
- Hover effects on cards and buttons
- Smooth scrolling navigation
- Form validation with error messages
- Responsive mobile navigation drawer
- Toast notifications for form submissions

## Customization

### Styling
- Modify CSS variables in `src/app/globals.css`
- Update Material UI theme in `src/App.jsx`
- Customize component styles using Material UI's `sx` prop

### Content
- Update personal information in respective section components
- Add/remove skills, projects, and experiences
- Modify contact information and social links

## License

This project is open source and available under the [MIT License](LICENSE).
