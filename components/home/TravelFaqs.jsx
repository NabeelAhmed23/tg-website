import FaqsComponent from "./FaqsComponent";

export default function TravelFaqs() {
  return (
    <section className="mt-[160px] lg:mt-6 lg:pl-[14vw]">
      <div className="px-3 py-4 md:px-[14vw] bg-secondary relative grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[700px_1fr] lg:px-0 lg:gap-6 lg:py-10 rounded-l lg:min-h-[500px]">
        <div className="relative -top-40 lg:top-0 ">
          <img
            src="/homepage/faq1.jpg"
            alt=""
            className="w-full md:max-w-full md:mx-auto lg:ml-0 lg:max-w-none 2xl:max-w-[952px] lg:h-full lg:absolute lg:-left-[14vw] lg:w-[calc(100%_+_14vw)] lg:object-cover lg:object-top rounded lg:rounded-r shadow-[0_0_20px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="-mt-36 lg:mt-0 lg:w-10/12 xl:w-10/12 2xl:w-full 2xl:pr-[calc(calc(100vw_-_1313px)_/_2)]">
          <h2 className="text-primary font-bold text-xl xl:text-[1.75rem]">
            Gay Travel Made Easy
          </h2>
          <p className="text-sm mt-3">
            Since January 2014, more than 80 million gay travelers have used
            Travel Gay to plan vacations, holidays, weekend breaks and great
            nights out. Why?
          </p>
          <div>
            <FaqsComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
