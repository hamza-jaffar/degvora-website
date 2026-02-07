import NavBar from "@/components/nav-bar";
import BannerSection from "@/sections/banner";
import ServiceWeOffer from "@/sections/service-we-offer";
import WayOfBuildingSoftware from "@/sections/way-of-building-software";
import OurDesignAndDevelopmentProcess from "@/sections/our-design-and-development-process";
import DevelopmentThroughAlcaline from "@/sections/development-through-alcaline";

const App = () => {
  return (
    <section className="flex flex-col items-center mx-auto">
      <NavBar />
      <BannerSection />
      <section className="w-full bg-gray-100">
        <ServiceWeOffer />
      </section>
      <WayOfBuildingSoftware />
      <section className="w-full bg-gray-100">
        <OurDesignAndDevelopmentProcess />
      </section>
      <DevelopmentThroughAlcaline />
    </section>
  );
};

export default App;
