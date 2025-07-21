import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#e6e6e6] text-gray-800 w-full">
      {/* Main Grid Area */}
      <div className="w-full px-25 py-10 grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-40">
        {/* Logo and App Links */}
        <div>
          <img
            src="public/assests/logo2.svg"
            alt="Logo"
            className="h-10 mb-4"
          />
          <div className="flex gap-3 mb-4">
            <a href="https://apps.apple.com/in/app/order-uk/id6445226626">
              <img
                src="public/assests/applelogo.png"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.orderuk">
              <img
                src="public/assests/andlogo.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
          </div>
          <p className="text-sm">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>

        {/* Email Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Get Exclusive Deals in your Inbox
          </h2>
          <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="flex-grow ml-2 py-3 text-sm text-gray-700 outline-none bg-transparent"
            />
            <button className="bg-[#FC8A06] rounded-full w-[200px] text-white px-2 py-3 text-sm font-semibold hover:bg-[#e67802] transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            we won't spam, read our{" "}
            <a href="#" className="underline">
              email policy
            </a>
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-600">
           <img src="public/assests/Facebook.svg" alt="" />
           <img src="public/assests/Instagram.svg" alt="" />
           <img src="public/assests/TikTok.svg" alt="" />
           <img src="public/assests/Snapchat.svg" alt="" />

          </div>
        </div>

        {/* Legal Pages */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Legal Pages</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Modern Slavery Statement
              </a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Important Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Get help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Add your restaurant
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sign up to deliver
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Create a business account
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0d0f1d] text-white text-sm py-4 px-20 flex flex-col md:flex-row justify-between items-center mt-6">
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </footer>
  );
}
