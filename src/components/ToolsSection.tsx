
import { Card, CardContent } from '@/components/ui/card';

const ToolsSection = () => {
  const tools = [
    {
      name: 'AWS',
      category: 'Cloud Platform',
      description: 'Amazon Web Services - EC2, S3, Lambda, EKS',
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-700',
      icon: '/aws.png'
    },
    {
      name: 'Azure',
      category: 'Cloud Platform', 
      description: 'Microsoft Azure - App Services, Blob Storage, AD',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700',
      icon: '/azure.png'
    },
    {
      name: 'GCP',
      category: 'Cloud Platform',
      description: 'Google Cloud Platform - Compute Engine, Cloud Storage',
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-700',
      icon: '/gcp.png'
    },
    {
      name: 'Docker',
      category: 'Containerization',
      description: 'Container platform for application deployment',
      color: 'bg-cyan-50 border-cyan-200',
      textColor: 'text-cyan-700',
      icon: '/docker.png'
    },
    {
      name: 'Kubernetes',
      category: 'Orchestration',
      description: 'Container orchestration and management',
      color: 'bg-indigo-50 border-indigo-200',
      textColor: 'text-indigo-700',
      icon: '/kubernetes.png'
    },
    {
      name: 'Terraform',
      category: 'Infrastructure as Code',
      description: 'Infrastructure automation and provisioning',
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700',
      icon: '/terraform.png'
    },
    {
      name: 'Jenkins',
      category: 'CI/CD',
      description: 'Continuous integration and deployment',
      color: 'bg-red-50 border-red-200',
      textColor: 'text-red-700',
      icon: '/jenkins.png'  
    },
    {
      name: 'Prometheus',
      category: 'Monitoring',
      description: 'Monitoring and alerting toolkit',
      color: 'bg-amber-50 border-amber-200',
      textColor: 'text-amber-700',
      icon: '/prometheus.png'
    },
    {
      name: 'Grafana',
      category: 'Visualization',
      description: 'Analytics and monitoring dashboards',
      color: 'bg-teal-50 border-teal-200',
      textColor: 'text-teal-700',
      icon: '/grafana.png'
    }
  ];

  return (
    <section className="container mx-auto px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-center mb-16 text-gray-900">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card 
              key={tool.name}
              className={`${tool.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl`}
            >
              <CardContent className="p-8 text-center">
                {/* Placeholder for tool logo */}
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  {/* <div className={`w-10 h-10 rounded-lg ${tool.color.replace('50', '200')} flex items-center justify-center`}>
                    
                     <span className={`text-lg font-bold ${tool.textColor}`}>
                      {tool.name.charAt(0)}
                    </span> 
                  </div> */}
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />

                </div>
                <h3 className={`text-xl font-semibold mb-2 ${tool.textColor}`}>
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  {tool.category}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
