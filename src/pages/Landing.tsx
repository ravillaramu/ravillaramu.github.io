
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Server, Container, Settings } from 'lucide-react';

const Landing = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate('/portfolio'), 200);
          return 100;
        }
        return prev + 3.33; // Changed to reach 100% in 3 seconds (100/30 = 3.33)
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0">
        <Cloud className="absolute top-20 left-20 w-8 h-8 text-blue-300 animate-float opacity-50" />
        <Server className="absolute top-32 right-32 w-6 h-6 text-gray-400 animate-float opacity-40" style={{animationDelay: '1s'}} />
        <Container className="absolute bottom-40 left-40 w-10 h-10 text-blue-200 animate-float opacity-30" style={{animationDelay: '2s'}} />
        <Settings className="absolute bottom-20 right-20 w-7 h-7 text-gray-300 animate-float opacity-60" style={{animationDelay: '0.5s'}} />
        <Cloud className="absolute top-1/2 left-10 w-5 h-5 text-blue-400 animate-float opacity-20" style={{animationDelay: '1.5s'}} />
        <Server className="absolute top-40 right-10 w-9 h-9 text-gray-300 animate-float opacity-35" style={{animationDelay: '2.5s'}} />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-4 animate-fade-in">
            Welcome
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 font-light mb-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Ravilla Ramu - Cloud & DevOps Engineer
          </div>
          <div className="text-lg text-gray-500 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Building scalable infrastructure solutions
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="text-sm text-gray-400 animate-fade-in" style={{animationDelay: '0.9s'}}>
          Loading portfolio...
        </div>
      </div>
    </div>
  );
};

export default Landing;
