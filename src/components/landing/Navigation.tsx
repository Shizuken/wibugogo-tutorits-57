
import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-soft-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-deep-navy">
            LearnHub
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-graphite-gray" />
            </div>
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-scholarly-blue focus:border-transparent bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-deep-navy hover:bg-pastel-sky-blue">
              <Menu className="h-5 w-5 mr-2" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent className="w-80 bg-cream-white">
            <div className="py-6">
              <div className="space-y-4">
                <Link
                  to="/courses"
                  className="block px-4 py-3 text-deep-navy hover:bg-pastel-sky-blue rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/dashboard"
                  className="block px-4 py-3 text-deep-navy hover:bg-pastel-sky-blue rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-3 text-deep-navy hover:bg-pastel-sky-blue rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/donate"
                  className="block px-4 py-3 text-deep-navy hover:bg-pastel-sky-blue rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
