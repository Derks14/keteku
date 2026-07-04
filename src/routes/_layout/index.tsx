import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "@/components/lib/utils.ts";
import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";
import Morph from "@/components/ui/morph.tsx";
import Spotify from "@/components/sections/spotify.tsx";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaReact } from "react-icons/fa";
import TechStack from "@/components/ui/stack.tsx";
import { SiMongodb, SiSpringboot } from "react-icons/si";
import awsCert from "@/assets/aws-cert.webp";
import img from "@/assets/img.png";

const Home = () => {
  return (
    <>
      <Wrapper page="Home" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        <Card className="md:col-span-2">
          <Link to="/about" className="flex h-full flex-col-reverse">
            <div className="flex items-end justify-between p-4 md:p-6">
              <div className=" ">
                <div>
                  <img src={img} alt="Keteku" className="h-28 w-28 object-contain" />
                </div>
                <div>
                  <h1 className={cn("text-5xl font-bold tracking-wide")}>Derrick Keteku</h1>
                </div>
                <div className="py-2">
                  <p className="">Cloud Native Software Engineer based in Sydney</p>
                </div>
              </div>
              <div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </Card>
        <Card>
          <DisplayCard>
            <div>
              <h3 className="text-muted-foreground tracking-[0.16em] uppercase">
                currently working on
              </h3>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Open source software contributions</h2>
            </div>
          </DisplayCard>
        </Card>
        <div>
          <Morph />
        </div>

        <Card>
          <DisplayCard>
            <div>
              <h3 className="text-muted-foreground tracking tracking-[0.22em] uppercase">
                full stack portfolio
              </h3>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Deploying & Building Keteku</h2>
            </div>
          </DisplayCard>
        </Card>

        <Card>
          <div className="flex h-full flex-col justify-between p-4 md:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-7xl">🛡️</h1>
              </div>
              <div>
                <div className="space-y-1">
                  <TechStack className="" name="React">
                    <FaReact />
                  </TechStack>
                  <TechStack
                    name="Spring"
                    className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  >
                    <SiSpringboot />
                  </TechStack>

                  <TechStack
                    name="MongoDB"
                    className="bg-emerald-500/10 text-green-700 dark:text-green-300"
                  >
                    <SiMongodb />
                  </TechStack>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div>
                  <h3 className="text-muted-foreground text-sm tracking-[0.22em] uppercase">
                    Microservice system
                  </h3>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Atom.</h2>
                </div>
              </div>
              <div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </Card>
        <div className="row-span-2">
          <div className="flex h-full flex-col gap-2">
            <Card className="grow">
              <DisplayCard>
                <div className="border-muted-foreground flex h-full flex-col justify-around p-4">
                  <div className="text-muted-foreground py-4 tracking-[0.22em] uppercase">
                    commits this month
                  </div>
                  <div className="w-full">
                    <div className="flex items-center gap-8">
                      <div>
                        <span>
                          <FaGithub className="text-4xl" />
                        </span>
                      </div>
                      <div>
                        <h1 className="text-5xl font-semibold tracking-widest">487</h1>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-green-700">16%</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </DisplayCard>
            </Card>
            <Card>
              <div className="p-4 md:p-6">
                <div className="flex items-stretch">
                  <div className="flex-1 text-center">
                    <div>left</div>
                  </div>

                  <div className="bg-primary w-px" />

                  <div className="flex-1 text-center">
                    <div>right</div>
                  </div>
                </div>{" "}
              </div>
            </Card>
            <Card className="overflow-hidden !border-[#33465f] !bg-[#232F3E] text-white">
              {/* cloud practitioner card*/}
              <a
                target="_blank"
                href="https://www.credly.com/badges/dd5a391c-5e1a-42d5-b2c8-602aee951370"
              >
                <div className="flex h-full">
                  <div className="flex flex-1 bg-[#232F3E]">
                    <div className="flex h-full flex-col justify-center p-4">
                      <div className="flex-1">
                        <ArrowUpRight className="group-hover:text-foreground size-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <div>
                        <h3 className="text-sm tracking-[0.22em] text-[#FF9900] uppercase">
                          CERTIFIED PROFESSIONAL
                        </h3>
                      </div>
                      <div>
                        <h1 className="text-xl font-semibold">AWS Cloud Practitioner</h1>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-full w-1/3 overflow-hidden bg-[#232F3E]">
                    <img
                      src={awsCert}
                      alt="AWS certification badge"
                      className="h-full w-full object-cover"
                    />
                    {/*<div className="absolute inset-0 bg-[#232F3E]/35" />*/}
                  </div>
                </div>
              </a>
            </Card>
          </div>
        </div>
        <Card className="row-span-2">
          <div className="h-full px-2">
            <Spotify />
          </div>
        </Card>
        <Card>
          <div className="flex h-full flex-col justify-between p-4 md:p-6">
            <div>
              <h1 className="text-7xl"></h1>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div>
                  <h3 className="text-muted-foreground text-sm tracking-[0.22em] uppercase">
                    what i do
                  </h3>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Building Fullstack Apps.</h2>
                </div>
              </div>
              <div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex h-full flex-col justify-between p-4 md:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-7xl">🛡️</h1>
              </div>
              <div>
                <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-700 dark:text-red-300">
                  Cybersecurity
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div>
                  <h3 className="text-muted-foreground text-sm tracking-[0.22em] uppercase">
                    what i do
                  </h3>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Security Operations Eng.</h2>
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
export const Route = createFileRoute("/_layout/")({
  component: Home,
});
