
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome to TutorITS</h1>
          <p className="text-gray-600">
            Welcome back, <span className="text-[#93AAC7] font-medium cursor-pointer hover:underline">@student</span>!
          </p>
        </div>

        {/* Search and Account */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses"
              className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#93AAC7] focus:border-transparent bg-gray-50"
            />
          </div>

          {/* Account Icon */}
          <Link to="/account" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <User className="h-5 w-5 text-[#93AAC7]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
