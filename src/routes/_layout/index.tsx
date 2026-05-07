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
        <div className="md:col-span-2">

          <DisplayCard>
            <div className="flex justify-end items-center">
              <div className="py-2">
                <h1 className={cn("text-8xl tracking-wide font-semibold")}>Derrick Keteku</h1>
              </div>
              <div></div>
            </div>
            <div>
              <p className="text-2xl text-muted-foreground">Cloud Native Software Engineer based in Sydney</p>
            </div>
          </DisplayCard>
        </div>
        <div>
          <DisplayCard>
            <div></div>
            <div>
              <h2 className="font-bold text-2xl text-primary">
                CURRENTLY WORKING ON
              </h2>
            </div>
          </DisplayCard>
        </div>
        <div>

          <Morph />
        </div>

        <Card>
          <div></div>
        </Card>

        <Card>
          <div>

          </div>
        </Card>
        <Card>
          <DisplayCard>
            <div></div>
            <div>
              <h2 className="font-medium text-2xl">GITHUB LAST COMMIT</h2>
            </div>
            <div></div>
          </DisplayCard>
        </Card>
        <Card className="row-span-2">
          <div className=" px-2 h-full"><Spotify /></div>
        </Card>
        <Card>
          <div></div>
        </Card>
        <Card>
          <div></div>
        </Card>
        <Card>
          <a href="https://www.credly.com/badges/dd5a391c-5e1a-42d5-b2c8-602aee951370">
            <DisplayCard>
            <div className=" flex items-center justify-center">
              <img className="aspect-auto h-48" src="/src/assets/aws-cp.webp" alt="aws-certified"/>
            </div>
            <div>
              <h2 className="font-bold text-primary text-2xl">AWS CLOUD PRACTITIONER</h2>
            </div>
            <div></div>
          </DisplayCard></a>
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
export const Route = createFileRoute('/_layout/')({
  component: Home
})