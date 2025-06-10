
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const NewsletterStrip = () => {
  return (
    <section className="py-12 bg-scholarly-blue">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-white mr-3" />
          <h3 className="text-2xl font-bold text-white">
            Never stop learning
          </h3>
        </div>
        <p className="text-blue-100 text-lg mb-6">
          Get the latest lessons, tips, and learning resources straight to your inbox
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-bright-mustard"
          />
          <Button 
            className="bg-bright-mustard hover:bg-yellow-400 text-deep-navy font-semibold px-6 py-3 rounded-full"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterStrip;
