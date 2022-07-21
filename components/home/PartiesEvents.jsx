import PartyComponent from "./PartyComponent";
import GroupTripsComponent from "./GroupTripsComponent";

export default function PartiesEvents() {
  return (
    <section className="bg-secondary py-6 lg:py-8 xl:py-10 2xl:py-12 -mt-[7rem] md:mt-32 2xl:mt-20 ">
      <div className="theme-container">
        <div className="grid lg:grid-cols-2 gap-y-6">
          <PartyComponent />
          <GroupTripsComponent />
        </div>
      </div>
    </section>
  );
}
