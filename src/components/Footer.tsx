import React from 'react';
import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
    
    
    <footer className="bg-background pt-20 pb-8 mt-20">
      <div className="container mx-auto px-4">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src={Logo} alt="DevStack Logo" className="h-8 w-auto mb-6" />
            <p className="text-footer-text text-sm leading-relaxed mb-6 max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-footer-t font-bold text-sm hover:text-nav-home transition-colors">GitHub</a>
              <a href="#" className="text-footer-t font-bold text-sm hover:text-nav-home transition-colors">Twitter</a>
              <a href="#" className="text-footer-t font-bold text-sm hover:text-nav-home transition-colors">LinkedIn</a>
            </div>
          </div>

         
          <div>
            <h3 className="text-footer-t font-bold text-sm uppercase tracking-wider mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Home</a></li>
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Technologies</a></li>
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Projects</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-footer-t font-bold text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Careers</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-footer-t font-bold text-sm uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

    
        <div className="border-t border-border-line mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-footer-text text-sm">
            © 2026 DevStack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Privacy</a>
            <a href="#" className="text-footer-text hover:text-footer-t text-sm transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  
            
    
    );
};

export default Footer;