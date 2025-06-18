import React from 'react';
import { Fade } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '../elements/Form';
import Button from '../elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;

  const submitEmail = () => {
    const {
      name, email, phone, subject, message,
    } = data;

    const templateParams = {
      from_name: `${name} ( ${phone} - ${email} )`,
      to_name: 'HomoDeal',
      phone,
      email,
      subject,
      message,
    };

    if (
      name !== ''
      && email !== ''
      && phone !== ''
      && subject !== ''
      && message !== ''
    ) {
      emailjs.send(
        'service_jfgt2im',
        'template_3hnq58s',
        templateParams,
        'ouA_MV2ARBtDtN0I0',
      ).then(() => {
        toast.success('✅ Inquiry sent successfully!');
        resetForm();
      }, (error) => {
        toast.error(error.text || '❌ Something went wrong.');
      });
    } else {
      toast.error('⚠️ Please fill out all fields.');
    }
  };

  return (
    <section className="min-h-screen bg-[#0f172a] px-4 py-12 flex flex-col justify-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-4xl sm:text-5xl text-white font-extrabold text-center mb-4 transition-all duration-300 hover:text-theme-purple">
          Interested in a Property?
        </h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="text-lg text-gray-300 font-light text-center mb-10 sm:mb-12 transition-all duration-300 hover:text-white">
          Please fill the form below and we'll reach out to you regarding your query.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col gap-y-4 max-w-4xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row gap-4">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              onChange={actions.onChange}
            />
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email"
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              onChange={actions.onChange}
            />
            <Form
              id="subject"
              name="subject"
              type="text"
              value={data.subject}
              placeholder="Subject"
              onChange={actions.onChange}
            />
          </div>

          <Form
            id="message"
            name="message"
            type="textarea"
            value={data.message}
            placeholder="Write your message"
            onChange={actions.onChange}
          />

          <Button
              className="text-xl mx-auto px-10 py-3 mt-4 bg-blue-600 text-white rounded-full border border-blue-600 transition-all duration-300 hover:bg-green-500 hover:border-green-600 hover:scale-105 shadow-md hover:shadow-green-300 focus:outline-none"
              type="button"
              onClick={submitEmail}
            >
              Send Inquiry
            </Button>
        </div>
      </Fade>

      <ToastContainer
      position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored" 
      className="z-50 fixed mt-20 "
      />
    </section>
  );
};
