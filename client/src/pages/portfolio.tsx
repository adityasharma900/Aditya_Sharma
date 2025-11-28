import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Languages, 
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Sun,
  Moon,
  MessageCircle,
  Calendar,
  Award,
  Target,
  Send,
  Loader2,
  Quote,
  BookOpen,
  ArrowRight,
  User
} from "lucide-react";
import { SiLinkedin, SiWhatsapp, SiPython, SiFlutter, SiTensorflow, SiAndroidstudio } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button 
      size="icon" 
      variant="ghost" 
      onClick={toggleTheme}
      data-testid="button-theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight"
          data-testid="link-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          AS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://www.linkedin.com/in/aditya-sharma-3b6b67273/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex"
            data-testid="link-linkedin-nav"
          >
            <Button size="icon" variant="ghost">
              <SiLinkedin className="h-5 w-5" />
            </Button>
          </a>
          <a 
            href="/api/download-cv" 
            className="hidden sm:block"
            data-testid="link-download-cv-nav"
          >
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </a>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid={`link-nav-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <a
                href="https://www.linkedin.com/in/aditya-sharma-3b6b67273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost">
                  <SiLinkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="/api/download-cv">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-20 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4 backdrop-blur-sm border border-primary/20">
                <span className="mr-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Currently: Master's Student at University of Milan
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-testid="text-hero-name"
            >
              Aditya Sharma
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-testid="text-hero-tagline"
            >
              Software Developer & AI Enthusiast building innovative solutions 
              that enhance safety and improve lives through technology.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#projects" data-testid="link-view-work">
                <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  View My Work
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/api/download-cv" data-testid="link-download-cv-hero">
                <Button variant="outline" size="lg" className="backdrop-blur-sm border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 space-y-6 futuristic-card backdrop-blur-sm">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full pulse-glow"></span>
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-3xl font-bold gradient-text">2+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="space-y-1 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <p className="text-3xl font-bold gradient-text">2</p>
                  <p className="text-sm text-muted-foreground">Major Projects</p>
                </div>
                <div className="space-y-1 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <p className="text-3xl font-bold gradient-text">5+</p>
                  <p className="text-sm text-muted-foreground">Tech Stacks</p>
                </div>
                <div className="space-y-1 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-3xl font-bold gradient-text">25%</p>
                  <p className="text-sm text-muted-foreground">Performance Boost</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Milano, Italy</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-about-title">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Aspiring computer scientist with expertise in AI and application development, 
            aiming to build innovative solutions that enhance safety and improve lives 
            through technology-driven entrepreneurship.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                From earning my Bachelor's in Computer Applications at Eklavya University with a strong foundation in Java, .NET, and Computer Networks to advancing my expertise through a Master's in Computer Science at the University of Milan, my path has always centered around building meaningful, efficient technology.
              </p>
              <p>
                During my 2+ years at UE Solution India, I deepened my experience in cross-platform development with Flutter, integrated Python-driven systems into live products, and delivered optimizations that boosted overall performance by up to 25%. I'm especially driven by AI and machine learning, and have built predictive models achieving over 75% accuracy.
              </p>
              <p>
                I'm committed to using this blend of engineering, data-driven thinking, and real-world development experience to create innovative solutions that genuinely improve how people live and interact with technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 space-y-6 futuristic-card">
              <h3 className="text-xl font-semibold">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Master's at University of Milan, Italy
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-stack & Mobile Development, AI/ML
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Goal</h4>
                    <p className="text-sm text-muted-foreground">
                      Technology-driven entrepreneurship
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "University of Milan",
      location: "Milan, Italy",
      period: "Sep 2025 - Present",
      current: true,
      field: "Software and Applications Development",
      link: "https://www.unimi.it/",
    },
    {
      degree: "Bachelor of Science (Computer Application)",
      institution: "Eklavya University",
      location: "Damoh, Madhya Pradesh, India",
      period: "Jul 2020 - Jul 2023",
      current: false,
      field: "Computer Application, Mathematics, Physics",
      grade: "CGPA: 7.49/10.00",
      coursework: ["Java", ".NET", "C#", "Computer Networks", "Advanced Calculus"],
      achievement: "Developed a Java-based application for Language Learners",
      link: "https://eklavyauniversity.ac.in/",
    },
    {
      degree: "Senior Secondary Schooling",
      institution: "Board of High School and Intermediate Education UP",
      location: "Mathura, India",
      period: "July 2019 - Mar 2020",
      current: false,
      field: "Physics, Chemistry, Mathematics",
      link: "https://upmsp.edu.in/",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="text-education-title">Education</h2>
          <p className="text-lg text-muted-foreground">My academic journey and achievements</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-0.5" />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6 z-10 pulse-glow" />
                
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <Badge variant={edu.current ? "default" : "secondary"} className="mb-2 shadow-lg">
                    <Calendar className="h-3 w-3 mr-1" />
                    {edu.period}
                  </Badge>
                </div>
                
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card className="p-6 space-y-4 futuristic-card">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                        data-testid={`link-education-${index}`}
                      >
                        {edu.institution}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{edu.field}</p>
                    
                    {edu.grade && (
                      <Badge variant="outline">
                        <Award className="h-3 w-3 mr-1" />
                        {edu.grade}
                      </Badge>
                    )}
                    
                    {edu.coursework && (
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    {edu.achievement && (
                      <p className="text-sm italic text-muted-foreground border-l-2 border-primary pl-3">
                        {edu.achievement}
                      </p>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 scroll-mt-20 relative cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="text-experience-title">Work Experience</h2>
          <p className="text-lg text-muted-foreground">Building impactful solutions at scale</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 space-y-6 futuristic-card">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Application Developer</h3>
                <a 
                  href="https://www.uesolutionindia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 text-lg"
                  data-testid="link-experience-company"
                >
                  UE Solution India
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <Badge>
                  <Briefcase className="h-3 w-3 mr-1" />
                  Jul 2023 - Jul 2025
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Noida, India
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    01
                  </div>
                  <p className="text-muted-foreground">
                    Developed and maintained clean, efficient, and scalable code by following 
                    industry best practices and modern development methodologies, 
                    <span className="text-foreground font-medium"> reducing technical debt</span> and 
                    improving maintainability.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    02
                  </div>
                  <p className="text-muted-foreground">
                    Designed a cross-platform eCommerce app using Flutter, ensuring 
                    <span className="text-foreground font-medium"> high performance</span> and 
                    consistent user experience across both iOS and Android platforms.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    03
                  </div>
                  <p className="text-muted-foreground">
                    Integrated Python-based components with legacy systems and third-party APIs, 
                    enhancing product functionality and delivering a 
                    <span className="text-foreground font-medium"> seamless user experience</span>.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    04
                  </div>
                  <p className="text-muted-foreground">
                    Deployed and optimized a Python-based web application, resulting in a 
                    <span className="text-foreground font-medium"> 25% improvement in system performance</span> and 
                    faster response times.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Flutter", "Dart", "iOS", "Android", "REST APIs", "Legacy Systems Integration"].map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  const projects = [
    {
      id: "language-app",
      title: "Language Learning Mobile App",
      period: "Nov 2022 - Dec 2022",
      description: "Developed a Java-based Android app for language learners to connect through real-time voice and video calls.",
      highlights: [
        "Built a matching system to pair users with partners sharing similar language-learning goals",
        "Enhanced user satisfaction by 30% through an integrated feedback and rating system",
      ],
      technologies: ["Java", "Android Studio", "WebRTC"],
      metric: "30%",
      metricLabel: "User Satisfaction Increase",
      caseStudy: {
        challenge: "Language learners often struggle to find conversation partners who share their specific learning goals and availability. Existing platforms lacked intelligent matching and real-time communication features.",
        solution: "I designed and built a comprehensive matching algorithm that considers language proficiency levels, learning goals, time zones, and interests to pair compatible users. The app features WebRTC-powered voice and video calls for seamless real-time communication.",
        implementation: [
          "Designed user profiles with detailed language learning preferences",
          "Built a weighted matching algorithm using multiple compatibility factors",
          "Implemented WebRTC for peer-to-peer voice/video communication",
          "Created a rating system to improve future match quality",
          "Added push notifications for match alerts and call reminders"
        ],
        results: "The app achieved a 30% increase in user satisfaction scores. Users reported finding compatible partners faster and having more productive language exchange sessions.",
      },
    },
    {
      id: "disease-prediction",
      title: "Disease Prediction Model",
      period: "Feb 2023 - Apr 2023",
      description: "Built a machine learning model using Python and TensorFlow to predict diseases based on patient data.",
      highlights: [
        "Achieved 75% prediction accuracy using advanced ML algorithms",
        "Processed and analyzed large datasets using Pandas for feature engineering",
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "Machine Learning"],
      metric: "75%",
      metricLabel: "Prediction Accuracy",
      caseStudy: {
        challenge: "Early disease detection is crucial for effective treatment. Manual diagnosis can be time-consuming and may miss subtle patterns in patient data that could indicate early-stage conditions.",
        solution: "I developed a machine learning model that analyzes patient symptoms, medical history, and vital signs to predict potential diseases. The model uses TensorFlow for deep learning capabilities and Pandas for efficient data preprocessing.",
        implementation: [
          "Collected and cleaned diverse medical datasets",
          "Performed extensive feature engineering to identify relevant predictors",
          "Built and trained a neural network using TensorFlow",
          "Implemented cross-validation to ensure model reliability",
          "Created a user-friendly interface for healthcare providers"
        ],
        results: "Achieved 75% prediction accuracy on the test dataset. The model successfully identified patterns that could assist healthcare professionals in early diagnosis.",
      },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="text-projects-title">Projects</h2>
          <p className="text-lg text-muted-foreground">Showcasing my technical expertise and problem-solving abilities</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col futuristic-card group">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge variant="outline" className="mt-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.period}
                      </Badge>
                    </div>
                    <div className="text-right p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                      <p className="text-3xl font-bold gradient-text">{project.metric}</p>
                      <p className="text-xs text-muted-foreground">{project.metricLabel}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4 border-t border-border mt-4">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">The Challenge</h4>
                            <p className="text-sm text-muted-foreground">{project.caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">The Solution</h4>
                            <p className="text-sm text-muted-foreground">{project.caseStudy.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Implementation Details</h4>
                            <ul className="space-y-1">
                              {project.caseStudy.implementation.map((item, i) => (
                                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                  <span className="text-primary">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Results</h4>
                            <p className="text-sm text-muted-foreground">{project.caseStudy.results}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="pt-4 mt-4 border-t border-border space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="w-full"
                    data-testid={`button-expand-${project.id}`}
                  >
                    {expandedProject === project.id ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Hide Case Study
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        View Case Study
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 75 },
        { name: "Dart", level: 85 },
        { name: "C#", level: 70 },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: SiFlutter,
      skills: [
        { name: "Flutter", level: 90 },
        { name: "TensorFlow", level: 75 },
        { name: "Android Studio", level: 85 },
        { name: ".NET", level: 70 },
      ],
    },
    {
      title: "Other Skills",
      icon: Briefcase,
      skills: [
        { name: "Microsoft Office", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "Git", level: 80 },
        { name: "Problem Solving", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 scroll-mt-20 relative cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="text-skills-title">Skills</h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full futuristic-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden border border-primary/10">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguagesSection() {
  const proficiencyLevels = ["Listening", "Reading", "Writing", "Speaking", "Interaction"];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-languages-title">Languages</h2>
          <p className="text-lg text-muted-foreground">Communication is key to collaboration</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hindi</h3>
                  <p className="text-sm text-muted-foreground">Native Language</p>
                </div>
              </div>
              <Badge variant="secondary">Mother Tongue</Badge>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">English</h3>
                  <p className="text-sm text-muted-foreground">Professional Working Proficiency</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {proficiencyLevels.map((level) => (
                  <Badge key={level} variant="outline" className="text-xs">
                    {level}: B2
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">German</h3>
                  <p className="text-sm text-muted-foreground">Intermediate Proficiency</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {proficiencyLevels.map((level) => (
                  <Badge key={level} variant="outline" className="text-xs">
                    {level}: B1
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Italian</h3>
                  <p className="text-sm text-muted-foreground">Beginner Proficiency</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {proficiencyLevels.map((level) => (
                  <Badge key={level} variant="outline" className="text-xs">
                    {level}: A1
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Project Manager",
      company: "UE Solution India",
      content: "Aditya consistently demonstrated exceptional problem-solving skills and delivered high-quality code. His work on our eCommerce platform significantly improved our mobile app's performance.",
      avatar: "RK",
    },
    {
      name: "Dr. Sharma",
      role: "Professor",
      company: "Eklavya University",
      content: "An outstanding student with a keen interest in AI and machine learning. His language learning app project showcased innovative thinking and strong technical abilities.",
      avatar: "DS",
    },
    {
      name: "Priya Singh",
      role: "Team Lead",
      company: "UE Solution India",
      content: "Aditya's ability to integrate complex systems and work with legacy code while maintaining clean architecture is impressive. A valuable team member who always goes the extra mile.",
      avatar: "PS",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-testimonials-title">Testimonials</h2>
          <p className="text-lg text-muted-foreground">What colleagues and mentors say about working with me</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground flex-1 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const articles = [
    {
      title: "Building Cross-Platform Apps with Flutter",
      excerpt: "A comprehensive guide to creating high-performance mobile applications that work seamlessly on both iOS and Android platforms.",
      category: "Mobile Development",
      readTime: "8 min read",
      date: "Oct 2024",
    },
    {
      title: "Machine Learning for Disease Prediction",
      excerpt: "Exploring how TensorFlow and Python can be used to build predictive models that assist healthcare professionals in early diagnosis.",
      category: "AI/ML",
      readTime: "12 min read",
      date: "Sep 2024",
    },
    {
      title: "WebRTC: Real-Time Communication in Apps",
      excerpt: "Understanding peer-to-peer communication and how to implement voice and video calling features in mobile applications.",
      category: "Technology",
      readTime: "10 min read",
      date: "Aug 2024",
    },
  ];

  return (
    <section id="blog" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-blog-title">Technical Insights</h2>
          <p className="text-lg text-muted-foreground">Sharing my knowledge and experiences in software development</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover-elevate">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground flex-1 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {article.readTime}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary" data-testid={`link-blog-${index}`}>
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or use direct contact methods.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thisissharmaaditya@gmail.com",
      href: "mailto:thisissharmaaditya@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+39 3930909797",
      href: "tel:+393930909797",
    },
    {
      icon: SiWhatsapp,
      label: "WhatsApp",
      value: "3930909797",
      href: "https://wa.me/393930909797",
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aditya-sharma",
      href: "https://www.linkedin.com/in/aditya-sharma-3b6b67273/",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      data-testid="input-contact-name"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      data-testid="input-contact-email"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    {...register("subject")}
                    data-testid="input-contact-subject"
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-32 resize-none"
                    {...register("message")}
                    data-testid="input-contact-message"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={contactMutation.isPending}
                  data-testid="button-contact-submit"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Or reach out directly</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact) => (
                <a 
                  key={contact.label}
                  href={contact.href} 
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={`link-contact-${contact.label.toLowerCase()}`}
                >
                  <Card className="p-4 hover-elevate h-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{contact.label}</p>
                        <p className="text-xs text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Via monsignor luigi martini 8<br />
                    Milano, Italy
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold">Aditya Sharma</p>
            <p className="text-sm text-muted-foreground">Software Developer & AI Enthusiast</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aditya-sharma-3b6b67273/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-linkedin"
            >
              <Button size="icon" variant="ghost">
                <SiLinkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:thisissharmaaditya@gmail.com" data-testid="link-footer-email">
              <Button size="icon" variant="ghost">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/393930909797" target="_blank" rel="noopener noreferrer" data-testid="link-footer-whatsapp">
              <Button size="icon" variant="ghost">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LanguagesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
