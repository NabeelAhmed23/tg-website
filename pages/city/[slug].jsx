import InternalHeroSection from "../../components/Shared/internalHero/InternalHeroSection";
import InternalNavigation from "../../components/Shared/internalNavigation/InternalNavigation";
import InternalFadeSlider from "../../components/Shared/internalSlider/InternalFadeSlider";

export default function Slug() {
  return (
    <>
      <InternalHeroSection />
      <div className="theme-container">
        <InternalNavigation />
        <div className="grid grid-cols-1 lg:grid-cols-[69.66%_1fr]">
          <InternalFadeSlider />
        </div>
      </div>
    </>
  );
}
