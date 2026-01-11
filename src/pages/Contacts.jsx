import { useState, useEffect } from "react";
import { FaFacebook, FaPhone, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Robotics Club | NITP";
  }, []);

  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
    purpose: "General Inquiry",
  };
  const [formData, setFormData] = useState(initialValue);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData(initialValue);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const faqs = [
    {
      question: "How can I join the Robotics Club?",
      answer:
        "Attend our weekly meetings or contact us via the form. Membership is open to all students interested in robotics.",
    },
    {
      question: "What skills do I need to participate?",
      answer:
        "No prior experience required! We welcome beginners and provide training in hardware, software, and AI.",
    },
    {
      question: "Are there any membership fees?",
      answer:
        "No, membership is free. We only ask for your enthusiasm and commitment to learning.",
    },
    {
      question: "What projects do you work on?",
      answer:
        "We work on autonomous robots, AI applications, and participate in national and international competitions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12">
      <div className="w-full mx-auto">
        {/* Header */}
        <section className="pt-15 px-4 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with the Robotics Club. We'd love to hear from you!
          </p>
        </section>

        {/* Contact Details */}
        <section className="py-5 px-4 mb-12">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl text-pink-600 border-b-2 md:text-4xl font-bold mb-8 text-center">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
              <div className="flex items-center">
                <span className="text-4xl text-cyan-800 mr-4">
                  <MdEmail />
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">roboticsclub@nitp.ac.in</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl text-blue-400 mr-4">
                  <FaPhone />
                </span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">0612-2371715</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl text-blue-600 mr-4">
                  <MdLocationOn />
                </span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">
                    Incubation Center 3rd Floor <br /> National Institute of
                    Technology Patna <br /> Ashok Rajpath, Patna -800005
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl text-cyan-600 mr-4">
                  <IoMdTime />
                </span>
                <div>
                  <p className="font-semibold">Meeting Times</p>
                  <p className="text-gray-600">Every Saturday, 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="w-full py-16 px-4 mb-12 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl text-pink-600 border-b-2 md:text-4xl font-bold mb-8 text-center">
              Our Location
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                alt="Club Location Map"
                className="w-full h-64 object-cover rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6862.58690711107!2d85.16787810571124!3d25.621094841121028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dcc9444eb3%3A0xec52b6c29c14db88!2s00%2C%20Patna%20University%20Campus%2C%20Patna%2C%20Bihar%20800005!5e0!3m2!1sen!2sin!4v1767721403168!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-14 px-4 mb-12">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl text-pink-600 border-b-2 md:text-4xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
            {submitted ? (
              <div className="bg-green-500/80 hover:bg-green-400 shadow-md text-black p-4 font-semibold rounded-md mb-4 transition duration-200">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block text-black text-sm font-medium mb-2 ml-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-600/50 rounded-md text-black font-semibold placeholder-stone-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-black text-sm font-medium mb-2 ml-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-600/50 rounded-md text-black font-semibold placeholder-stone-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="purpose"
                    className="block text-black text-sm font-medium mb-2 ml-2"
                  >
                    Purpose
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-600/50 rounded-md text-black font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  >
                    <option className="text-black">General Inquiry</option>
                    <option className="text-black">Join Club</option>
                    <option className="text-black">Event Question</option>
                    <option className="text-black">Collaboration</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-black text-sm font-medium mb-2 ml-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-600/50 rounded-md text-black font-semibold placeholder-stone-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-black text-sm font-medium mb-2 ml-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your Queries in your words."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-600/50 rounded-md text-black font-semibold placeholder-stone-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-500/80 hover:bg-green-500 text-white py-2 px-8 rounded-md hover:cursor-pointer transition duration-200 text-lg mx-auto block"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 px-4 mb-5 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl text-pink-500 md:text-4xl border-b-2 font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-600 pb-4 last:border-b-0"
                >
                  <h3 className="text-xl text-black font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 text-center">
            <h2 className="text-3xl text-pink-500 border-b-2 md:text-4xl font-bold mb-8">
              Follow Us
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://facebook.com/robonitp"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                <span className="text-4xl">
                  <FaFacebook />
                </span>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@roboticsclubnitp8637"
                className="text-rose-600 hover:text-rose-700 transition-colors"
              >
                <span className="text-4xl">
                  <FaYoutube />
                </span>
                <span className="sr-only">Youtube</span>
              </a>
              <a
                href="https://www.instagram.com/robotics_club_nitp/"
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                <span className="text-4xl">
                  <IoLogoInstagram />
                </span>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/robotics-club-nit-patna/"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                <span className="text-4xl">
                  <IoLogoLinkedin />
                </span>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
