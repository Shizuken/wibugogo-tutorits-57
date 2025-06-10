
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, CA",
    quote: "This platform helped me master calculus in just 3 months. The interactive lessons made complex concepts so much easier to understand!",
    avatar: "👩‍💼",
    role: "Computer Science Student"
  },
  {
    name: "Marcus Rodriguez",
    location: "Austin, TX",
    quote: "As a parent, I love how engaging this is for my kids. They actually look forward to their daily math lessons!",
    avatar: "👨‍👨‍👧‍👦",
    role: "Parent & Educator"
  },
  {
    name: "Dr. Emily Watson",
    location: "Boston, MA",
    quote: "I use this platform to supplement my teaching. The quality of content and pedagogical approach is outstanding.",
    avatar: "👩‍🏫",
    role: "Mathematics Professor"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-pastel-sky-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-deep-navy mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-graphite-gray">
            See what learners and educators are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-cream-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-bright-mustard fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-graphite-gray text-center mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Profile */}
              <div className="text-center">
                <div className="text-4xl mb-3">{testimonial.avatar}</div>
                <h4 className="font-semibold text-deep-navy">{testimonial.name}</h4>
                <p className="text-scholarly-blue text-sm">{testimonial.role}</p>
                <p className="text-graphite-gray text-xs mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
