import { createFileRoute } from "@tanstack/react-router";
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";
import MapBox from "@/components/sections/map.tsx";
import { ArrowUpRight, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <>
      <Wrapper page="About" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        <Card className="">
          <Card className="h-auto min-h-[12rem]">
            <div className="flex h-full flex-col justify-between p-4">
              <div>
                <h1 className="text-7xl"> 📜</h1>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div>
                    <h3 className="text-muted-foreground text-sm">LEARN MORE</h3>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Check my resume out</h2>
                  </div>
                </div>
                <div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </Card>
        </Card>
        <Card className="col-span-2 col-start-2 row-span-2 h-auto min-h-[12rem]">
          <DisplayCard>
            <div className="my-4 font-semibold">About Me</div>
            <div className="text-muted-foreground overflow-scroll text-xl/7">
              I'm a cloud-native software engineer based in Sydney, passionate about building
              distributed systems and scalable backend services with Java. I focus on creating
              secure, resilient applications that are designed to withstand modern cyber threats,
              while also delivering intuitive frontend experiences with React. My experience spans
              enterprise software, startups, and freelance projects across a variety of industries.
            </div>
          </DisplayCard>
        </Card>
        <Card className="row-span-2">
          <MapBox />
        </Card>

        <Card className="h-auto min-h-[12rem]">
          <div className="flex h-full flex-col justify-between">
            <div className="flex justify-between p-2">
              <div className="p-2">
                <GraduationCap className="size-7" />
              </div>
              <img className="max-h-22" src="/src/assets/uts-logo.png" />
            </div>
            <div className="p-4">
              <div>
                <h3>EDUCATION</h3>
              </div>
              <div>
                <h2 className="text-xl font-bold">Masters of Eng. CyberSecurity</h2>
              </div>
            </div>
          </div>
        </Card>
        <Card className="h-auto min-h-[12rem]">
          <div className="flex h-full flex-col justify-between">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl">🛠️</h1>
                </div>
                <div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
            <div className="px-4 py-5">
              <div className="flex items-end justify-between">
                <div>
                  <div>
                    <h3 className="text-muted-foreground text-sm">EXPERIENCE</h3>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">Rancard</h2>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-bold">( 2019 - 2022 )</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="md:col-span-2">
          <a className="" href="mailto:hey@keteku.dev">
            <div className="flex h-full flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🌎</div>
                  <span className="text-sm font-semibold">Sydney, Australia</span>
                </div>
                <div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <div>
                <div className="my-1">
                  <h3 className="text-muted-foreground text-sm font-semibold tracking-[0.22em] uppercase">
                    HAVE SOMETHING AMBITIOUS ?
                  </h3>
                </div>
                <div>
                  <h2 className="text-primary text-4xl leading-tight font-bold">
                    Lets talk through what you want to build
                  </h2>
                </div>
              </div>
            </div>
          </a>
          {/*<DisplayCard>*/}
          {/*  <div>*/}
          {/*    <h3 className="text-muted-foreground text-lg">have something ambitious ? </h3>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <h2 className="text-primary text-4xl font-bold">*/}
          {/*      Lets talk through what you want to build*/}
          {/*    </h2>*/}
          {/*  </div>*/}
          {/*</DisplayCard>*/}
        </Card>
        <Card className="h-auto min-h-[12rem]">
          <div className="flex h-full flex-col justify-between p-4">
            <div>
              <h1 className="text-7xl">📮</h1>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div>
                  <h3 className="text-muted-foreground text-sm">REACH ME</h3>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">hey@keteku.dev</h2>
                </div>
              </div>
              <div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </Card>
      </Wrapper>
    </>
  );
};
export const Route = createFileRoute("/_layout/about")({
  component: About,
});
