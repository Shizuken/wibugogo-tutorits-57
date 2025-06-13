
const SimpleFooter = () => {
  return (
    <footer className="bg-deep-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-bright-mustard">TutorITS</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering millions of learners worldwide with free, world-class education. 
              Join our community and unlock your potential.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-scholarly-blue rounded-full flex items-center justify-center hover:bg-bright-mustard transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-scholarly-blue rounded-full flex items-center justify-center hover:bg-bright-mustard transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-scholarly-blue rounded-full flex items-center justify-center hover:bg-bright-mustard transition-colors">
                <span className="text-xl">📺</span>
              </a>
              <a href="#" className="w-10 h-10 bg-scholarly-blue rounded-full flex items-center justify-center hover:bg-bright-mustard transition-colors">
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-bright-mustard">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="/tutors" className="text-gray-300 hover:text-white transition-colors">Tutors</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-bright-mustard">Support</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TutorITS. All rights reserved. Made with ❤️ for learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
