const Header = () => {
  return (
    <nav className="bg-[#212121] fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h5 className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Currency Converter
          </span>
        </h5>

        <div className="items-center justify-between flex w-auto order-1">
          <a
            href="https://www.hakeemclarke.com/"
            className="block py-2 px-3 text-white bg-blue-600 rounded-sm"
            aria-current="page"
          >
            More From Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
