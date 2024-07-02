import Image from "next/image";
import { Fraunces } from "next/font/google";
import Footer from "./components/Footer";

const fraunces = Fraunces({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[651px] px-[26px] py-[15px] sm:my-40">
        <div className="flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
          <Image
            src="/images/image-product-mobile.jpg"
            alt="perfume"
            priority
            className="w-full sm:hidden"
            width={500}
            height={500}
          />

          <Image
            src="/images/image-product-desktop.jpg"
            priority
            alt="perfume"
            className="hidden w-1/2 sm:block"
            width={500}
            height={500}
          />

          <div className="px-[24px] py-[25px] sm:w-1/2 sm:px-[31px] sm:py-[32px]">
            <div className="tracking-customBadge text-veryDarkBlue text-xs uppercase">
              Perfume
            </div>
            <h4
              className={`${fraunces.className} mt-2.5 text-[32px] font-bold leading-[33px] tracking-[-0.3px] sm:mt-[18px]`}
            >
              Gabrielle Essence <br className="sm:hidden" />
              Eau De Parfum
            </h4>
            <div className="text-darkGrayishBlue mt-[15px] text-[14px] leading-[23px] tracking-[0.1px] sm:mt-[24px] sm:tracking-[0.2px]">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </div>

            <div className="mt-[15px] flex items-center gap-[21px] sm:mt-[20px]">
              <span
                className={`${fraunces.className} text-darkCyan text-[33px] font-semibold`}
              >
                $149.99
              </span>
              <span className="text-darkGrayishBlue text-[13px] font-medium line-through">
                $169.99
              </span>
            </div>
            <button className="bg-darkCyan mt-2.5 flex w-full justify-center gap-x-2.5 rounded-lg py-[13px] text-[14px] font-semibold text-white hover:bg-green-900 focus:bg-green-900 focus:outline-none sm:mt-[20px]">
              <svg
                className="mt-[3px] h-[16px] w-[15px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>{" "}
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
