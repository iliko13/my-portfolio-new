"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ilikokukava13@gmail.com">
          ilikokukava13@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        target="_blank"
        onSubmit={onSubmit}
        method="Post"
        action="https://formsubmit.co/70086aaaa0af3abaa037776c910d6b42"
        className="mt-10 flex flex-col"
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          type="text"
          placeholder="NAME"
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors.name && (
          <p className="paragraphFont mt-1 select-none text-red-400">
            {errors.name.type === "required" && "This filed is required."}
            {errors.name.type === "maxLength" && "Max length is 20 character."}
          </p>
        )}

        <input
          className="h-14 px-4 rounded-lg border border-black/10 mt-3"
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="paragraphFont mt-1 select-none text-red-400">
            {errors.email.type === "required" && "This filed is required."}
            {errors.email.type === "pattern" && "Invalid email address"}
          </p>
        )}

        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          rows={4}
          cols={50}
          placeholder="MESSAGE"
          {...register("message", { required: true, maxLength: 2000 })}
        />
        {errors.message && (
          <p className="paragraphFont mt-1 select-none text-red-400">
            {errors.message.type === "required" && "This filed is required."}
            {errors.message.type === "maxLength" &&
              "Max length is 2000 character."}
          </p>
        )}

        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
          rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
