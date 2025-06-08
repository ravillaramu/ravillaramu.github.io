
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Coffee } from 'lucide-react';

const BlogsSection = () => {
  return (
    <section className="container mx-auto px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-center mb-16 text-gray-900">
          Blogs
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
            <CardHeader className="text-center p-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-light text-gray-900 mb-4">
                Blogs Under Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-12">
              <div className="mb-8">
                <Coffee className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  I'm currently working on insightful content covering the latest and most relevant topics in DevOps and Cloud Engineering. Stay tuned for new posts in the coming days!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-600 mb-2">Coming Soon</h4>
                  <p className="text-gray-700 text-sm">AWS Cost Optimization Strategies</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-green-600 mb-2">In Progress</h4>
                  <p className="text-gray-700 text-sm">Kubernetes Best Practices</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-purple-600 mb-2">Planning</h4>
                  <p className="text-gray-700 text-sm">Terraform Module Design</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
