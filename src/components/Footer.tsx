
import React from "react";
import { Shield, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const platformLinks = [
    { href: "/features", label: "Features" },
    { href: "/security", label: "Security" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" }
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" }
  ];

  const socialLinks = [
    { href: "https://linkedin.com", label: "LinkedIn", icon: "Linkedin" },
    { href: "https://twitter.com", label: "Twitter", icon: "Twitter" },
    { href: "https://facebook.com", label: "Facebook", icon: "Facebook" },
    { href: "https://instagram.com", label: "Instagram", icon: "Instagram" }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">ExamEyeVerify</span>
            </div>
            <p className="mt-4 text-base text-gray-500">
              Secure online examination platform with advanced proctoring features.
              Take and administer tests with confidence.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-4">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-base text-gray-500 hover:text-gray-900 flex items-center gap-2"
                  >
                    <LinkIcon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-base text-gray-500 hover:text-gray-900 flex items-center gap-2"
                  >
                    <LinkIcon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} ExamEyeVerify. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a 
                key={social.href} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                {React.createElement(require('lucide-react')[social.icon], { className: "h-6 w-6" })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
