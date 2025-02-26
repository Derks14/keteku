import Footer from "@/components/sections/footer";
import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className=" grow overflow-auto py-8">
        <div className="mx-auto flex h-full w-[90%] max-w-[1440px] flex-col scroll-smooth">
          <div className="relative w-full">
            <div className="floating-ball right-[36rem] bg-primary dark:bg-blue-700"></div>
            <div className="floating-ball animation-delay-2000 right-[24rem] bg-fuchsia-400"></div>

            <div className="floating-ball animation-delay-4000 right-[13rem]  bg-sky-200"></div>
          </div>

          <div className="mb-8 flex-1 grow">
            {children}

            {/*<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] dark:before:bg-linear-to-br dark:before:from-transparent dark:before:to-blue-700 dark:before:opacity-10 dark:after:from-sky-900 dark:after:via-[#0141ff] dark:after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] lg:before:h-[360px]"></div>*/}
          </div>

          {/* footer */}
          <div className="mt-8 pb-10 md:pb-4">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
