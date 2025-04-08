const Header = () => {
  return (
    <nav className="bg-[#212121] fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h5 className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Currency Converter
          </span>
        </h5>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="https://www.hakeemclarke.com/"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Portfolio Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
