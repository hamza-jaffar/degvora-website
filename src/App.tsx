import NavBar from "@/components/nav-bar";
import BannerSection from "@/sections/banner";
import ServiceWeOffer from "@/sections/service-we-offer";
import WayOfBuildingSoftware from "@/sections/way-of-building-software";
import OurDesignAndDevelopmentProcess from "@/sections/our-design-and-development-process";

const App = () => {
  return (
    <section className="max-w-7xl flex flex-col items-center mx-auto">
      <NavBar />
      <BannerSection />
      <ServiceWeOffer />
      <WayOfBuildingSoftware />
      <OurDesignAndDevelopmentProcess />
    </section>
  );
};

export default App;
