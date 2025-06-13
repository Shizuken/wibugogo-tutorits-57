
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, Search, Users, BookOpen, Settings, User, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Explore", href: "/explore", icon: Search },
    { name: "Tutors", href: "/tutors", icon: Users },
    { name: "Courses", href: "/courses", icon: BookOpen },
  ];

  const settings = [
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "myITS Account", href: "/account", icon: User },
  ];

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Logo and Toggle */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8fbf4b8f-dae2-4be5-9636-f2a52317c170.png" 
              alt="TutorITS Logo" 
              className="h-12 w-auto"
            />
          </div>
        )}
        {isCollapsed && (
          <div className="flex justify-center w-full">
            <img 
              src="/lovable-uploads/8fbf4b8f-dae2-4be5-9636-f2a52317c170.png" 
              alt="TutorITS Logo" 
              className="h-12 w-auto"
            />
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md hover:bg-gray-100 text-[#93AAC7]"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-[#93AAC7] hover:bg-gray-50 transition-colors",
                isActive && "bg-blue-50 text-blue-600 font-medium"
              )
            }
          >
            <item.icon size={20} />
            {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}

        {/* Settings Section */}
        <div className="pt-6">
          <h3 className={cn(
            "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2",
            isCollapsed && "text-center"
          )}>
            {isCollapsed ? "•" : "Settings"}
          </h3>
          {settings.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-[#93AAC7] hover:bg-gray-50 transition-colors",
                  isActive && "bg-blue-50 text-blue-600 font-medium"
                )
              }
            >
              <item.icon size={20} />
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Help Section */}
      <div className="p-4 border-t border-gray-200">
        <div className={cn(
          "bg-gray-50 rounded-lg p-4",
          isCollapsed && "p-2"
        )}>
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 bg-[#93AAC7] rounded-full flex items-center justify-center">
              <HelpCircle size={16} className="text-white" />
            </div>
          </div>
          {!isCollapsed && (
            <>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">NEED HELP?</h4>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                In case need to report problems about meeting, courses, or ratings. Provided by the help center.
              </p>
              <button className="w-full bg-[#93AAC7] text-white px-3 py-2 rounded-md text-sm hover:bg-[#7a94b8] transition-colors">
                Go to Help Center
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
