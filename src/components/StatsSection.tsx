import { Button } from "./ui/button";

const StatsSection = () => {
  return (
    <section className="py-20 bg-[#fbfdff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Main Stats */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="space-y-2">
              <div className="text-5xl lg:text-[48px] font-graphik font-bold text-[#1e5dbc] leading-tight">
                25+
              </div>
              <div className="text-xl font-graphik font-medium text-[#0f2f64] leading-tight">
                Experience
              </div>
              <p className="text-base text-[#536288] leading-relaxed">
                years of experience in the medical field
              </p>
            </div>

            {/* Service Available */}
            <div className="space-y-2">
              <div className="text-5xl lg:text-[48px] font-graphik font-bold text-[#1e5dbc] leading-tight">
                24/7
              </div>
              <div className="text-xl font-graphik font-medium text-[#0f2f64] leading-tight">
                Service Available
              </div>
              <p className="text-base text-[#536288] leading-relaxed">
                round the clock 24/7 we are ready to serve you
              </p>
            </div>

            {/* Fast Process */}
            <div className="space-y-2">
              <div className="text-2xl lg:text-[48px] font-bold text-[#1e5dbc] leading-tight">
                Fast process, best results
              </div>
              <p className="text-base text-[#536288] leading-relaxed">
                we guarantee you will get the best results in a short time
              </p>
            </div>

            {/* Professional Team */}
            <div className="space-y-2">
              <div className="text-2xl lg:text-[48px] font-bold text-[#1e5dbc] leading-tight">
                Professional Medical Team
              </div>
              <p className="text-base text-[#536288] leading-relaxed">
                we have a professional medical team that is experienced and
                certified
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Section Title */}
            <h2 className="text-2xl lg:text-[32px] font-graphik font-normal text-[#0f2f64] leading-tight">
              Here's what makes us different from conventional clinics
            </h2>

            {/* Additional Stats */}
            <div className="flex space-x-10">
              <div className="space-y-2">
                <div className="text-5xl lg:text-[48px] font-bold text-[#1e5dbc] leading-tight">
                  3000+
                </div>
                <p className="text-base text-[#536288] leading-relaxed">
                  Happy Patients
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl lg:text-[48px] font-bold text-[#1e5dbc] leading-tight">
                  200K
                </div>
                <p className="text-base text-[#536288] leading-relaxed">
                  Successful Surgery
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-[#1e5dbc] hover:bg-[#1e5dbc]/90 text-white font-graphik font-bold px-8 py-6 text-base">
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
