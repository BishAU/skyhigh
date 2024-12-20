import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiFacebook, FiTwitter, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface FooterProps {
  className?: string;
}

interface QuickLink {
  name: string;
  path: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const quickLinks: QuickLink[] = React.useMemo(() => [
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/about/team' },
    { name: 'Our Mission', path: '/about/mission' },
    { name: 'Partners', path: '/about/partners' },
    { name: 'Careers', path: '/about/careers' },
    { name: 'Services', path: '/dashboard/services' },
    { name: 'Resources', path: '/dashboard/resources' },
    { name: 'Events', path: '/dashboard/events' },
    { name: 'Contact', path: '/contact' },
  ], []);

  const renderQuickLinks = () => {
    if (!Array.isArray(quickLinks) || quickLinks.length === 0) {
      return null;
    }

    return quickLinks.map((link) => (
      <li key={link.name}>
        <Link to={link.path} className="text-gray-400 hover:text-purple-500 text-sm flex items-center group">
          <FiArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
          {link.name}
        </Link>
      </li>
    ));
  };

  return (
    <footer className={`bg-gray-900 ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Acknowledgement Section */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Acknowledgement of Country</h3>
          <p className="text-gray-400 text-sm">
            We acknowledge the Aboriginal and Torres Strait Islanders as the first inhabitants of where we live, learn and work and we pay our respects to Elders past and present.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">VirtualCC</h3>
            <p className="text-gray-400 text-sm">
              Our purpose is to overcome Ageism in employment of over 50's through Work From Home Contact Centre opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {renderQuickLinks()}
              <li>
                <Link to="/dashboard" className="text-purple-400 hover:text-purple-300 text-sm flex items-center group">
                  <FiArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <FiPhone className="w-4 h-4 mr-2" />
                03 8456 9900
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <FiMail className="w-4 h-4 mr-2" />
                info@virtualcc.org.au
              </li>
            </ul>
          </div>

          {/* Purpose Statement */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Purpose</h3>
            <p className="text-gray-400 text-sm mb-4">
              To overcome Ageism in employment of over 50's by creating meaningful Work From Home Contact Centre opportunities.
            </p>
            <p className="text-gray-400 text-sm">
              We aim to increase self respect and improve mental health outcomes for all Australians.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; 2024 VirtualCC. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
              <Link to="/accessibility" className="text-sm text-gray-400 hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
