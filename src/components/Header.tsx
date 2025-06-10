
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Welcome to TutorITS</h1>
          <p className="text-muted-foreground">
            Welcome back, <span className="text-[#93AAC7] font-medium cursor-pointer hover:underline">@student</span>!
          </p>
        </div>

        {/* Search and Account */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search courses"
              className="w-80 pl-10 pr-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-[#93AAC7] focus:border-transparent bg-muted text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Account Icon */}
          <Link to="/account" className="p-2 rounded-full bg-muted hover:bg-accent transition-colors">
            <User className="h-5 w-5 text-[#93AAC7]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
