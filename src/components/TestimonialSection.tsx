import { Play } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Testimonial */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-[48px] font-graphik font-bold text-[#1e5dbc] leading-tight">
              96% our patients satisfied with our services
            </h2>

            <div className="space-y-6">
              {/* Quote Mark */}
              <div className="text-[80px] font-bold text-[#4eb2f9] leading-[0.8]">
                "
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-[#536288] leading-relaxed">
                I have been using Clinically for over 2 years and I am very
                satisfied with the service. The doctors are very professional
                and the staff is very friendly. I highly recommend Clinically to
                anyone looking for quality healthcare.
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <div className="text-lg font-graphik font-medium text-[#0f2f64] leading-tight">
                  John Doe
                </div>
                <div className="text-sm text-[#8b98b8] leading-relaxed">
                  Patient
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Player */}
          <div className="relative">
            <div className="w-full h-[400px] bg-[#d7d7d7] rounded-lg flex items-center justify-center">
              <button
                className="w-20 h-20 bg-[#1e5dbc] rounded-full flex items-center justify-center text-white hover:bg-[#1e5dbc]/90 transition-colors"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
