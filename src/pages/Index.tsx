import { useState, useEffect } from 'react';
import { Monitor, Database, Server, Container, Cloud, Settings, Code, GitBranch, Zap, Mail, Github, Linkedin, ExternalLink, Shield, Award, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import CodeRain from '@/components/CodeRain';
import FloatingDevOpsIcons from '@/components/FloatingDevOpsIcons';
import ToolsSection from '@/components/ToolsSection';
import CertificationsSection from '@/components/CertificationsSection';
import BlogsSection from '@/components/BlogsSection';

const Index = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'AWS', icon: Cloud, level: 95, description: 'EC2, S3, Lambda, CloudFormation, EKS, IAM, Route 53' },
    { name: 'Azure', icon: Cloud, level: 90, description: 'AD, App Services, Resource Groups, Blob Storage' },
    { name: 'GCP', icon: Cloud, level: 85, description: 'Compute Engine, Cloud Storage, GKE' },
    { name: 'Terraform', icon: Settings, level: 95, description: 'IaC, State management, Modules, Multi-env' },
    { name: 'Kubernetes', icon: Server, level: 92, description: 'EKS, Container orchestration, Helm charts' },
    { name: 'Docker', icon: Container, level: 95, description: 'Containerization, Multi-stage builds' },
    { name: 'Jenkins', icon: GitBranch, level: 90, description: 'CI/CD pipelines, Automation, Groovy' },
    { name: 'Azure DevOps', icon: Code, level: 88, description: 'Pipelines, Repos, Boards, Artifacts' },
  ];

  const achievements = [
    {
      title: '30% Cost Reduction',
      description: 'Achieved significant cost savings through spot instance automation and FinOps optimization',
      icon: Target,
      impact: 'Cost Optimization'
    },
    {
      title: 'Kubernetes Migration',
      description: 'Led migration from on-premises to AWS EKS, improving scalability and management',
      icon: Server,
      impact: 'Infrastructure Modernization'
    },
    {
      title: 'Security Enhancement',
      description: 'Implemented centralized access control with AWS Identity Center and MFA',
      icon: Shield,
      impact: 'Security & Compliance'
    },
    {
      title: 'Multi-Cloud Expertise',
      description: 'Successfully managed complex infrastructures across AWS, Azure, and GCP',
      icon: Cloud,
      impact: 'Cloud Architecture'
    }
  ];

  const projects = [
    {
      title: 'AWS Control Tower Implementation',
      description: 'Set up centralized governance for multi-account AWS environments with enhanced security and compliance',
      tech: ['AWS Control Tower', 'IAM', 'Organizations', 'CloudTrail'],
      impact: 'Centralized governance achieved'
    },
    {
      title: 'Terraform Infrastructure Automation',
      description: 'Automated cloud resource provisioning across dev, staging, and production environments',
      tech: ['Terraform', 'AWS', 'Azure', 'GCP', 'CI/CD'],
      impact: 'Consistent deployments'
    },
    {
      title: 'EKS Cluster Optimization',
      description: 'Managed Kubernetes clusters with auto-scaling, monitoring, and cost optimization',
      tech: ['AWS EKS', 'Kubernetes', 'Prometheus', 'Grafana'],
      impact: 'Improved scalability'
    },
    {
      title: 'S3 Cost Optimization',
      description: 'Implemented Lambda-based auto-deletion for objects older than 400 days',
      tech: ['AWS Lambda', 'S3', 'CloudWatch', 'Python'],
      impact: 'Storage cost reduction'
    }
  ];

  const technicalSkills = [
    { category: 'Cloud Platforms', skills: ['AWS', 'Azure', 'GCP'] },
    { category: 'Infrastructure as Code', skills: ['Terraform', 'CloudFormation'] },
    { category: 'Containers & Orchestration', skills: ['Docker', 'Kubernetes', 'EKS'] },
    { category: 'CI/CD', skills: ['Jenkins', 'Azure DevOps', 'AWS CodePipeline'] },
    { category: 'Security', skills: ['IAM', 'AWS Security Hub', 'CloudTrail', 'AWS Identity Center'] },
    { category: 'Monitoring', skills: ['CloudWatch', 'Azure Monitor', 'Prometheus', 'Grafana'] },
    { category: 'Networking', skills: ['Route 53', 'CloudFront', 'VPC', 'Load Balancers'] },
    { category: 'Databases', skills: ['MySQL', 'SQL Server', 'RDS'] }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
      <CodeRain />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">
              Ravilla Ramu
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Skills</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Experience</a>
              <a href="#certifications" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Certifications</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Projects</a>
              <a href="#blogs" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Blogs</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-light mb-8 text-gray-900 tracking-tight">
              Cloud & DevOps
              <span className="block font-thin text-blue-600">Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              With 4 years of experience in designing scalable cloud infrastructure and automation solutions
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-6 py-3 text-base font-medium rounded-full hover:bg-blue-100 transition-colors">
                <Cloud className="w-5 h-5 mr-2" />
                Multi-Cloud Expert
              </Badge>
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 px-6 py-3 text-base font-medium rounded-full hover:bg-green-100 transition-colors">
                <Container className="w-5 h-5 mr-2" />
                Kubernetes Specialist
              </Badge>
              <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200 px-6 py-3 text-base font-medium rounded-full hover:bg-purple-100 transition-colors">
                <Settings className="w-5 h-5 mr-2" />
                Infrastructure as Code
              </Badge>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              <a href="mailto:ravillaramu@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect  
              </a>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`container mx-auto px-6 py-24 ${isVisible.about ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'} transition-all duration-700`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-light text-center mb-16 text-gray-900">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  A dedicated and passionate Cloud & DevOps Engineer with nearly 4 years of experience in designing, 
                  deploying, and optimizing scalable, secure, and cost-efficient cloud infrastructures. My expertise 
                  spans across AWS, Azure, and GCP, specializing in transforming complex systems into streamlined, 
                  automated environments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  I have a proven track record of helping organizations leverage the full power of the cloud through 
                  robust infrastructure automation, continuous integration and delivery (CI/CD), and high-performance 
                  container orchestration with Kubernetes and Docker.
                </p>
                
                {/* New key points section */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem Solver</h4>
                      <p className="text-gray-700 leading-relaxed">I love tackling complex challenges and finding the most efficient and scalable solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Learning Enthusiast</h4>
                      <p className="text-gray-700 leading-relaxed">Cloud technology is constantly evolving, and I'm committed to staying up-to-date with the latest trends and tools to improve my skill set.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Player</h4>
                      <p className="text-gray-700 leading-relaxed">I believe in the power of collaboration, and I always strive to support my teammates in achieving both personal and project success.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  I am particularly passionate about solving real-world technical challenges and continuously improving 
                  systems to drive business value. Whether it's optimizing cloud resources for cost savings, automating 
                  deployments, or ensuring system scalability and security.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                    <CardContent className="p-8 text-center">
                      <achievement.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{achievement.description}</p>
                      <Badge variant="outline" className="border-blue-200 text-blue-700 text-xs bg-blue-50">
                        {achievement.impact}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`container mx-auto px-6 py-24 bg-gray-50 ${isVisible.skills ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'} transition-all duration-700`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-light text-center mb-16 text-gray-900">
              Technical Expertise
            </h2>
            
            {/* Core Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {skills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-2xl"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <skill.icon className="w-8 h-8 mr-3 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600 font-medium">Proficiency</span>
                        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${activeSkill === index ? skill.level : 0}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalSkills.map((category, index) => (
                <Card key={index} className="bg-white border border-gray-200 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-lg font-semibold">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-gray-300 text-gray-700 text-xs bg-gray-50 hover:bg-gray-100 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <ToolsSection />

        {/* Certifications Section */}
        <section id="certifications">
          <CertificationsSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className={`container mx-auto px-6 py-24 ${isVisible.experience ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'} transition-all duration-700`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-light text-center mb-16 text-gray-900">
              Professional Experience
            </h2>
            <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl text-gray-900 font-semibold">Cloud & DevOps Engineer</CardTitle>
                <CardDescription className="text-lg text-gray-600 font-light">HTC Global Services • July 2021 – March 2025</CardDescription>
                <p className="text-base text-gray-700 leading-relaxed mt-4">
                  As a Cloud & DevOps Engineer at HTC Global Services, I have been responsible for designing, deploying, and managing 
                  scalable, secure, and high-performing cloud infrastructures on AWS, Azure, and GCP. My role involves 
                  automating environments, optimizing resources, ensuring security compliance, and improving operational efficiency.
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-6">Key Responsibilities</h4>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Cloud Infrastructure Management</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Provisioned and managed cloud resources on AWS (EC2, VPC, IAM, RDS, ELB, ASG, S3, Route 53), 
                          Azure (Azure AD, App Services, Resource Groups, Blob Storage), and GCP (Compute Engine, Cloud Storage)
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Configured and optimized Application Load Balancers (ALB) and Network Load Balancers (NLB) 
                          for high availability and efficient traffic management
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Ensured high scalability and performance by implementing Auto Scaling for EC2 instances 
                          and Kubernetes clusters (EKS)
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Identity Management & Security</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Integrated Active Directory with AWS Identity Center for seamless Single Sign-On (SSO) 
                          across cloud environments
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Managed centralized governance and multi-account environments using AWS Control Tower 
                          for improved security, compliance, and operational efficiency
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Implemented and managed AWS IAM policies, roles, and groups to ensure granular access control 
                          and secure management of resources
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Configured security measures across multiple cloud services including AWS Security Hub, 
                          GuardDuty, and WAF to protect infrastructure from potential vulnerabilities
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure as Code (IaC)</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Automated the provisioning of cloud resources across multiple environments (development, staging, production) 
                          using Terraform, ensuring consistency and scalability in deployment
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Created Terraform modules to enhance code reusability and maintain centralized management 
                          of state files, improving maintainability and simplifying future infrastructure updates
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Web and Application Management</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Set up and managed S3 static websites and configured CDNs (CloudFront) for low-latency content delivery
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Deployed and managed Tomcat and NGINX applications in both UAT and production environments
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Configured EFS (Elastic File System) and attached it to EC2 instances to provide shared file storage
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Created and renewed SSL certificates for secure communication and enabled HTTPS on load balancers 
                          for data protection in both rest and transit
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Cost Optimization & Automation</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Automated the provisioning of AWS Spot Instances, effectively reducing cloud infrastructure costs 
                          while ensuring application performance remained consistent
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Integrated FinOps tools to optimize cloud spending, achieving a 30% reduction in operational costs
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Implemented object auto-deletion for S3 buckets by using Lambda functions to remove objects 
                          older than 400 days, optimizing storage and reducing costs
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-teal-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Disaster Recovery & Backup</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Designed and implemented automated backup solutions for critical workloads using AWS Backup, 
                          ensuring data integrity and availability
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Conducted disaster recovery tests and implemented backup strategies to ensure business continuity
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Monitoring & Performance Optimization</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Set up monitoring using CloudWatch and Azure Monitor to proactively track cloud resources, 
                          application performance, and detect issues
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Integrated Prometheus and Grafana for advanced monitoring and alerting of Kubernetes clusters 
                          and cloud resources
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-6">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-green-600 mb-2">30% Cost Reduction</h5>
                      <p className="text-gray-700 text-sm">Achieved significant savings by automating spot instances and optimizing resource management</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-blue-600 mb-2">Kubernetes Migration</h5>
                      <p className="text-gray-700 text-sm">Led migration from on-premises to AWS EKS, improving scalability and management</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-purple-600 mb-2">Security Enhancement</h5>
                      <p className="text-gray-700 text-sm">Strengthened cloud security with centralized access control and MFA implementation</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-orange-600 mb-2">Infrastructure Automation</h5>
                      <p className="text-gray-700 text-sm">Automated provisioning and management using Terraform across all environments</p>
                    </div>
                    <div className="bg-teal-50 border border-teal-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-teal-600 mb-2">Web Infrastructure</h5>
                      <p className="text-gray-700 text-sm">Successfully deployed S3 static websites with CDN optimization for content delivery</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-red-600 mb-2">SSL Management</h5>
                      <p className="text-gray-700 text-sm">Configured automated SSL certificate creation and renewal for enhanced security</p>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-indigo-600 mb-2">Control Tower Setup</h5>
                      <p className="text-gray-700 text-sm">Implemented AWS Control Tower for centralized governance of multiple accounts</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                      <h5 className="font-semibold text-gray-600 mb-2">S3 Optimization</h5>
                      <p className="text-gray-700 text-sm">Implemented Lambda-based auto-deletion for storage cost optimization and compliance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <p className="text-gray-700 font-medium text-center">
                    <span className="text-blue-600">Want to Know More?</span> I'm always working on exciting projects! 
                    Feel free to reach out if you'd like to discuss my work or collaborate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`container mx-auto px-6 py-24 bg-gray-50 ${isVisible.projects ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'} transition-all duration-700`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-light text-center mb-16 text-gray-900">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <CardHeader className="p-8">
                    <CardTitle className="text-gray-900 text-xl font-semibold">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-semibold">{project.impact}</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs">
          <BlogsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className={`container mx-auto px-6 py-24 ${isVisible.contact ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'} transition-all duration-700`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-8 text-gray-900">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Ready to collaborate on exciting cloud and DevOps projects? Let's discuss how I can help optimize your infrastructure and drive business value.
            </p>
            <div className="flex justify-center space-x-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                <a href="mailto:ravillaramu@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                  </a>
              </Button>
              {/* <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button> */}
              <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
                <a href="https://www.linkedin.com/in/ravillaramu/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-gray-200">
          <div className="text-center text-gray-600 font-light">
            <p>&copy; 2025 Ravilla Ramu - Cloud & DevOps Engineer. Passionate about cloud innovation and automation.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

