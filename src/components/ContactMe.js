import React, { useRef, useState } from "react";
import AnimatedPage from "./AnimatedPage";
import axios from "axios";

const ContactMe = () => {
  const formId = "czjQ2orC";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };
  const postSubmission = async () => {
    const payload = {
      ...formState,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "bg-green-500",
        text: "Thanks, I will be in touch shortly.",
      });
      setFormState(initialFormState);
    } catch (error) {
      console.log(error);
      setMessage({
        class: "bg-red-500",
        text: "Sorry, there was a problem. Please try again or contact support.",
      });
    }
  };

  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const key = id;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  return (
    <AnimatedPage>
      <div className="h-full w-full flex justify-center flex-col  ml-72">
        <div className=" m-auto p-8 shadow-lg justify-center">
          <h1 className="text-5xl font-bold flex items-center justify-center">
            <span>Contact me</span>
          </h1>
          {message && (
            <div className={`my-4 text-white w-full p-4 ${message.class}`}>
              {message.text}
            </div>
          )}
          <form onSubmit={submitForm} className="flex flex-col">
            <div className="my-2 flex flex-col ">
              <input
                placeholder="Name"
                onChange={updateFormControl}
                className="border-2 p-2 rounded-sm  text-2xl"
                type="text"
                id="name"
                value={formState?.name}
                required
              />
            </div>
            <div className="my-2 flex flex-col">
              <input
                placeholder="E-mail"
                onChange={updateFormControl}
                className="border-2 p-2 rounded-sm text-2xl"
                type="email"
                id="email"
                value={formState?.email}
                required
              />
            </div>
            <div className="my-2 flex flex-col">
              <textarea
                placeholder="Message"
                onChange={updateFormControl}
                className="border-2 p-2 rounded-sm text-2xl"
                id="message"
                value={formState?.message}
                required
              ></textarea>
            </div>

            <button
              disabled={submitting}
              className="mt-4 my-2 bg-blue-400 text-white w-full p-2 hover:bg-blue-600 transition-colors duration-200 rounded-sm  text-2xl"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ContactMe;
