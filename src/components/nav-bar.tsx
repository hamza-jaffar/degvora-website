import AppLogo from "./app-logo";

const NavBar = () => {
  return (
    <div className="w-full p-4 rounded-md shadow-lg flex justify-between items-center">
      <AppLogo showText={true} />

      <ul className="flex gap-5">
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
