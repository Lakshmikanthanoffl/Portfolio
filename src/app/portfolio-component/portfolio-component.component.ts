import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-component.component.html',
  styleUrl: './portfolio-component.component.css'
})
export class PortfolioComponentComponent implements OnInit, AfterViewInit {
  isMenuOpen = false;
  activeSection = 'home';
  scrolled = false;
  currentYear = new Date().getFullYear();

  navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  skills = [
    { name: 'Angular', level: 88, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML / CSS', level: 90, category: 'Frontend' },
    { name: '.NET Web API', level: 80, category: 'Backend' },
    { name: 'C#', level: 78, category: 'Backend' },
    { name: 'Python', level: 70, category: 'Backend' },
    { name: 'PostgreSQL', level: 78, category: 'Database' },
    { name: 'Neo4j', level: 65, category: 'Database' },
    { name: 'Azure DevOps', level: 75, category: 'DevOps' },
    { name: 'Git', level: 85, category: 'DevOps' },
    { name: 'Swagger', level: 80, category: 'Tools' },
    { name: 'Google APIs', level: 72, category: 'Tools' },
  ];

  projects = [
    {
      title: 'Demo Pulse',
      subtitle: 'Internal Project · Xtract.io',
      description: 'Internal system for tracking demo feedback and workflows. Built an Angular dashboard with real-time analytics, automated meeting tracking via Python, and integrated Google APIs for seamless data flow.',
      tech: ['Angular', 'Python', 'Google Sheets API', 'Google Calendar API', 'Google Forms', 'Google Meet'],
      icon: '📡',
      color: 'grad-purple',
      live: null,
      badge: 'Internal',
    },
    {
      title: 'EQ360',
      subtitle: 'ESG Analytics Platform · Xtract.io',
      description: 'ESG Data and Analytics platform for 1,000+ listed companies in India. Contributed to sustainability data analytics, interactive dashboards, role-based access control, and performance optimization.',
      tech: ['Angular', '.NET Web API', 'PostgreSQL', 'Neo4j', 'Azure DevOps'],
      icon: '📊',
      color: 'grad-green',
      live: null,
      badge: 'Production',
    },
    {
      title: 'Gym Management System',
      subtitle: 'Full Stack · Personal Project',
      description: 'Full-stack application with modules for members, plans, payments, reports, and dashboards. Integrated Razorpay for secure online payment processing.',
      tech: ['Angular', '.NET Web API', 'PostgreSQL', 'Razorpay'],
      icon: '🏋️',
      color: 'grad-orange',
      live: 'https://gym-managements.vercel.app',
      badge: 'Live',
    },
    {
      title: 'Zyct Landing Page',
      subtitle: 'Frontend · Personal Project',
      description: 'Modern, responsive landing page built with clean UI/UX principles, smooth animations, and optimized performance for production deployment.',
      tech: ['Angular', 'TypeScript', 'CSS', 'Vercel'],
      icon: '🌐',
      color: 'grad-blue',
      live: 'https://zyct-landing-page.vercel.app',
      badge: 'Live',
    },
  ];

  experience = [
    {
      role: 'Junior Software Engineer',
      company: 'Xtract.io',
      period: 'Apr 2024 – Present',
      current: true,
      projects: [
        {
          name: 'EQ360 ESG Analytics Platform',
          points: [
            'Developed and maintained Angular modules using TypeScript, focusing on component logic and API integration with .NET Web APIs.',
            'Implemented caching mechanisms to significantly reduce page load times and removed unnecessary API calls.',
            'Worked on role-based access control and contributed to interactive dashboards with dynamic graphs.',
            'Fixed critical production issues using root-cause analysis and research-based debugging.',
            'Used Azure DevOps and Git for version control, commits, and code pushes.',
          ],
        },
        {
          name: 'Demo Pulse (Internal Project)',
          points: [
            'Developed Demo Pulse (Phase 1) — an internal system for tracking demo feedback and workflows.',
            'Built an Angular dashboard enabling real-time analytics and insights.',
            'Implemented automation workflows using Python for meeting tracking and feedback processing.',
            'Integrated Google APIs (Sheets, Calendar, Forms, Meet) for seamless data flow.',
          ],
        },
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Mobius Knowledge Services',
      period: 'Sep 2023 – Apr 2024',
      current: false,
      projects: [
        {
          name: 'Full Stack Development',
          points: [
            'Assisted in Angular + .NET Web API development, API integration, testing, debugging, and code improvements.',
            'Worked on database schema design and wrote efficient SQL queries.',
            'Participated in code reviews and agile ceremonies.',
          ],
        },
      ],
    },
  ];

  tools = [
    { name: 'Azure DevOps', icon: '☁️' },
    { name: 'Git', icon: '🔀' },
    { name: 'Swagger', icon: '📋' },
    { name: 'Visual Studio', icon: '💻' },
    { name: 'VS Code', icon: '🖊️' },
    { name: 'Agile / Scrum', icon: '🔄' },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observeSections();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    const sections = this.navLinks.map(l => l.id);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection = id;
        break;
      }
    }
  }

  toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu(): void { this.isMenuOpen = false; }

  scrollTo(id: string): void {
    this.closeMenu();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  observeSections(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
}
