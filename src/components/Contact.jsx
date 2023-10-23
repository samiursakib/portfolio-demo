"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

const Contact = () => {
  const initialState = {
    email: "",
    subject: "",
    message: ""
  };
  const [state, setState] = useState(initialState);
  const handleChange = (e) => setState(prev => ({...prev, [e.target.name]: e.target.value}));
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendContactForm(state);
    setState(prev => initialState);
  }
  return (
    <div className="items-center mt-12 flex gap-12 flex-col sm:flex-row">
      <div className="sm:w-1/2">
        <h1 className="text-white font-bold mb-2">Let's contact</h1>
        <p className="mb-4 text-[#ADB7BE] text-sm">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <div className="text-white flex gap-3 text-2xl">
          <Link href="https://github.com/samiursakib"><AiFillGithub /></Link>
          <Link href="https://www.linkedin.com/in/rafi-sakib-799b19228/"><AiFillLinkedin /></Link>
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-1/2">
        <form className="gap-4 flex flex-col">
          <div>
            <label className="text-sm text-white">Email</label>
            <input type="email" value={state.email} name="email" onChange={handleChange} className="outline-none w-full text-[#eee] bg-[#222] text-xs px-4 py-2 rounded-sm mt-2" placeholder="jacob@gmail.com" />
          </div>
          <div>
            <label className="text-sm text-white">Subject</label>
            <input type="text" value={state.subject} name="subject" onChange={handleChange} className="outline-none w-full text-[#eee] bg-[#222] text-xs px-4 py-2 rounded-sm mt-2" placeholder="Just saying hi" />
          </div>
          <div>
            <label className="text-sm text-white">Message</label>
            <textarea type="text" value={state.message} name="message" onChange={handleChange} className="outline-none w-full text-[#eee] bg-[#222] text-xs px-4 py-2 rounded-sm mt-2" placeholder="Let's talk about something..."></textarea>
          </div>
          <button type="submit" onClick={handleSubmit} className="w-full py-2 bg-[#eee] text-[#222] rounded-sm hover:pointer-cursor text-xs">Send</button>
         </form>
      </div>
    </div>
  );
}

export default Contact;