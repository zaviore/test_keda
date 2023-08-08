import { useState, forwardRef, useEffect } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MENUNAVBAR } from "../../../utils/constanta";

const Navbar = forwardRef((props, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollToClass = (className) => {
    if (ref.current) {
      const elementToScroll = document.querySelector(`.${className}`);
      if (elementToScroll) {
        elementToScroll.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className='bg-white'>
      <div className='absolute left-[-100px] top-[-200px] md:top-[-218px] md:left-[-181px] 2xl:left-[30px] 2xl:top-[-180px]'>
        <img src='/homebg.svg' className='bg-contain' alt='homebg' />
      </div>
      <nav
        className={
          scrollPosition == 0
            ? "mx-auto  p-6 lg:px-8 z-10  w-full transition delay-150 duration-300 ease-in-out relative  "
            : "mx-auto  p-6 lg:px-8 z-20  w-full fixed transition delay-150 duration-300 ease-in-out bg-white shadow-sm"
        }
        aria-label='Global'
      >
        <div className='flex max-w-7xl mx-auto items-center justify-between'>
          <div className='flex lg:flex-1 items-center'>
            <a href='/home' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
            </a>
            <p
              onClick={() => handleScrollToClass("home-section")}
              className={
                scrollPosition == 0
                  ? "text-lg font-bold leading-6 text-white"
                  : "text-lg font-bold leading-6 text-black"
              }
            >
              HOME
            </p>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                className={mobileMenuOpen ? "hidden" : "h-6 w-6"}
                aria-hidden='true'
              />
            </button>
          </div>
          <Popover.Group className='hidden lg:flex lg:gap-x-12 items-center'>
            {MENUNAVBAR.map((itm) => (
              <p
                onClick={() => handleScrollToClass(itm.section)}
                className='text-lg font-bold leading-6 text-gray-900'
              >
                {itm.name}
              </p>
            ))}

            <a
              href='/login'
              className='text-sm font-semibold leading-6 text-[#9DDAF4] border border-[#9DDAF4] p-2 px-7 rounded-lg'
            >
              Log in
            </a>
          </Popover.Group>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700 z-20'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {MENUNAVBAR.map((itm) => (
                  <div
                    onClick={() => handleScrollToClass(itm.section)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {itm.name}
                  </div>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
});

export default Navbar;
