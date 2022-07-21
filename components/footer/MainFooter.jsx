import FooterLinks from "./FooterLinks";
import Logo from "../Shared/Logo";
import InstaIcon from "../Shared/InstaIcon";
import TwitterIcon from "../Shared/TwitterIcon";
import FacebookIcon from "../Shared/FacebookIcon";
import PintrestIcon from "../Shared/PintrestIcon";

export default function MainFooter() {
  return (
    <footer className="bg-secondary py-5 lg:py-10 mt-12 lg:mt-24">
      <div className="theme-container px-4 md:px-0">
        <FooterLinks />
        <div className="grid lg:grid-cols-[200px_1fr] mt-4 gap-7 lg:mt-9">
          <div className="flex lg:flex-col justify-between lg:justify-start gap-4">
            <Logo className="w-full max-w-[180px]" />
            <div className="flex items-center gap-2">
              <InstaIcon className="w-8" />
              <TwitterIcon className="w-8" />
              <FacebookIcon className="w-8" />
              <PintrestIcon className="w-8" />
            </div>
          </div>
          <div>
            <p className="text-sm">
              Gay travelers in Europe and North America benefit from
              comprehensive anti discrimination laws and liberal social
              attitudes. Unfortunately, homosexuality is still illegal in over
              70 countries - almost half of all UN member states.Gay travelers
              in Europe North America benefit from comprehensive anti
              discrimination laws and liberal social attitudes.Unfortunately,
              homosexuality is still illegal in over 70 countries - almost half
              of all UN member states. laws and liberal social attitudes.
              Unfortunately, homosexuality is still illegal in over 70 countries
              almost half of all UN member states.
            </p>
          </div>
        </div>
        <hr className="w-full bg-[#999999] h-[2px] mt-6 md:mt-[69px] mb-5" />
        <p className="text-sm text-center">
          Travelgay.com © copyright 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
