
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { ContactLinks } from './components/ContactLinks';
import { Footer } from './components/Footer';
import { EducationDisplayItem } from './components/EducationItem';
import type { NavLink, Experience, Project, EducationItem, Skill, ContactLink, RewardItem } from './types';
import { ICONS } from './constants';

const App: React.FC = () => {
  const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#publications', label: 'Publications' },
    { href: '#skills', label: 'Skills' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
  ];

  const personalInfo = {
    name: 'Xiang GU',
    title: 'Data Science & AI Researcher',
    location: 'Hong Kong / ShangHai, China (home) ',
    email: 'XiangGU2003@icloud.com', // Placeholder
    phone: '(+86) 15051776462', // Placeholder
    linkedin: 'https://www.linkedin.com/in/xiang-gu-084b21245', // Placeholder
    github: 'https://github.com/eminentgu', // Placeholder
    about:
      "Dedicated and results-oriented Data Science student with a strong foundation in Big Data Technology from Nanjing University of Science and Technology, and an upcoming Master of Data Science at The University of Hong Kong. Proven research capabilities in 3D intelligent perception and multimodal learning, evidenced by first-author publication at ECAI 2024. Experienced in AI data preprocessing, model improvement, and keen to apply analytical skills to solve complex data-driven challenges. Proficient in English (IELTS 7.0).",
    heroTagline: "Leveraging data and AI to drive innovation in intelligent systems.",
  };

  const educationItems: EducationItem[] = [
     {
      id: 'edu1',
      institution: 'The University of Hong Kong',
      degree: 'Master of Data Science (MDASC)',
      period: '2025 - 2027 (Expected)',
      description: 'Focusing on advanced data science methodologies and applications.',
    },
    {
      id: 'edu2',
      institution: 'Nanjing University of Science and Technology',
      degree: 'B.S. in Data Science and Big Data Technology',
      period: '2021 - 2025',
      description: 'Specialized in data analysis, machine learning, and big data systems.',
    },
  ];
  
  const experiences: Experience[] = [
    {
      id: 'exp1',
      role: 'Research Assistant (3D Intelligent Perception)',
      company: 'Nanjing University of Science and Technology (Advised by Prof. Shuchao Pang)',
      period: 'Jan 2023 - Apr 2024',
      descriptionPoints: [
        'Researched processing of LiDAR point cloud data using multimodal large models.',
        'Analyzed deficiencies in existing models and designed improved modules for few-shot learning.',
        'Enhanced environmental perception capabilities for autonomous driving scenarios.',
        'First author for ECAI 2024 paper; contributed as fourth author for PRCV 2024 paper.',
        'Work supported by National Key R&D Program, NSFC, and Jiangsu Province Autonomous Driving Technology Innovation and Application Engineering Research Center.'
      ],
      technologies: ['Point Cloud Analysis', 'Multimodal Models', 'Few-Shot Learning', 'LiDAR', 'Autonomous Driving R&D', 'Python'],
    },
    {
      id: 'exp2',
      role: 'AI Data Development Intern',
      company: 'Shanghai Himalaya Science and Technology Ltd',
      period: 'Aug 2024 - Nov 2024',
      descriptionPoints: [
        'Contributed to AI data preprocessing tasks within the Data Department.',
        'Assisted in the improvement and refinement of AI models through data analysis and validation.'
      ],
      technologies: ['AI Data Preprocessing', 'Data Annotation', 'Model Evaluation Support'],
    },
    {
      id: 'exp3',
      role: 'Project Management Engineer Intern',
      company: 'Luxshare iTech (Zhejiang) Co., Ltd',
      period: 'May 2024 - Jun 2024',
      descriptionPoints: [
        'Gained practical experience in project management methodologies and tools within a tech manufacturing environment.',
        'Supported project coordination, documentation, and progress tracking tasks.'
      ],
      technologies: ['Project Management', 'Coordination', 'Documentation'],
    },
  ];

  const publications: Project[] = [ // Using Project type for publications
    {
      id: 'pub1',
      name: 'Dynamic Multimodal Prompt Tuning: Boost Few-shot Learning with VLM-Guided Point Cloud Models',
      description: "Xiang Gu, et al. Accepted at ECAI 2024 (27th European Conference on Artificial Intelligence, paper ID M2932). This research introduces a novel approach to enhance few-shot learning capabilities in point cloud models by leveraging Vision-Language Model (VLM) guided prompt tuning.",
      technologies: ['ECAI 2024', 'Point Cloud', 'Multimodal Learning', 'VLM', 'Few-shot Learning', 'AI'],
      imageUrl: 'https://raw.githubusercontent.com/eminentgu/DMMPT/refs/heads/main/m2932/Screenshot%202024-10-09%20at%2000.55.46.png', // Placeholder image
      repoUrl: 'https://github.com/eminentgu/DMMPT', // Link to paper or code if available
      liveUrl: 'https://www.researchgate.net/profile/Xiang-Gu-16/publication/385030994_Dynamic_Multimodal_Prompt_Tuning_Boost_Few-Shot_Learning_with_VLM-Guided_Point_Cloud_Models/links/6732c06969c07a411444cc69/Dynamic-Multimodal-Prompt-Tuning-Boost-Few-Shot-Learning-with-VLM-Guided-Point-Cloud-Models.pdf', // Link to conference or PDF
    },
    {
      id: 'pub2',
      name: 'TriEn-Net: Non-parametric Representation Learning for Large-Scale Point Cloud Semantic Segmentation',
      description: "Yifei Wang, Jixiang Miao, Xiang Gu (Fourth Author), et al. Accepted at PRCV 2024 (The 7th Chinese Conference on Pattern Recognition and Computer Vision, paper ID 1340). This paper presents TriEn-Net, a non-parametric method for learning representations in large-scale point cloud semantic segmentation tasks.",
      technologies: ['PRCV 2024', 'Point Cloud', 'Semantic Segmentation', 'Representation Learning', 'Deep Learning'],
      imageUrl: 'https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-981-97-8508-7_29/MediaObjects/563406_1_En_29_Fig1_HTML.png?as=webp', // Placeholder image
      liveUrl: 'https://openreview.net/forum?id=6ta26od5lk'
    },
  ];
  
  const skills: Skill[] = [
    { id: 'sk1', name: 'Data Analysis', level: 90 },
    { id: 'sk2', name: 'Machine Learning', level: 85 },
    { id: 'sk3', name: 'Point Cloud Processing', level: 80 },
    { id: 'sk4', name: 'Multimodal AI Models', level: 75 },
    { id: 'sk5', name: 'Few-Shot Learning', level: 70 },
    { id: 'sk6', name: 'Python (NumPy, Pandas, Scikit-learn)', level: 90 },
    { id: 'sk7', name: 'Deep Learning (PyTorch Basics)', level: 70 },
    { id: 'sk8', name: 'AI Data Preprocessing & Management', level: 75 },
    { id: 'sk9', name: 'Academic Research & Publication', level: 85 },
    { id: 'sk10', name: 'English (IELTS 7.0, CET-6 599, CET-4 607)', level: 95 },
  ];

  const rewardsData: RewardItem[] = [
    { id: 'rw1', name: 'Third prize of the 13th Blue Bridge Cup National Software and Information Technology Professionals Competition', level: 'Provincial Level' },
    { id: 'rw2', name: 'Third Prize in the 11th Teddy Cup Data Mining Challenge', level: 'National Level' },
    { id: 'rw3', name: 'Third-class Scholarship', level: 'Nanjing University of Science and Technology' },
  ];
  
  const contactLinks: ContactLink[] = [
    { href: `mailto:${personalInfo.email}`, icon: ICONS.EMAIL, label: 'Email' },
    { href: personalInfo.linkedin, icon: ICONS.LINKEDIN, label: 'LinkedIn Profile' },
    { href: personalInfo.github, icon: ICONS.GITHUB, label: 'GitHub Profile' },
    { href: `tel:${personalInfo.phone}`, icon: ICONS.PHONE, label: 'Phone' },
  ];

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } 
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Header name={personalInfo.name} title={personalInfo.title} navLinks={navLinks} activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 pt-24">
        <Hero 
          name={personalInfo.name} 
          title={personalInfo.title} 
          tagline={personalInfo.heroTagline}
          location={personalInfo.location}
          contactLinks={contactLinks.slice(0,2)} // Show email and LinkedIn in hero
        />

        <Section id="about" title="About Me">
          <p className="text-slate-300 leading-relaxed text-lg max-w-3xl mx-auto text-center sm:text-left">
            {personalInfo.about}
          </p>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-8">
            {educationItems.map(edu => (
              <EducationDisplayItem key={edu.id} {...edu} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Work & Research Experience">
          <div className="space-y-12">
            {experiences.map(exp => (
              <ExperienceItem key={exp.id} {...exp} />
            ))}
          </div>
        </Section>

        <Section id="publications" title="Research Publications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map(pub => (
              <ProjectCard key={pub.id} {...pub} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map(skill => (
              <SkillBadge key={skill.id} id={skill.id} name={skill.name} level={skill.level} />
            ))}
          </div>
        </Section>

        <Section id="awards" title="Honors & Awards">
          <div className="max-w-2xl mx-auto">
            <ul className="list-none space-y-4">
              {rewardsData.map(reward => (
                <li key={reward.id} className="bg-slate-800 p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-sky-400 text-lg">{reward.name}</h4>
                  <p className="text-slate-400 text-sm">{reward.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Get In Touch">
           <p className="text-center text-slate-300 mb-8 text-lg">
            Feel free to reach out! I'm always open to discussing new projects, research collaborations, or opportunities.
          </p>
          <ContactLinks links={contactLinks} />
        </Section>
      </main>
      
      <Footer name={personalInfo.name} />
    </div>
  );
};

export default App;
