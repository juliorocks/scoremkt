
import { useEffect, useState } from "react";

interface ScoreGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const ScoreGauge = ({ score, size = "md", animated = true }: ScoreGaugeProps) => {
  const [currentScore, setCurrentScore] = useState(0);
  
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48", 
    lg: "w-64 h-64"
  };

  const textSizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl"
  };

  useEffect(() => {
    if (!animated) {
      setCurrentScore(score);
      return;
    }

    const duration = 4000; // 4 seconds
    const increment = score / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setCurrentScore(score);
        clearInterval(timer);
      } else {
        setCurrentScore(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [score, animated]);

  // Calculate angle based on score (180 degrees for semicircle)
  const angle = (currentScore / 100) * 180;
  const needleRotation = angle - 90; // Adjust for starting position

  const getScoreColor = (score: number) => {
    if (score >= 85) return "#00D887"; // Verde limão
    if (score >= 70) return "#2EB3FF"; // Azul claro
    if (score >= 40) return "#FFB800"; // Amarelo
    return "#FF6B6B"; // Vermelho
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto`}>
      {/* Gauge Background */}
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Arc */}
        <path
          d="M 20 80 A 60 60 0 0 1 180 80"
          stroke="#E5E7EB"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Progress Arc */}
        <path
          d="M 20 80 A 60 60 0 0 1 180 80"
          stroke={getScoreColor(currentScore)}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(currentScore / 100) * 251.3} 251.3`}
          className="transition-all duration-100 ease-out"
        />
      </svg>

      {/* Needle */}
      <div 
        className="absolute top-1/2 left-1/2 w-1 bg-mind-text origin-bottom transition-transform duration-100 ease-out"
        style={{
          height: size === 'sm' ? '3rem' : size === 'md' ? '4.5rem' : '6rem',
          transform: `translate(-50%, -100%) rotate(${needleRotation}deg)`,
        }}
      >
        <div className="w-3 h-3 bg-mind-text rounded-full absolute -top-1 -left-1"></div>
      </div>

      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border-4 border-mind-text rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Score Display */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
        <div className={`${textSizes[size]} font-bold text-mind-text`}>
          {currentScore}
        </div>
        <div className="text-sm text-gray-600">Score MKT</div>
      </div>
    </div>
  );
};

export default ScoreGauge;
