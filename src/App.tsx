import NavBar from "@/components/nav-bar";
import BannerSection from "@/sections/banner";
import ServiceWeOffer from "@/sections/service-we-offer";
import WayOfBuildingSoftware from "@/sections/way-of-building-software";

const App = () => {
  return (
    <section className="max-w-7xl flex flex-col items-center mx-auto">
      <NavBar />
      <BannerSection />
      <ServiceWeOffer />
      <WayOfBuildingSoftware />
    </section>
  );
};

export default App;
