import NavBar from "@/components/nav-bar";
import BannerSection from "@/sections/banner";
import ServiceWeOffer from "@/sections/service-we-offer";

const App = () => {
  return (
    <section className="max-w-7xl flex flex-col items-center mx-auto">
      <NavBar />
      <BannerSection />
      <ServiceWeOffer />
    </section>
  );
};

export default App;
