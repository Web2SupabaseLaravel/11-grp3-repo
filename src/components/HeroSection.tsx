import { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <section className="relative min-h-screen lg:min-h-[863px] bg-white overflow-hidden">
      {/* Background Shape */}
      <div className="absolute left-0 top-0 w-full max-w-[1038px] h-[400px] lg:h-[733px] bg-[#f5f9fe] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 lg:pt-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-6xl xl:text-[80px] font-graphik font-bold text-[#1e5dbc] leading-[0.96]">
                  The Next Generation
                </h1>
                <h2 className="text-2xl lg:text-3xl xl:text-[40px] font-graphik font-normal text-[#4eb2f9] leading-[1.2]">
                  Of Clinic & Family Care
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-[#536288] leading-relaxed max-w-md">
                Our clinic lets you visit exceptional medical providers, get
                clinically-backed wellness services, and discover the right
                medicine, all in one place.
              </p>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="w-full h-[400px] lg:h-[697px] bg-gray-300 rounded-lg flex items-center justify-center">
                <svg
                  width="781"
                  height="697"
                  viewBox="0 0 781 697"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-cover"
                >
                  <path
                    d="M93.75 250C93.75 271.931 98.0696 293.647 106.462 313.908C114.855 334.17 127.156 352.579 142.663 368.087C158.171 383.594 176.581 395.895 196.842 404.288C217.103 412.68 238.819 417 260.75 417L260.75 301.255C254.019 301.255 247.354 299.93 241.135 297.354C234.917 294.778 229.266 291.003 224.507 286.243C219.747 281.484 215.972 275.833 213.396 269.615C210.82 263.396 209.495 256.731 209.495 250L93.75 250Z"
                    fill="#1E5DBC"
                  />
                  <path
                    d="M93.75 370.552C109.736 370.552 125.067 364.201 136.371 352.897C147.675 341.593 154.026 326.262 154.026 310.276C154.026 294.29 147.675 278.958 136.371 267.654C125.068 256.35 109.736 250 93.75 250L93.75 310.276V370.552Z"
                    fill="#FFB201"
                  />
                  <path
                    d="M185.75 82.9999C163.819 82.9999 142.103 87.3195 121.842 95.7121C101.58 104.105 83.1705 116.406 67.6632 131.913C52.1558 147.421 39.8546 165.83 31.4621 186.092C23.0696 206.353 18.75 228.069 18.75 250L93.361 250C93.361 237.867 95.7507 225.853 100.394 214.644C105.037 203.435 111.842 193.25 120.421 184.671C129 176.092 139.185 169.287 150.394 164.644C161.603 160.001 173.617 157.611 185.75 157.611L185.75 82.9999Z"
                    fill="#A27FFF"
                  />
                  <path
                    d="M0.75 181.552C16.7361 181.552 32.0675 175.201 43.3714 163.897C54.6753 152.593 61.0257 137.262 61.0258 121.276C61.0258 105.29 54.6753 89.9583 43.3714 78.6544C32.0675 67.3505 16.7361 61 0.750014 61L0.75 121.276L0.75 181.552Z"
                    fill="#1EBCB4"
                  />
                  <rect
                    x="186"
                    width="596"
                    height="697"
                    rx="2"
                    fill="#D7D7D7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="mt-16 lg:mt-8">
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 mx-auto max-w-6xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-end">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Select
                    value={selectedService}
                    onValueChange={setSelectedService}
                  >
                    <SelectTrigger className="border-0 bg-transparent">
                      <div className="text-left">
                        <div className="text-[#8b98b8] text-sm">
                          Select Service
                        </div>
                        <SelectValue
                          placeholder="Dental Care"
                          className="text-[#0f2f64] text-lg"
                        />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dental">Dental Care</SelectItem>
                      <SelectItem value="primary">Primary Care</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="hidden lg:block w-px h-16 bg-[#E1E3E8]" />

                {/* Location Selection */}
                <div className="space-y-2">
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger className="border-0 bg-transparent">
                      <div className="text-left">
                        <div className="text-[#8b98b8] text-sm">
                          Select Location
                        </div>
                        <SelectValue
                          placeholder="San Diego"
                          className="text-[#0f2f64] text-lg"
                        />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="san-diego">San Diego</SelectItem>
                      <SelectItem value="sacramento">Sacramento</SelectItem>
                      <SelectItem value="chico">Chico</SelectItem>
                      <SelectItem value="santa-clara">Santa Clara</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="hidden lg:block w-px h-16 bg-[#E1E3E8]" />

                {/* Date Selection */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-6">
                    <div>
                      <div className="text-[#8b98b8] text-sm">Select Date</div>
                      <div className="text-[#0f2f64] text-lg">23/12/2021</div>
                    </div>
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00407 2.96667V0.833333C4.00407 0.366667 4.37074 0 4.8374 0C5.30407 0 5.67074 0.366667 5.67074 0.833333V2.96667C5.67074 3.43334 5.30407 3.80001 4.8374 3.80001C4.37074 3.80001 4.00407 3.43334 4.00407 2.96667ZM11.1707 3.80001C11.6374 3.80001 12.0041 3.43334 12.0041 2.96667V0.833333C12.0041 0.366667 11.6374 0 11.1707 0C10.7041 0 10.3374 0.366667 10.3374 0.833333V2.96667C10.3374 3.43334 10.7041 3.80001 11.1707 3.80001ZM15.6707 1.89998V13.1667C15.6707 13.5333 15.3707 13.8333 15.0041 13.8333H1.00407C0.637402 13.8333 0.337402 13.5333 0.337402 13.1667V1.89998C0.337402 1.53332 0.637402 1.16667 1.00407 1.16667H2.55408C2.92074 1.16667 3.22074 1.46667 3.22074 1.83333C3.22074 2.2 2.92074 2.5 2.55408 2.5H1.65407V5.33333H14.3207V2.5H13.4374C13.0707 2.5 12.7707 2.2 12.7707 1.83333C12.7707 1.46667 13.0707 1.16667 13.4374 1.16667H14.9874C15.3707 1.16667 15.6707 1.53332 15.6707 1.89998ZM14.3374 12.5V6.5H1.67074V12.5H14.3374ZM6.95406 2.5H9.05408C9.42074 2.5 9.72074 2.2 9.72074 1.83333C9.72074 1.46667 9.42074 1.16667 9.05408 1.16667H6.95406C6.58739 1.16667 6.28739 1.46667 6.28739 1.83333C6.28739 2.2 6.58739 2.5 6.95406 2.5Z"
                        fill="#1E5DBC"
                      />
                    </svg>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <Button className="w-full bg-[#1e5dbc] hover:bg-[#1e5dbc]/90 text-white font-graphik font-bold px-8 py-6 text-lg">
                    Make An Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <span className="text-[#0f2f64] text-xl">Partnered With</span>
            <div className="flex items-center space-x-8">
              <img
                src="/api/placeholder/120/34"
                alt="WHO Logo"
                className="h-8 opacity-60"
              />
              <img
                src="/api/placeholder/175/28"
                alt="Healthline Media Logo"
                className="h-7 opacity-60"
              />
              <img
                src="/api/placeholder/175/28"
                alt="Healthgrades Logo"
                className="h-7 opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
