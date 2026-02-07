import AppLogo from "./app-logo";

const NavBar = () => {
  return (
    <div className="w-full p-4 max-w-7xl mx-auto fixed top-4 left-0 right-0 z-10 border-gray-100 border rounded-xl shadow-lg flex justify-between items-center">
      <AppLogo showText={true} />

      <ul className="gap-7 hidden md:flex ">
        <li className="cursor-pointer text-gray-700">Home</li>
        <li className="cursor-pointer text-gray-700">About</li>
        <li className="cursor-pointer text-gray-700">Services</li>
        <li className="cursor-pointer text-gray-700">Contact</li>
      </ul>

      <button className="px-4 py-2 cursor-pointer bg-linear-to-r from-(--primary) to-(--secondary) rounded-md text-white">
        Contact Us
      </button>
    </div>
  );
};

export default NavBar;
