import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { KetekuRouterContext } from "@/services/queryClient.ts";
import { Button } from "@/components/ui/button.tsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Toaster } from "sonner";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";


const Core =  () => {

  const loader = useRef<HTMLDivElement | null>(null);

  const digit3 = useRef<HTMLDivElement | null>(null);
  const digit2 = useRef<HTMLDivElement | null>(null);
  const digit1 = useRef<HTMLDivElement | null>(null);

  const progress = useRef<HTMLDivElement | null>(null)

  const introTrack = useRef<HTMLDivElement | null>(null)
  const heroPanels = useRef<HTMLDivElement | null>(null)

  const main = useRef<HTMLDivElement | null>(null)

  useGSAP(()=> {
    const d3ChildHeight = digit3.current?.firstElementChild?.clientHeight ?? 0;
    const d3TotalNumberOfChildren = digit3.current?.querySelectorAll(".num").length ?? 0;
    const d3TotalDistance = (d3TotalNumberOfChildren  - 1) * d3ChildHeight;

    const d2ChildHeight = digit2.current?.firstElementChild?.clientHeight ?? 0;
    const d2TotalNumberOfChildren = digit2.current?.querySelectorAll(".num").length ?? 0;
    const d2TotalDistance = (d2TotalNumberOfChildren  - 1) * d2ChildHeight;



    const d1ChildHeight  = digit1.current?.firstElementChild?.clientHeight ?? 0;
    const d1TotalNumberOfChildren = digit1.current?.querySelectorAll(".num").length ?? 0;
    const d1TotalDistance = (d1TotalNumberOfChildren  - 1) * d1ChildHeight;

    const panels = Array.from(
      heroPanels.current?.querySelectorAll(".panel") ?? [],
    );
    const tl = gsap.timeline();

    tl
      .to(digit3.current, {
      y: -d3TotalDistance,
      duration: 8,
      ease: "power3.out",
    })

      .to(digit2.current, {
        y: -d2TotalDistance,
        duration: 6,
        ease: "power2.out",

      }, "-=5.5")

      .to(digit1.current, {
        y: -d1TotalDistance,
        duration: 2,
        ease: "power2.out",
      }, "-=2.1")

      .to(progress.current, {
        width: "98%",
        duration: 7.5,
        ease: "power1.inOut",
      }, "0")
      //
      // .to(progress.current, {
      //   width: "100%",
      //   opacity: 0,
      //   duration: 0.4,
      //   ease: "power1.out",
      // })
      // .to(progress.current, {
      //   opacity: 0,
      //   duration: 0.3,
      //   ease: "power1.out",
      // })
      .to(introTrack.current, {
        xPercent: -50,
        duration: 1.15,
        ease: "power4.inOut",
      }, "-=0.1")
      .to(
        panels[0],
        {
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          duration: 2,
          ease: "power1.in",
        },
        "0"
      )
      .to(panels.slice(1), {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 2,
        ease: "expo.out",
        stagger: 0.1,
        onComplete: () => {
          gsap.set(heroPanels.current, {
            display: "none",
            duration: 2,
            ease: "power1.inOut"
          })
        }
      }, "-=0.65")
      .to(main.current, {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 5,
        ease: "power4.inOut"
      }, "<")

  })

  return (
    <>
      {/* font to try mosvita */}
      <div className="  text-primary font-dosis">
        <div ref={introTrack} className="absolute  inset-0 flex w-[200vw]">
          <div
            ref={loader}
            className="flex overflow-hidden max-h-screen h-full w-screen shrink-0 flex-col items-center justify-between bg-gradient-to-b from-transparent to-backgroundend bg-backgroundstart p-4"
          >
            <div> </div>
            <div className="counter flex h-24 tracking-tight [clip-path:polygon(0%_0%,100%_0%,_100%_100px,0_100px)] text-8xl">
              <div ref={digit1} className="digit-1">
                <div className="num">0</div>
                <div className="num ">1</div>
              </div>

              <div ref={digit2} className="digit-2">
                <div className="num">0</div>
                <div className="num ">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="num">5</div>
                <div className="num">6</div>
                <div className="num">7</div>
                <div className="num">8</div>
                <div className="num">9</div>
                <div className="num">0</div>
              </div>

              <div ref={digit3} className="digit-3">
                <div className="num">0</div>
                <div className="num">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="num">5</div>
                <div className="num">6</div>
                <div className="num">7</div>
                <div className="num">8</div>
                <div className="num">9</div>
                <div className="num">0</div>
                <div className="num">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="num">5</div>
                <div className="num">6</div>
                <div className="num">7</div>
                <div className="num">8</div>
                <div className="num">9</div>
                <div className="num">0</div>
              </div>

              {/*<div className="digit-4">*/}
              {/*  %*/}
              {/*</div>*/}
            </div>

            <div
              ref={progress}
              className="progress-bar h-1.5 w-[0%] rounded-full bg-primary"
            ></div>
          </div>

          <div
            ref={heroPanels}
            className="hero-panels max-h-screen relative h-full w-screen shrink-0 overflow-hidden"
          >
            <div className="panel absolute inset-0 h-full w-full bg-emerald-300 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
              {" "}
            </div>
            <div className="panel absolute inset-0 h-full w-full bg-emerald-600 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
              {" "}
            </div>
            <div className="panel absolute inset-0 h-full w-full bg-emerald-900 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
              {" "}
            </div>

            <div className="panel absolute inset-0 h-full w-full bg-amber-200 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
              {" "}
            </div>
            <div className="panel absolute inset-0 h-full w-full bg-amber-600 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
              {" "}
            </div>
            <div className="panel absolute inset-0 h-full w-full bg-amber-900 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
              {" "}
            </div>

            <div className="panel absolute inset-0 h-full w-full bg-blue-200 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
              {" "}
            </div>
            <div className="panel absolute inset-0 h-full w-full bg-blue-400 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
            </div>
            <div className="panel absolute inset-0 h-full w-full bg-blue-600 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
            </div>
            <div className="panel absolute inset-0 h-full w-full bg-blue-900 [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
            </div>
          </div>
        </div>
        <div ref={main} className="text-foreground bg-gradient-to-b from-transparent to-backgroundend bg-backgroundstart [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]">
          <div className="h-screen max-h-screen min-w-screen overflow-hidden   font-medium font-dosis ">
            <Toaster />
            <Outlet />
            <TanStackRouterDevtools />
          </div>
        </div>
      </div>
    </>
  )

}

const NotFound = () => {
  return (
    <div>
      <h1>Heyyy, looks like you're lost mate</h1>
      <Button variant="link">lets go back home</Button>
    </div>
  )
}
export const Route = createRootRouteWithContext<KetekuRouterContext>()({
  notFoundComponent: NotFound,
  component: Core
})
