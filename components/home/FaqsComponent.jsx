import { useRef, useState, useMemo } from "react";
import { IconContext } from "react-icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import PropTypes from "prop-types";

export default function FaqsComponent() {
  const faqs = [
    {
      label: "Gay Travel – freedom to be yourself ",
      answer:
        "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. ",
    },
    {
      label: "Best for nightlife",
      answer:
        "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. ",
    },
    {
      label: "Best for the beach",
      answer:
        "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. ",
    },
    {
      label: "Gay Group Travel",
      answer:
        "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. ",
    },
    {
      label: "Gay Group Best Travel",
      answer:
        "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. ",
    },
    {
      label: "Gay Group Best Travel Trips",
      answer:
        "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. ",
    },
  ];
  return (
    <div className="border-t border-[#d64d78] border-opacity-50 mt-4">
      {faqs.map((faq) => (
        <FaqSingle faq={faq} key={faq.label} />
      ))}
    </div>
  );
}

export function FaqSingle({ faq }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const iconClass = useMemo(() => ({ className: "text-primary" }), []);
  const { label, answer } = faq;
  return (
    <div className="border-b border-[#d64d78] border-opacity-50 py-3">
      <div className="flex justify-between">
        <h1 className="font-semibold w-max-[300px] text-sm">{label}</h1>
        <button type="button" onClick={() => setActive(!active)}>
          {active ? (
            <IconContext.Provider value={iconClass}>
              <AiOutlineMinus />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={iconClass}>
              <AiOutlinePlus />
            </IconContext.Provider>
          )}
        </button>
      </div>
      <p
        className={
          active
            ? "mt-2 h-0 overflow-hidden text-xs transition-all"
            : "h-0 overflow-hidden text-xs transition-all"
        }
        style={active ? { height: `${ref.current.scrollHeight}px` } : {}}
        ref={ref}
      >
        {answer}
      </p>
    </div>
  );
}

FaqSingle.propTypes = {
  faq: PropTypes.objectOf(PropTypes.string).isRequired,
};
