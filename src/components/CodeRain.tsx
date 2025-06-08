
import { useEffect, useRef } from 'react';

const CodeRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shellCommands = [
      'cd /var/www',
      'sudo apt update',
      'docker ps -a',
      'git status',
      'npm start',
      'ls -la',
      'chmod 755',
      'tail -f logs',
      'grep -r "error"',
      'ps aux',
      'netstat -tulpn',
      'df -h',
      'top',
      'htop',
      'vim config.yml',
      'cat /etc/hosts',
      'ping google.com',
      'ssh user@server',
      'scp file.txt',
      'rsync -av',
      'curl -X GET',
      'wget https://',
      'tar -xzf',
      'zip -r backup',
      'systemctl status',
      'journalctl -f',
      'crontab -e',
      'history | grep',
      'which node',
      'whereis python'
    ];

    const createFloatingCommand = () => {
      const command = document.createElement('div');
      command.className = 'floating-command';
      command.textContent = shellCommands[Math.floor(Math.random() * shellCommands.length)];
      
      // Random starting position from different edges
      const side = Math.floor(Math.random() * 4);
      const size = Math.random() * 0.4 + 0.6; // 0.6 to 1.0
      const opacity = Math.random() * 0.3 + 0.1; // 0.1 to 0.4
      const duration = Math.random() * 10 + 8; // 8-18 seconds
      
      command.style.cssText = `
        position: absolute;
        font-family: 'Courier New', monospace;
        font-size: ${12 + Math.random() * 6}px;
        color: rgba(59, 130, 246, ${opacity});
        pointer-events: none;
        white-space: nowrap;
        transform: scale(${size});
        z-index: 1;
        text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
      `;

      // Set starting position based on side
      switch(side) {
        case 0: // Top
          command.style.left = Math.random() * 100 + '%';
          command.style.top = '-50px';
          command.style.animation = `floatDown ${duration}s linear infinite`;
          break;
        case 1: // Right
          command.style.left = '100vw';
          command.style.top = Math.random() * 100 + '%';
          command.style.animation = `floatLeft ${duration}s linear infinite`;
          break;
        case 2: // Bottom
          command.style.left = Math.random() * 100 + '%';
          command.style.top = '100vh';
          command.style.animation = `floatUp ${duration}s linear infinite`;
          break;
        case 3: // Left
          command.style.left = '-200px';
          command.style.top = Math.random() * 100 + '%';
          command.style.animation = `floatRight ${duration}s linear infinite`;
          break;
      }

      container.appendChild(command);

      setTimeout(() => {
        if (container.contains(command)) {
          container.removeChild(command);
        }
      }, duration * 1000);
    };

    // Create initial commands
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createFloatingCommand(), i * 1000);
    }

    // Continue creating commands
    const interval = setInterval(createFloatingCommand, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
};

export default CodeRain;
