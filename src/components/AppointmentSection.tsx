const AppointmentSection = () => {
  const steps = [
    {
      number: "1",
      title: "Find Clinic",
      description:
        "search for the clinic according to the closest location by entering the location menu",
      iconColor: "#FFB201",
    },
    {
      number: "2",
      title: "Make an Appointment",
      description:
        "select the available schedule according to your needs and make an appointment with the doctor",
      iconColor: "#A27FFF",
    },
    {
      number: "3",
      title: "Get the Schedule",
      description:
        "you will get a notification and schedule that you can access offline without needing an internet connection",
      iconColor: "#1EBCB4",
    },
  ];

  return (
    <section className="relative py-20 bg-[#f5f9fe]">
      {/* Background Patterns */}
      <div className="absolute left-0 top-0 w-48 h-32 opacity-30">
        <svg
          width="180"
          height="116"
          viewBox="0 0 180 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M146.024 82.0244C167.779 60.2702 180 30.7651 180 0L64 1.1722e-05L64 116C94.7651 116 124.27 103.779 146.024 82.0244Z"
            fill="#A27FFF"
          />
          <path
            d="M64.75 116C64.75 151.899 35.6485 181 -0.25 181C-36.1485 181 -65.25 151.899 -65.25 116C-65.25 80.1015 -36.1485 51 -0.25 51C35.6485 51 64.75 80.1015 64.75 116Z"
            fill="#1EBCB4"
          />
        </svg>
      </div>

      <div className="absolute right-0 bottom-0 w-32 h-32 opacity-30">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M56.68 65.4309C41.68 50.4289 21.32 42 0.25 42L0.25 122L80.25 122C80.25 100.783 71.82 80.4339 56.68 65.4309Z"
            fill="#FFB201"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-15">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-[40px] font-graphik font-normal text-[#0f2f64] leading-tight">
              How to make an appointment?
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-sm p-6 sm:p-12 min-h-[250px] sm:h-[300px] shadow-sm"
              >
                {/* Large Number Background */}
                <div
                  className="absolute right-5 top-[-29px] text-[254px] font-bold leading-[160%] z-10"
                  style={{
                    color: "rgba(60, 80, 224, 0.03)",
                    fontFamily: "Overpass, sans-serif",
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-20 space-y-4">
                  {/* Icon */}
                  <div className="relative w-14 h-14">
                    <div
                      className="w-14 h-14 rounded-full opacity-30"
                      style={{ backgroundColor: step.iconColor }}
                    />
                    <div className="absolute top-3 left-3 w-8 h-8">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="11.3208"
                          cy="11.3334"
                          rx="9.99516"
                          ry="10"
                          stroke={step.iconColor}
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-graphik font-normal text-[#0f2f64] leading-tight max-w-[278px]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-[#536288] leading-relaxed max-w-[278px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
