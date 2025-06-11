import Button from '../components/button';
import { ChevronDownIcon } from 'lucide-react';

const Header = () => {
  return (
    <div className="border-b border-white/15 px-2 py-3.5 md:px-0">
      <div className="container mx-auto">
        <div className="relative mx-auto flex max-w-[50.625rem] items-center justify-between">
          <div>
            <div className="inline-flex size-10 items-center gap-2 rounded-xl border border-white/15 p-2">
              <div className="h-full w-full rounded-full bg-red-600"></div>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center gap-8 rounded-full border border-white/15 px-10 py-2 text-[0.8125rem] font-thin">
              <a
                href="#"
                className="flex items-center gap-1 tracking-wide text-white/75 transition-colors hover:text-white"
              >
                Features
                <ChevronDownIcon size={16} className="text-white/75" />
              </a>
              <a href="#" className="tracking-wide text-white/75 transition-colors hover:text-white">
                Developers
              </a>
              <a
                href="#"
                className="flex items-center gap-1 tracking-wide text-white/75 transition-colors hover:text-white"
              >
                Company
                <ChevronDownIcon size={16} className="text-white/75" />
              </a>
              <a href="#" className="tracking-wide text-white/75 transition-colors hover:text-white">
                Blog
              </a>
              <a href="#" className="tracking-wide text-white/75 transition-colors hover:text-white">
                Change log
              </a>
            </nav>
          </div>
          <div className="">
            <Button text="Join waitlist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
