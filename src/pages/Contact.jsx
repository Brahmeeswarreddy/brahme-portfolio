import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("This field is required"),
});

export default function Contact() {
  const [status, setStatus] = useState("");

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("sending");
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);
        formData.append("_subject", `New Portfolio Message from ${values.name}`);
        formData.append("_template", "table");
        formData.append("_honey", "");
        formData.append("_captcha", "false");

        const response = await fetch("https://formsubmit.co/ajax/brahmeswarreddy645@gmail.com", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setStatus("success");
          resetForm();
        } else {
          try {
            const errorData = await response.json();
            console.error("Form response error:", errorData);
          } catch (e) { }
          setStatus("error");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setStatus("error");
      }
    },
  });

  const fieldError = (field) =>
    formik.touched[field] && formik.errors[field] ? formik.errors[field] : null;

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row md:justify-center items-center gap-10"
    >
      <ParticlesBackground />
      <div className="relative z-10 w-full flex flex-col md:flex-row md:justify-center items-center gap-10">
        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

          <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-3 rounded-md bg-white/10 border ${fieldError("name") ? "border-red-500" : "border-gray-500"
                  } text-white focus:outline-none focus:border-[#692097] transition-colors`}
              />
              <div className="h-5">
                {fieldError("name") && (
                  <p className="text-red-500 text-xs">{fieldError("name")}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">
                Your Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-3 rounded-md bg-white/10 border ${fieldError("email") ? "border-red-500" : "border-gray-500"
                  } text-white focus:outline-none focus:border-[#692097] transition-colors`}
              />
              <div className="h-5">
                {fieldError("email") && (
                  <p className="text-red-500 text-xs">{fieldError("email")}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">
                Your Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={4}
                className={`bg-white/10 border ${fieldError("message") ? "border-red-500" : "border-white/20"
                  } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#692097]/50 transition-colors resize-none`}
              />
              <div className="h-5">
                {fieldError("message") && (
                  <p className="text-red-500 text-xs">{fieldError("message")}</p>
                )}
              </div>
            </div>

            <div className="h-6">
              {status && (
                <p
                  className={`text-sm ${status === "success"
                    ? "text-green-400"
                    : status === "error"
                      ? "text-red-400"
                      : "text-yellow-400"
                    }`}
                >
                  {status === "sending"
                    ? "Sending message..."
                    : status === "success"
                      ? "Message sent successfully!"
                      : "Something went wrong. Please check your email."}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending" || formik.isSubmitting}
              className="py-3 mt-2 rounded-full font-semibold text-white
                         bg-gradient-to-r from-[#302b63] via-[#37053c] to-[#692097]
                         shadow-lg disabled:opacity-60 transition-all duration-300
                         hover:brightness-125 active:brightness-90"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
