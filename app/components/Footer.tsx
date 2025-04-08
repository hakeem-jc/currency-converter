const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            HC
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a
                href="https://www.linkedin.com/in/hakeemclarke/"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hakeem-jc"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2025{" "}
          <a
            href="https://www.hakeemclarke.com/"
            className="hover:underline text-white font-semibold"
          >
            Hakeem Clarke
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
