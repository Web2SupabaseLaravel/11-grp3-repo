import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-white">
      {/* Background Pattern */}
      <div className="absolute left-0 top-32 w-52 h-52 opacity-20">
        <svg
          width="201"
          height="201"
          viewBox="0 0 1440 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M1329.96 186.386V130.943H1385.33C1385.33 161.587 1360.56 186.386 1329.96 186.386Z"
            fill="#1EBCB4"
          />
          <path
            d="M1440.4 131.309H1384.96V75.9429C1415.61 75.9429 1440.4 100.707 1440.4 131.309Z"
            fill="#A27FFF"
          />
          <path
            d="M111.245 111.943C86.844 111.943 66.9616 131.853 66.9616 156.288C66.9616 180.723 86.844 200.633 111.245 200.633L111.245 111.943Z"
            fill="#1EBCB4"
          />
          <path
            d="M-0.000353813 -3.31998e-05L-0.000353813 110.709L110.555 110.709C110.555 49.5976 61.0263 -3.31998e-05 -0.000353813 -3.31998e-05Z"
            fill="#FFB201"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-[40px] font-graphik font-normal text-[#0f2f64] leading-tight">
            We are an international clinic with over 25 years of experience in
            treating patients
          </h2>

          <p className="text-base text-[#536288] leading-relaxed max-w-2xl mx-auto">
            Clinically is a health clinic that was built by Charles Xavier in
            1993. This clinic was originally only operating in Pasadena,
            California. And now Clinically has over 25,000 branches around the
            world.
          </p>

          <div className="pt-4">
            <Button
              variant="outline"
              className="border-[#1e5dbc] text-[#1e5dbc] hover:bg-[#1e5dbc] hover:text-white font-graphik font-bold px-8 py-3"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
