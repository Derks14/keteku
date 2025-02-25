import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/components/services/utils.ts";
import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";




const Home = () => {
  return (
    <>
      <Wrapper page="Home" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        <Card className="md:col-span-2">
          <div className="flex">
            <div className="py-2">
              <h1 className={cn("text-5xl font-medium tracking-wide")}>
                Derrick Keteku.
              </h1>
            </div>
            <div></div>
          </div>
          <div>
            <p className="">Cloud Native Software Engineer based in Sydney</p>
          </div>
        </Card>
        <Card className="">
          <div>frontend project</div>
          <div>KETEKU</div>
        </Card>
        <Card className="">
          <div>Backend Project</div>
          <div>BENTSURVUCE WHATEVER</div>
        </Card>
        <Card className="">
          <div>Certificate</div>
          <div>AWS CLOUD PRACTITIONER </div>
        </Card>
        <Card className="">
          <div>article</div>
          <div>BUILDING & DEPLOYING PORTFOLIO</div>
        </Card>
        <Card className="">
          <div>club president</div>
          <div>UTS AFRICAN SOCIETY</div>
        </Card>
        <Card className="">
          <div>AI project</div>
          <div>ACCENT MODEL</div>
        </Card>
        <Card className=""> </Card>
        <Card className="col-span-2"> TOOLS </Card>
        <Card className=""> </Card>
      </Wrapper>
    </>
  );
};
export const Route = createFileRoute('/_layout/')({
  component: Home
})