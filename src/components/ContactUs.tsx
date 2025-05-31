import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    setSubmissionStatus(null);
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (validateForm()) {
      setIsSubmitting(true);
      console.log("Form data submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        setSubmissionStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmissionStatus({
          type: "error",
          message:
            "Sorry, there was an error sending your message. Please try again later.",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmissionStatus({
        type: "error",
        message: "Please correct the errors in the form.",
      });
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4"
            variants={formItemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10"
            variants={formItemVariants}
          >
            Have a project in mind or just want to say hi? We'd love to hear
            from you.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-700 p-8 sm:p-10 rounded-xl shadow-2xl"
            variants={formItemVariants}
            noValidate
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`block w-full px-4 py-3 rounded-md shadow-sm border ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-brand-blue dark:focus:ring-brand-accent-glow focus:border-brand-blue dark:focus:border-brand-accent-glow"
                } dark:bg-gray-800 dark:text-white transition-shadow duration-200`}
                placeholder="Your Name"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`block w-full px-4 py-3 rounded-md shadow-sm border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-brand-blue dark:focus:ring-brand-accent-glow focus:border-brand-blue dark:focus:border-brand-accent-glow"
                } dark:bg-gray-800 dark:text-white transition-shadow duration-200`}
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-brand-blue dark:focus:ring-brand-accent-glow focus:border-brand-blue dark:focus:border-brand-accent-glow transition-shadow duration-200"
                placeholder="What can we help you with?"
                disabled={isSubmitting}
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`block w-full px-4 py-3 rounded-md shadow-sm border ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-brand-blue dark:focus:ring-brand-accent-glow focus:border-brand-blue dark:focus:border-brand-accent-glow"
                } dark:bg-gray-800 dark:text-white transition-shadow duration-200`}
                placeholder="Your message..."
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submission Status Message */}
            {submissionStatus && (
              <div
                className={`p-3 rounded-md text-sm ${
                  submissionStatus.type === "success"
                    ? "bg-green-50 dark:bg-green-700 text-green-700 dark:text-green-200"
                    : "bg-red-50 dark:bg-red-700 text-red-700 dark:text-red-200"
                }`}
                role={submissionStatus.type === "error" ? "alert" : "status"}
              >
                {submissionStatus.message}
              </div>
            )}

            {/* Submit Button with Shine Effect */}
            <div className="relative w-full group">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative overflow-hidden w-full flex justify-center items-center py-3 px-4 rounded-md shadow-lg text-lg font-medium text-white
                           bg-[#0052CC] hover:bg-[#0041A3] 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-[#34D399]
                           transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95
                           ${
                             isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                           }
                           shadow-[0_0_8px_0px_rgba(52,211,153,0.4)] hover:shadow-[0_0_15px_2px_rgba(52,211,153,0.6)]`}
              >
                <span
                  className="absolute top-0 left-0 w-full h-full transform -translate-x-full skew-x-[-20deg]
                             bg-gradient-to-r from-transparent via-white/60 to-transparent
                             group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"
                ></span>
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </span>
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
