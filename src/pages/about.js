import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import qrCode from "../../public/qr-code.svg";
import { isMobile } from "react-device-detect";

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef();

  console.log(isMobile);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <div className="h-screen flex flex-col items-center">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="m-5 p-1.5">
              <span className="sr-only">Kalash</span>
              <img
                className="h-full w-auto"
                src="/kalash-logo.png"
                alt="Kalash"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Kalash</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div> */}
          </Dialog.Panel>
        </Dialog>
      </header>

      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-md h-screen opacity-60"
        aria-hidden="true"
      >
        <video
          // className="relative left-[calc(50%-50rem)] w-[85.125rem] sm:left-[calc(50%-27rem)] sm:w-[72.1875rem]"
          // className="relative left-[calc(50%-50rem)] w-full sm:left-[calc(50%-27rem)] sm:w-full "
          className="relative w-full h-screen"
          ref={videoRef}
          autoPlay
          loop
          muted
          controls={false}
        >
          <source src="/video4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="overflow-hidden h-screen content-center flex flex-col items-center justify-center">
        {/* <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        /> */}

        <div className="mx-auto max-w-7xl py-16 sm:py-48 lg:py-56 sm:justify-center content-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold font-gtMedium tracking-tighter text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-10xl ">
              #1 App for Gold <br /> Rewards in India{" "}
            </h1>
            <p className="mt-10 leading-8 text-white opacity-70 text-xl sm:text-3xl ">
              Kalash makes digital gold savings super simple and secure.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>

        {/* <div className="group -mx-4 flex items-center p-4 transition-colors bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6 max-w-lg justify-center mx-[0 auto]">
          <div className="relative flex h-24 w-24 flex-none items-center justify-center">
            <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
            <Image src={qrCode} alt="" unoptimized />
          </div>
          <div className="ml-8 lg:w-64">
            <p className="text-base font-semibold text-gray-900">
              <Link href="#">
                <span className="absolute inset-0 sm:rounded-2xl" />
                Download the app
              </Link>
            </p>
            <p className="mt-1 text-sm text-gray-700">
              Scan the QR code to download the app from the App Store.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
