import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[120px_1fr] grid-rows-1 md:grid-row-2 md:gap-y-8">
      <h3 className="font-bold hidden md:block">Quick Links</h3>
      <div>
        <ul className="md:flex flex-wrap gap-x-3">
          <li className="my-1 mx-2 md:hidden">
            <h3 className="font-bold ">Quick Links</h3>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> About Us </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Contact Us </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Outofoffice.com </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Gay Weddings </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Gay Honeymoons </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Terms Of Use </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Cookie Policy </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Luxary Gay Travel </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Picture acknowledgement </a>
            </Link>
          </li>
        </ul>
      </div>

      <h3 className="font-bold hidden md:block ">Business</h3>
      <div>
        <ul className="md:flex flex-wrap gap-x-3 ">
          <li className="my-1 mx-2 md:hidden">
            <h3 className="font-bold ">Business</h3>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Media Kit </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Advertise </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Add Business </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Add Event</a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Contact Us </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Add Offer </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Careers </a>
            </Link>
          </li>
          <li className="my-1 mx-2">
            <Link href="#">
              <a className="text-xs text-[#222]"> Become GayTravel Approved </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
