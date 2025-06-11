const Footer = () => {
  return (
    <footer className="bg-[#0f2f64] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-6 max-w-sm">
              {/* Logo */}
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
              >
                <path
                  d="M43.3371 12.2574C41.3509 8.49728 38.3611 5.36141 34.6999 3.1982C31.0388 1.03499 26.8496 -0.0708558 22.5977 0.00351791L22.8332 13.4652C24.5961 13.4344 26.333 13.8929 27.851 14.7898C29.369 15.6867 30.6086 16.9869 31.4321 18.5459L43.3371 12.2574Z"
                  fill="#1E5DBC"
                />
                <path
                  d="M23 0C18.9892 -4.78281e-08 15.0482 1.04881 11.5679 3.04236C8.08766 5.03591 5.18921 7.90489 3.16021 11.3646C1.13121 14.8243 0.0421796 18.7544 0.00120053 22.765C-0.0397785 26.7756 0.968715 30.7272 2.9266 34.2276L14.6768 27.6554C13.8649 26.204 13.4468 24.5655 13.4638 22.9026C13.4808 21.2396 13.9323 19.61 14.7736 18.1755C15.6149 16.741 16.8167 15.5514 18.2598 14.7248C19.7028 13.8981 21.337 13.4633 23 13.4633L23 0Z"
                  fill="#4EB2F9"
                />
                <path
                  d="M2.93832 34.2485C4.82199 37.608 7.51919 40.4407 10.7824 42.4867C14.0457 44.5326 17.7705 45.7263 21.615 45.9583C25.4596 46.1902 29.3009 45.4529 32.7864 43.8141C36.272 42.1752 39.2901 39.6873 41.564 36.5786L30.7017 28.6334C29.7583 29.9231 28.5062 30.9553 27.0601 31.6352C25.6141 32.3151 24.0204 32.621 22.4254 32.5248C20.8304 32.4285 19.2851 31.9333 17.9313 31.0845C16.5774 30.2357 15.4584 29.0605 14.677 27.6667L2.93832 34.2485Z"
                  fill="#1EBCB4"
                />
              </svg>

              <p className="text-base text-[#8b98b8] leading-relaxed">
                Clinically is a health clinic that was built by Charles Xavier
                in 1993.
              </p>

              <div className="text-sm text-[#8b98b8] leading-relaxed">
                <div>1234 Main Street</div>
                <div>San Diego, CA 92101</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Clinically */}
                <div className="space-y-4">
                  <h3 className="text-lg font-graphik font-medium text-white">
                    Clinically
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                {/* Resources */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Resources</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Help Center
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Privacy
                    </a>
                  </div>
                </div>

                {/* Support */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Support</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Help
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Status
                    </a>
                  </div>
                </div>

                {/* Follow */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Follow</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-[#8b98b8] hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#536288] py-6">
          <div className="text-center text-sm text-[#8b98b8]">
            © 2023 Clinically. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
