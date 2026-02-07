const BannerSection = () => {
  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto relative overflow-hidden"
    >
      <section className="w-full flex flex-col md:flex-row px-3 sm:px-8 lg:px-12 xl:px-22 items-center mt-35">
        <div className="space-y-6 lg:space-y-12">
          <h1 className="text-gray-900 text-3xl lg:text-5xl">
            Great{" "}
            <span className="font-bold bg-linear-to-r from-(--primary-light) to-(--secondary-light) bg-clip-text text-transparent">
              Product
            </span>{" "}
            is <br className="hidden md:block" />
            <span className="font-bold">built with great </span>
            <span className="font-bold bg-linear-to-r from-(--secondary-light) to-(--primary-light) bg-clip-text text-transparent">
              Teams
            </span>
          </h1>
          <p className="text-gray-700 text-lg">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <button className="bg-linear-to-r from-(--primary) to-(--secondary) hover:scale-105 transition-transform px-6 py-3 cursor-pointer rounded-md text-white">
            Let's Get Started
          </button>
        </div>
        <div>
          <img src="/assets/banner_image.png" alt="" />
        </div>
      </section>
      <div className="h-18 w-18 rounded-full -bottom-9 left-128 bg-linear-to-b from-(--secondary-light) to-(--primary-light) absolute" />
    </section>
  );
};

export default BannerSection;
