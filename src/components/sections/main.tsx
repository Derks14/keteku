import { ReactNode } from "react";
import Footer from "./footer.tsx";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="mt-12 grow overflow-auto">
        <div className="mx-auto flex h-full w-[90%] max-w-[1440px] flex-col justify-between scroll-smooth">
          <div>
            <div className="relative w-full">
              <div className="floating-ball bg-primary right-[36rem] dark:bg-blue-700"></div>
              <div className="floating-ball animation-delay-2000 right-[24rem] bg-fuchsia-400"></div>

              <div className="floating-ball animation-delay-4000 right-[13rem] bg-sky-200"></div>
            </div>

            <div className="">
              {children}

              {/*<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>*/}
            </div>
          </div>

          {/* footer */}
          <div className="md:pb-4">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
