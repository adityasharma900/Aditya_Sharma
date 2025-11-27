# Portfolio Design Guidelines for Aditya Sharma

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern portfolio leaders like Linear (typography), Notion (clean layouts), and Stripe (professional restraint). This portfolio showcases technical expertise with creative confidence.

## Layout Strategy
**Asymmetric Grid Portfolio** - Break from traditional hero-centered layouts. Lead with impact through a split-screen approach that immediately showcases personality and professionalism.

### Viewport & Spacing
- Hero section: 90vh for impactful first impression
- Content sections: Natural height with py-24 (desktop), py-16 (mobile)
- Consistent spacing primitives: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 throughout
- Container max-width: max-w-7xl for all sections with px-6 horizontal padding

## Typography System

**Primary Font**: Inter or DM Sans (Google Fonts) - Modern, technical, highly readable
**Accent Font**: Space Grotesk or Outfit - For headings and emphasis

**Hierarchy**:
- Hero Name: text-6xl md:text-7xl font-bold tracking-tight
- Section Headers: text-4xl md:text-5xl font-bold mb-12
- Subsection Headers: text-2xl md:text-3xl font-semibold mb-6
- Project/Job Titles: text-xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Metadata/Labels: text-sm uppercase tracking-wider font-medium

## Core Components

### Hero Section (Split-Screen Design)
Left side (60% width):
- Large professional headshot or abstract geometric pattern
- Overlaid transparent card with name, title, and primary CTA

Right side (40% width):
- "Currently: Master's student at University of Milan"
- Quick stats grid (2 years experience, 2 major projects, Multiple tech stacks)
- Primary CTA: "View My Work" scroll anchor
- Secondary CTA: "Download CV" with download icon

### Navigation
Sticky header with transparent backdrop blur:
- Logo/name on left
- Navigation links: About, Experience, Projects, Skills, Contact
- Download CV button (outlined style)
- LinkedIn icon link

### About Section
Single column centered layout (max-w-4xl):
- Section header
- Large lead paragraph with career objective
- Two-column grid below (lg:grid-cols-2):
  - Left: Expanded bio with journey from Bachelor's to Master's
  - Right: Key highlights card with icon bullets (Education, Expertise, Passion)

### Education Timeline
Vertical timeline design with connecting line:
- Master's degree (current) - expanded card with university logo placeholder, dates, field of study
- Bachelor's degree - expanded card with CGPA, major coursework bullets, Java app achievement
- Senior Secondary - condensed entry

Each card: Left-aligned with date badge, institution name as heading, location and field details

### Work Experience Section
Large feature card for UE Solution India:
- Company name and role as header
- Date range and location as metadata
- Four achievement bullets with metrics emphasized in larger text
- Tech stack tags at bottom (Python, Flutter, iOS, Android)

### Projects Showcase
Two-column grid (lg:grid-cols-2 gap-8):

Project 1 - Language Learning App:
- Project title and date
- Description paragraph
- Key metrics: "30% user satisfaction increase"
- Technology badges
- "View Details" link with arrow

Project 2 - ML Predictive Model:
- Same structure
- Emphasis on 75% accuracy metric

### Skills Grid
Three-column layout (md:grid-cols-3 gap-12):
- Programming Languages: Java, Python, C++, Dart with proficiency indicators
- Frameworks & Tools: Flutter, TensorFlow, Android Studio
- Other: Microsoft Office suite

Each skill with icon placeholder and name

### Languages & Contact Section
Two-column split (md:grid-cols-2):

Left - Languages:
- Hindi (Native)
- English with B2 proficiency badges (Listening, Reading, Writing, Speaking, Interaction)

Right - Contact:
- Email with icon
- Phone/WhatsApp with icon
- LinkedIn profile link
- Location: Mathura, India → Milan, Italy

### Footer
Full-width with py-12:
- Copyright and name
- Social links (LinkedIn, Email, WhatsApp)
- "Built with modern web technologies" tagline

## Component Styles

**Cards**: Rounded corners (rounded-xl), subtle border, padding p-8, hover lift effect
**Buttons Primary**: Solid with rounded-lg, px-8 py-3, font-semibold
**Buttons Secondary**: Outlined with same sizing
**Badges/Tags**: Small rounded-full pills with px-4 py-1, text-xs
**Timeline Connector**: 2px solid line with dot indicators at each entry
**Icons**: Heroicons (outline for UI, solid for emphasis)

## Images

**Hero Section**: 
- Professional headshot or abstract geometric pattern (navy/teal gradient with geometric shapes suggesting technology/AI)
- Size: 60% viewport width, full height of hero
- Treatment: Subtle overlay gradient for text contrast

**University Logos** (placeholders in Education timeline):
- University of Milan logo
- Eklavya University logo
- Small circular images (h-12 w-12)

**Project Thumbnails** (if including visuals):
- Screenshot placeholders for Java app and ML model interface
- Aspect ratio 16:9, rounded-lg

**Background Elements**:
- Subtle dot grid pattern in About section background
- Faint gradient mesh in Projects section

## Accessibility
- All images with descriptive alt text
- Proper heading hierarchy (h1 for name, h2 for sections, h3 for subsections)
- Focus states on all interactive elements with 2px outline
- Minimum contrast ratio 4.5:1 for all text
- ARIA labels for icon-only buttons

## Responsive Behavior
- Hero: Stack vertically on mobile (portrait layout)
- Two-column grids: Single column below md breakpoint
- Navigation: Collapse to hamburger menu on mobile
- Timeline: Simplified left-aligned version on mobile
- Typography: Scale down one size on mobile (text-6xl → text-5xl)

This portfolio demonstrates technical expertise through clean, confident design that balances professionalism with creative personality. The asymmetric layout immediately differentiates from standard portfolios while maintaining excellent readability and user flow.