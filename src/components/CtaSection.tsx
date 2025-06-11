import { Button } from "./ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#1e5dbc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-[40px] font-graphik font-normal text-white leading-tight">
            We care whenever you need it
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              className="bg-white text-[#1e5dbc] hover:bg-gray-100 font-graphik font-bold px-8 py-6 text-base"
            >
              Book Appointment
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-[#1e5dbc] hover:bg-gray-100 font-graphik font-bold px-8 py-6 text-base"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
