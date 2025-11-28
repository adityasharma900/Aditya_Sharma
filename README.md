# Aditya Sharma - Portfolio Website

A professional portfolio website showcasing Aditya Sharma's work as a Software Developer & AI Enthusiast. Built with modern web technologies featuring a futuristic design aesthetic with gradient effects, glassmorphism, and smooth animations.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Futuristic UI** - Gradient text, elevated cards with glowing borders, and glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion for interactive transitions
- **Dark Mode Support** - Built-in theme switching capability
- **Project Showcase** - Display of major projects with descriptions and links
- **Skills Section** - Organized by categories (Programming Languages, Frameworks, Tools)
- **Education & Experience** - Timeline of educational background and professional experience
- **Languages** - Multi-language proficiency display (Hindi, English, German, Italian)
- **Contact Information** - Easy ways to connect via email, phone, WhatsApp, and LinkedIn
- **CV Download** - One-click CV/Resume download

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives

### Backend
- **Express.js** - Web server
- **Node.js** - JavaScript runtime

### Styling
- **Tailwind CSS** - CSS framework with Space Grotesk typography
- **PostCSS** - CSS transformation
- **Tailwind Plugins** - Typography and animation plugins

## Project Structure

```
PortfolioPage/
├── client/
│   ├── src/
│   │   ├── components/    # UI components (Radix UI based)
│   │   ├── pages/         # Main portfolio page
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and helpers
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # React DOM entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── server/                # Express backend
├── shared/                # Shared types and schemas
└── package.json          # Dependencies
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd PortfolioPage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes (if using database)

## Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.ts`:
- Custom gradient utilities
- Cyber grid animation
- Glassmorphism effects
- Futuristic color scheme (blue/purple)

### Vite Configuration
Configured in `vite.config.ts` with:
- React plugin support
- Tailwind CSS integration
- Development and production optimizations

## Content Sections

### About Section
- My Journey - Educational background and professional experience
- Key Highlights - Education, expertise, and goals

### Experience Section
- Professional work experience with timeline
- Company details and roles
- Project descriptions

### Education Section
- Master's in Computer Science - University of Milan
- Bachelor's in Computer Applications - Eklavya University
- Senior Secondary Schooling

### Projects Section
- Featured projects with descriptions
- Technology stacks used
- Links to live demos or repositories

### Skills Section
- Programming Languages (Python, JavaScript, Flutter, etc.)
- Frameworks & Libraries
- Tools & Technologies
- AI/ML & Data Science

### Languages Section
- Hindi (Native)
- English (B2 - Professional Working Proficiency)
- German (B1 - Intermediate)
- Italian (A1 - Beginner)

## Contact Information

- **Email** - Available on portfolio
- **Phone** - +39 3930909797
- **WhatsApp** - +39 3930909797
- **LinkedIn** - Connected on portfolio
- **Location** - Via monsignor luigi martini 8, Milano, Italy

## Customization

To customize this portfolio for your own use:

1. Update contact information in the `portfolio.tsx` file
2. Replace project details in the Projects section
3. Update skills and experience sections
4. Modify the color scheme in `tailwind.config.ts` and `index.css`
5. Add your own CV/Resume file to `client/public/`

## Performance

- Optimized for fast loading with Vite
- Smooth animations with Framer Motion
- Responsive images and lazy loading
- CSS optimizations with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Feel free to reach out through the contact information provided on the portfolio website.

---

Built with ❤️ by Aditya Sharma
