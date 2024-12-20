import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiUsers, 
  FiTarget, 
  FiAward,
  FiTrendingUp,
  FiLifeBuoy,
  FiBook,
  FiStar,
  FiHeart
} from 'react-icons/fi';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  imagePath: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay, imagePath }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-purple-800/50 p-8 rounded-xl transform transition-all duration-200 hover:bg-purple-700/70 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img 
          src={imagePath} 
          alt="" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/services/placeholder.jpg';
          }}
        />
      </div>
      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-purple-400 text-3xl mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <motion.div
          whileHover={{ x: 5 }}
          className="text-purple-400 hover:text-purple-300 inline-flex items-center"
        >
          <Link to="/services">Learn More</Link>
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  const services = React.useMemo(() => [
    {
      icon: <FiBriefcase className="stroke-2" />,
      title: "Career Transition Support",
      description: "Expert guidance and resources for seamless professional transitions",
      imagePath: "/images/services/career-transition.jpg"
    },
    {
      icon: <FiTarget className="stroke-2" />,
      title: "Skills Assessment",
      description: "Comprehensive evaluation and personalized development plans",
      imagePath: "/images/services/skills-assessment.jpg"
    },
    {
      icon: <FiStar className="stroke-2" />,
      title: "Job Opportunities",
      description: "Connect with growing employment prospects in remote work",
      imagePath: "/images/services/growth.jpg"
    },
    {
      icon: <FiUsers className="stroke-2" />,
      title: "Professional Network",
      description: "Join a thriving network of professionals and mentors",
      imagePath: "/images/services/community.jpg"
    },
    {
      icon: <FiBook className="stroke-2" />,
      title: "Learning & Development",
      description: "Access curated training programs and certifications",
      imagePath: "/images/services/development.jpg"
    },
    {
      icon: <FiHeart className="stroke-2" />,
      title: "Personalized Support",
      description: "Dedicated assistance throughout your career journey",
      imagePath: "/images/services/support.jpg"
    }
  ], []);

  return (
    <section className="py-20 bg-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering career transitions through comprehensive support and professional development
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(services) && services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
