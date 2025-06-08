
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      level: 'Associate',
      year: '2023',
      status: 'Active',
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-700'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      level: 'Fundamentals',
      year: '2022',
      status: 'Active',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700'
    },
    {
      name: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      level: 'Professional',
      year: '2023',
      status: 'Active',
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc',
      level: 'Associate',
      year: '2022',
      status: 'Active',
      color: 'bg-cyan-50 border-cyan-200',
      textColor: 'text-cyan-700'
    }
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-center mb-16 text-gray-900">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.name}
              className={`${cert.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl`}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Award className={`w-8 h-8 ${cert.textColor}`} />
                </div>
                <CardTitle className={`text-lg font-semibold ${cert.textColor}`}>
                  {cert.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 font-medium mb-2">
                  {cert.issuer}
                </p>
                <div className="flex justify-center gap-2 mb-4">
                  <Badge variant="outline" className="text-xs bg-white">
                    {cert.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-white">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.year}
                  </Badge>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${cert.color.replace('50', '100')} ${cert.textColor} border-0`}
                >
                  {cert.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
