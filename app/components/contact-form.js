"use client";

import { sendMail } from "@/actions/mail";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/actions/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus(`Failed to send email: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="flex h-screen align-center bg-navbar justify-center m-auto">
      <form
        className="justify-center m-auto border-2 rounded-lg p-10"
        action={sendMail}
      >
        <div className="justify-center text-center text-4xl font-bold">
          {" "}
          Get in Contact!
        </div>
        <div className="m-3 mt-10">
          <label>Full Name:</label>
          <input
            type="text"
            id="name"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="relative border-2 border-black h-6 right-0 ml-2 w-2/3"
          />
        </div>
        <div className="m-3">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-black h-6 ml-11 w-2/3"
            required
          />
        </div>
        <div className="m-3">
          <label>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-2 border-black ml-4 w-auto"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-black text-white px-6 py-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
