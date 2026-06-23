import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/components/lib/utils.ts";
import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";
import Morph from "@/components/ui/morph.tsx";
import Spotify from "@/components/sections/spotify.tsx";

const Home = () => {
  return (
    <>
      <Wrapper page="Home" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        <Card className="md:col-span-2">
          <DisplayCard>
            <div className="flex">
              <div className="py-2">
                <h1 className={cn("text-5xl font-bold tracking-wide")}>Derrick Keteku.</h1>
              </div>
              <div></div>
            </div>
            <div>
              <p className="">Cloud Native Software Engineer based in Sydney</p>
            </div>
          </DisplayCard>
        </Card>
        <Card>
          <DisplayCard>
            <div></div>
            <div>Building Keteku here</div>
          </DisplayCard>
        </Card>
        <div>
          <Morph />
        </div>

        <Card>
          <div></div>
        </Card>

        <Card>
          <div></div>
        </Card>
        <div className="row-span-2">
          <div className="flex h-full flex-col gap-2">
            <Card className="grow">
              <div className="p-4">three</div>
            </Card>
            <Card>
              <div className="p-4">two</div>
            </Card>
            <Card>
              <div className="p-4">one</div>
            </Card>
          </div>
        </div>
        <Card className="row-span-2">
          <div className="h-full px-2">
            <Spotify />
          </div>
        </Card>
        <Card>
          <div></div>
        </Card>
        <Card>
          <div></div>
        </Card>
        <Card>
          <div></div>
        </Card>

        {/*change these hardcoded cards into list*/}
        {/*{works.map((work) => (*/}
        {/*  <Card className={`col-span-${work.span}`} key={work.path}>*/}
        {/*    <DisplayCard has_link={work.path}>*/}
        {/*      <div> {work.project}</div>*/}
        {/*      <div> {work.title}</div>*/}
        {/*    </DisplayCard>*/}
        {/*  </Card>*/}
        {/*))}*/}
      </Wrapper>
    </>
  );
};
export const Route = createFileRoute("/_layout/")({
  component: Home,
});
