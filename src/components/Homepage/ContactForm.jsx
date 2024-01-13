import React from "react";

const ContactForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

 

  return (
    <div className="flex  items-center justify-center flex-col gap-4  bg-red-blob  bg-no-repeat lg:bg-left lg:bg-1400px bg-center md:bg-110 bg-500 w-full lg:w-[110%] p-10 mt-10">
      <h1 className="md:text-[30px] text-[20px] font-bold text-white">
        Leave a Message
      </h1>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col items-center  justify-center gap-3"
        action=""
      >
        <input
          className=" bg-white placeholder:text-gray-600 md:w-[300px] w-[200px] p-2 rounded-xl"
          type="text"
          name="name"
          placeholder="Your Name *"
          id="name"
        />
        <input
          className="bg-white   placeholder:text-gray-600 md:w-[300px] w-[200px] p-2 rounded-xl"
          type="email"
          name="email"
          placeholder="Your Email *"
          id="email"
        />
        <textarea
          maxlength={150}
          rows={5}
          className=" bg-white resize-none  placeholder:text-gray-600 md:w-[300px] w-[200px] p-2 rounded-xl"
          type="text"
          name="message"
          placeholder="Your Message *"
          id="message"
        />
        <input
          className="bg-white rounded-xl mt-3 hover:opacity-95 px-5 py-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactForm;
