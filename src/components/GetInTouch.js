import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function GetInTouch() {
  return (
    <section className="bg-green-50 py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Ready to experience the magic of Uttarakhand? Contact us for bookings
          and inquiries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <Phone
              size={50}
              marginRight={10}
              color="white"
              className="rounded-full p-3 bg-green-700"
            />
            <div>
              <h1 className="text-black font-bold text-lg">Phone</h1>
              <p className="text-gray-700">+91 9650765002</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail
              size={50}
              marginRight={10}
              color="white"
              className="rounded-full p-3 bg-green-700"
            />
            <div>
              <h1 className="text-black font-bold text-lg">Email</h1>
              <p className="text-gray-700">navalkhulbe@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin
              size={50}
              marginRight={10}
              color="white"
              className="rounded-full p-3 bg-green-700"
            />
            <div>
              <h1 className="text-black font-bold text-lg">Location</h1>
              <p className="text-gray-700">
                Bhikyasan-Ramnagar Rd, Ghate Section, Uttarakhand 263646
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 h-75 w-full rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.1962720259544!2d79.22608107553562!3d29.56889207516652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a0541791d9369%3A0x25f5e6e8e92fb596!2sGopi%20Homestay%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1753905875410!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 1 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border border-gray-800"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
