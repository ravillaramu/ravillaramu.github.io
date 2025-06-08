import { Cloud, Server, Container, Settings, GitBranch, Database, Shield, Zap } from 'lucide-react';

const FloatingDevOpsIcons = () => {
  const icons = [
    { Icon: Cloud, delay: '0s', position: 'top-20 left-10' },
    { Icon: Server, delay: '2s', position: 'top-40 right-20' },
    { Icon: Container, delay: '4s', position: 'bottom-40 left-20' },
    { Icon: Settings, delay: '1s', position: 'bottom-20 right-10' },
    { Icon: GitBranch, delay: '3s', position: 'top-60 left-1/3' },
    { Icon: Database, delay: '5s', position: 'bottom-60 right-1/3' },
    { Icon: Shield, delay: '2.5s', position: 'top-32 right-1/4' },
    { Icon: Zap, delay: '1.5s', position: 'bottom-32 left-1/4' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} floating-animation opacity-10`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-12 h-12 text-blue-400" />
        </div>
      ))}
    </div>
  );
};

export default FloatingDevOpsIcons;
