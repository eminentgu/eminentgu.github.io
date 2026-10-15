
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
import { DarkSide } from './components/DarkSide';
import type { NavLink, Experience, Project, EducationItem, Skill, ContactLink, RewardItem } from './types';
import { ICONS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'light' | 'dark'>('light');

  const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#publications', label: 'Publications' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
  ];

  const personalInfo = {
    name: 'Xiang GU',
    title: 'Data Science & AI Researcher',
    location: 'Hong Kong / ShangHai, China',
    email: 'XiangGU2003@icloud.com',
    phone: '(+86) 15051776462',
    linkedin: 'https://www.linkedin.com/in/xiang-gu-084b21245',
    github: 'https://github.com/eminentgu',
    about:
      "Dedicated and results-oriented Data Science student with a strong foundation in Big Data Technology from Nanjing University of Science and Technology, and an upcoming Master of Data Science at The University of Hong Kong. My research interests focus on AI Security and Trustworthy AI, spanning Agent Security (under review), Quantization-conditioned backdoor attacks (T-IFS 2026), Multimodal Robustness Distillation (AAAI 2026), and Knowledge Distillation (ICCV 2025). Currently, I am an AI Research Intern at Amber Group in Hong Kong, contributing to the development of sophisticated Agent Systems. Proficient in English (IELTS 7.0).",
    heroTagline: "Leveraging data and AI to drive innovation in intelligent systems.",
    phdNotice: "Actively seeking opportunities for Fall 2027 in HK/Europe/Singapore focusing on Agent Systems & Trustworthy AI. Holding IANG work visa in HK (valid until 2029)."
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
      id: 'exp-amber',
      role: 'AI Research Intern',
      company: 'Amber Group, Hong Kong',
      period: 'Apr 2026 - Present',
      descriptionPoints: [
        'Full-time on-site role.',
        'Participating in building AmberClaw, a sophisticated Agent System.',
        'Assisting Amber Group in strategic AI-driven transformation initiatives.',
        'Researching prompt engineering and agentic workflows for fintech applications.'
      ],
      technologies: ['Agent Systems', 'LLM Agents', 'FinTech', 'GenAI', 'Prompt Engineering'],
    },
    {
      id: 'exp-novo',
      role: 'LLM Full Stack Intern',
      company: 'NOVOAI (Funded by HKSTP)',
      period: 'Oct 2025 - Apr 2026',
      descriptionPoints: [
        'Full-time on-site internship.',
        'Building LLM agent systems tailored for insurance companies.',
        'Developing full-stack solutions for AI-driven applications.'
      ],
      technologies: ['LLM', 'Full Stack', 'AI Agents', 'GenAI'],
    },
    {
      id: 'exp1',
      role: 'Research Assistant (3D Intelligent Perception)',
      company: 'Nanjing University of Science and Technology (Advised by Prof. Shuchao Pang)',
      period: 'Jan 2023 - Apr 2026',
      descriptionPoints: [
        'Researched processing of LiDAR point cloud data using multimodal large models.',
        'Proposed MRPD (AAAI 2026), a novel teacher-student framework for robust 3D point cloud defense.',
        'Contributed to CIARD (ICCV 2025), optimizing adversarial robustness distillation.',
        'First author for ECAI 2024 paper; contributed as fourth author for PRCV 2024 paper.',
        'Work supported by National Key R&D Program, NSFC, and Jiangsu Province Autonomous Driving Technology Innovation and Application Engineering Research Center.'
      ],
      technologies: ['Point Cloud Analysis', 'Multimodal Models', 'AI Security', 'Distillation', 'Python'],
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

  const publications: Project[] = [
    {
      id: 'pub-quest',
      name: '[T-IFS 2026] QuEST: Quantization-Conditioned Efficient Stealthy Trojan',
      description: "Quantization-conditioned backdoor attacks exploit model quantization states to trigger malicious behavior. We propose QuEST, a novel framework that enhances both stealth and efficiency of backdoor attacks under quantization constraints. Experiments demonstrate that QuEST improves stealth by 18.75% and reduces computational costs by 26.66% on average.",
      technologies: ['AI Security', 'Quantization', 'Backdoor Attacks', 'Stealthy Trojan'],
      liveUrl: 'https://ieeexplore.ieee.org/document/11422282',
      imageUrl: 'https://figures.semanticscholar.org/9e676f370895a2624a5934476c7b2e25fb99f7cc/5-Figure2-1.png'
    },
    {
      id: 'pub-dream',
      name: '[WIP] DREAM: Dynamic Red-teaming across Environments for AI Models',
      description: "DREAM is a framework for systematic evaluation of LLM agents against dynamic, multi-stage attacks. At its core, it uses a Cross-Environment Adversarial Knowledge Graph (CE-AKG) to maintain stateful, cross-domain understanding of vulnerabilities. This graph guides a Contextualized Guided Policy Search (C-GPS) algorithm that dynamically constructs attack chains from 1,986 atomic actions across 349 environments. Our evaluation of 12 leading LLM agents reveals a critical vulnerability: these attack chains succeed in over 70% of cases for most models, proving traditional safety measures ineffective against multi-turn contextual exploits.",
      technologies: ['LLM Agents', 'Red-teaming', 'AI Safety', 'Knowledge Graph'],
      liveUrl: 'https://arxiv.org/abs/2512.19016',
      imageUrl: 'https://arxiv.org/html/2512.19016v1/x2.png'
    },
    {
      id: 'pub-aaai2026',
      name: '[AAAI 2026] Multimodal Robust Prompt Distillation (MRPD): Towards Efficient and Generalizable 3D Defense',
      description: "Xiang Gu (First Author). Adversarial attacks pose a significant threat to learning-based 3D point cloud models. We propose a novel yet efficient teacher-student framework (MRPD) to distill robust 3D point cloud models. It learns lightweight prompts by aligning student features with robust embeddings from multimodal teachers (vision, 3D, and text), substantially performing better than SOTA defense methods.",
      technologies: ['AI Security', '3D Point Cloud', 'Multimodal', 'Distillation'],
      repoUrl: 'https://github.com/eminentgu/MRPD',
      liveUrl: 'https://arxiv.org/abs/2511.21574v1',
      imageUrl: 'https://arxiv.org/html/2511.21574v1/x2.png' 
    },
    {
      id: 'pub-iccv2025',
      name: '[ICCV 2025] CIARD: Cyclic Iterative Adversarial Robustness Distillation',
      description: "Adversarial robustness distillation (ARD) aims to transfer both performance and robustness. We propose CIARD, featuring a multi-teacher framework with contrastive push-loss alignment and continuous adversarial retraining, achieving a new benchmark for balancing model robustness and generalization.",
      technologies: ['AI Security', 'Robustness Distillation', 'Adversarial Defense'],
      repoUrl: 'https://github.com/CIARD2025/CIARD',
      liveUrl: 'https://openaccess.thecvf.com/content/ICCV2025/html/Lu_CIARD_Cyclic_Iterative_Adversarial_Robustness_Distillation_ICCV_2025_paper.html',
      imageUrl: 'https://arxiv.org/html/2509.12633v1/x2.png'
    },
    {
      id: 'pub1',
      name: '[ECAI 2024] Dynamic Multimodal Prompt Tuning: Boost Few-shot Learning with VLM-Guided Point Cloud Models',
      description: "Xiang Gu, et al. This research introduces a novel approach to enhance few-shot learning capabilities in point cloud models by leveraging Vision-Language Model (VLM) guided prompt tuning.",
      technologies: ['Point Cloud', 'Multimodal Learning', 'VLM', 'Few-shot Learning', 'AI'],
      imageUrl: 'https://raw.githubusercontent.com/eminentgu/DMMPT/refs/heads/main/m2932/Screenshot%202024-10-09%20at%2000.55.46.png', 
      repoUrl: 'https://github.com/eminentgu/DMMPT', 
      liveUrl: 'https://www.researchgate.net/profile/Xiang-Gu-16/publication/385030994_Dynamic_Multimodal_Prompt_Tuning_Boost_Few-Shot_Learning_with_VLM-Guided_Point_Cloud_Models/links/6732c06969c07a411444cc69/Dynamic-Multimodal-Prompt-Tuning-Boost-Few-Shot-Learning-with-VLM-Guided-Point-Cloud-Models.pdf', 
    },
    {
      id: 'pub2',
      name: '[PRCV 2024] TriEn-Net: Non-parametric Representation Learning for Large-Scale Point Cloud Semantic Segmentation',
      description: "Yifei Wang, Jixiang Miao, Xiang Gu (Fourth Author), et al. This paper presents TriEn-Net, a non-parametric method for learning representations in large-scale point cloud semantic segmentation tasks.",
      technologies: ['Point Cloud', 'Semantic Segmentation', 'Representation Learning', 'Deep Learning'],
      imageUrl: 'https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-981-97-8508-7_29/MediaObjects/563406_1_En_29_Fig1_HTML.png?as=webp', 
      liveUrl: 'https://openreview.net/forum?id=6ta26od5lk'
    },
  ];
  
  const skills: Skill[] = [
    { id: 'sk-sec', name: 'AI Security (Agent & Robustness)', level: 95 },
    { id: 'sk-dis', name: 'Knowledge Distillation', level: 90 },
    { id: 'sk-pt', name: 'Prompt Tuning', level: 90 },
    { id: 'sk1', name: 'Data Analysis', level: 90 },
    { id: 'sk2', name: 'Machine Learning', level: 85 },
    { id: 'sk3', name: 'Point Cloud Processing', level: 80 },
    { id: 'sk4', name: 'Multimodal AI Models', level: 80 },
    { id: 'sk6', name: 'Python (NumPy, Pandas, Scikit-learn)', level: 90 },
    { id: 'sk7', name: 'Deep Learning (PyTorch)', level: 85 },
    { id: 'sk9', name: 'Academic Research', level: 90 },
    { id: 'sk10', name: 'English (IELTS 7.0)', level: 95 },
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
  const [seenSections, setSeenSections] = useState<Set<string>>(new Set());
  const [illuminatedTextIds, setIlluminatedTextIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (view !== 'light') return;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSeenSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const illuminationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIlluminatedTextIds(prev => new Set(prev).add(entry.target.id));
          } else {
            setIlluminatedTextIds(prev => {
              const next = new Set(prev);
              next.delete(entry.target.id);
              return next;
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 } 
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      navObserver.observe(section);
      animationObserver.observe(section);
    });

    document.querySelectorAll('[data-projectable-text="true"]').forEach((el) => {
      illuminationObserver.observe(el);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        navObserver.unobserve(section);
        animationObserver.unobserve(section);
      });
      document.querySelectorAll('[data-projectable-text="true"]').forEach((el) => {
        illuminationObserver.unobserve(el);
      });
    };
  }, [view]);

  const toggleToDark = () => {
    setView('dark');
  };

  const toggleToLight = () => {
    const overlay = document.getElementById('glitch-screen-overlay');
    if (overlay) overlay.classList.remove('glitch-overlay-active');
    setView('light');
  };

  if (view === 'dark') {
    return <DarkSide onBack={toggleToLight} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Header name={personalInfo.name} title={personalInfo.title} navLinks={navLinks} activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 pt-24">
        <Hero 
          name={personalInfo.name} 
          title={personalInfo.title} 
          tagline={personalInfo.heroTagline}
          location={personalInfo.location}
          contactLinks={contactLinks.slice(0,2)} 
          isTextIlluminated={illuminatedTextIds.has('hero-main-name-text')}
          onDarkSideClick={toggleToDark}
        />

        <Section 
          id="about" 
          title="About Me" 
          isInView={seenSections.has('about')}
          isTitleIlluminated={illuminatedTextIds.has('section-about-title-text')}
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-sky-900/40 to-slate-800/40 border-l-4 border-sky-500 p-6 rounded shadow-lg transform transition-all duration-500 hover:scale-[1.01] hover:shadow-sky-500/10">
              <p className="font-semibold text-sky-200 text-lg sm:text-xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="text-3xl">🎓</span>
                <span>{personalInfo.phdNotice}</span>
              </p>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg text-center sm:text-left">
              {personalInfo.about}
            </p>
          </div>
        </Section>

        <Section 
          id="education" 
          title="Education" 
          isInView={seenSections.has('education')}
          isTitleIlluminated={illuminatedTextIds.has('section-education-title-text')}
        >
          <div className="space-y-8">
            {educationItems.map(edu => (
              <EducationDisplayItem key={edu.id} {...edu} />
            ))}
          </div>
        </Section>

        <Section 
          id="publications" 
          title="Research Publications" 
          isInView={seenSections.has('publications')}
          isTitleIlluminated={illuminatedTextIds.has('section-publications-title-text')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map(pub => (
              <ProjectCard key={pub.id} {...pub} />
            ))}
          </div>
        </Section>

        <Section 
          id="experience" 
          title="Work & Research Experience" 
          isInView={seenSections.has('experience')}
          isTitleIlluminated={illuminatedTextIds.has('section-experience-title-text')}
        >
          <div className="space-y-12">
            {experiences.map(exp => (
              <ExperienceItem key={exp.id} {...exp} />
            ))}
          </div>
        </Section>

        <Section 
          id="skills" 
          title="Skills" 
          isInView={seenSections.has('skills')}
          isTitleIlluminated={illuminatedTextIds.has('section-skills-title-text')}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map(skill => (
              <SkillBadge key={skill.id} id={skill.id} name={skill.name} level={skill.level} />
            ))}
          </div>
        </Section>

        <Section 
          id="awards" 
          title="Honors & Awards" 
          isInView={seenSections.has('awards')}
          isTitleIlluminated={illuminatedTextIds.has('section-awards-title-text')}
        >
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

        <Section 
          id="contact" 
          title="Get In Touch" 
          isInView={seenSections.has('contact')}
          isTitleIlluminated={illuminatedTextIds.has('section-contact-title-text')}
        >
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
