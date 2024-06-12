import contactHero from "../images/contact-us-page.svg";

const ContatUsPage = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img className="mt-20 w-full" src={contactHero} alt="hero section" />
        <div className="absolute inset-0 z-10 bg-linear2 opacity-75"></div>
        <div className="absolute inset-0 z-20">
          <div className="zmy-5 pt-12 text-center text-white">
            <h1 className="text-center text-font32 font-bold lg:text-font40">
              Contact Us
            </h1>
            <p className="py-2 text-font20 font-normal">
              Get in Touch with Our Team
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

function ContactForm() {
  return (
    <form className="max mx-auto mb-10 mt-6 max-w-[908px] p-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="my-3">
          <label className="mb-1 block text-font20 text-midBlack">
            First Name
          </label>
          <input
            className="w-full rounded-lg border px-2 py-4 text-font24"
            type="text "
            placeholder="First Name"
            required
          />
        </div>
        <div className="block w-full md:ml-8 md:mt-3">
          <label className="mb-1 block text-font20 text-midBlack">
            Last Name
          </label>
          <input
            className="w-full rounded-lg border px-2 py-4 text-font24"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div className="my-3">
        <label className="mb-1 block text-font20 text-midBlack">
          Email Address
        </label>
        <input
          className="w-full rounded-lg border px-2 py-4 text-font24"
          type="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="my-7">
        <label className="mb-1 block text-font20 text-midBlack">Message</label>
        <textarea
          className="w-full rounded-lg border px-2 py-4 text-font24"
          placeholder="Message"
          rows={11}
          cols={30}
          required
        />
      </div>
      <button
        type="submit"
        className="duration-400 h-heroBtnH w-heroBtnW whitespace-nowrap rounded-lg bg-navBtn text-font20 font-medium text-white transition-all ease-in-out hover:bg-btnHover"
      >
        Submit
      </button>
    </form>
  );
}

export default ContatUsPage;
