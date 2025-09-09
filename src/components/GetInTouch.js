import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function GetInTouch() {
  return (
    <section id="contact" className="bg-green-50 py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto">
          Ready to experience the magic of Uttarakhand? Contact us for bookings
          and inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {/* Contact Details */}
        <div className="flex flex-col gap-6">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-green-700 p-3 rounded-full">
              <Phone size={32} color="white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Phone</h3>
              <p className="text-gray-700">+91 9650765002</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-green-700 p-3 rounded-full">
              <Mail size={32} color="white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Email</h3>
              <p className="text-gray-700">forestin2019@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="bg-green-700 p-3 rounded-full">
              <MapPin size={32} color="white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Location</h3>
              <p className="text-gray-700">
                Village Panwadeokhan, (Near Jim Corbett Forest ) Tehsil Salt
                Distt. Almora,Uttarakhand 263646
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.1962720259544!2d79.22608107553562!3d29.56889207516652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a0541791d9369%3A0x25f5e6e8e92fb596!2sGopi%20Homestay%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1753905875410!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border border-gray-200"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
