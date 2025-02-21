import Card from "@/components/ui/card";
import { Dosis, Cookie, Nova_Mono, JetBrains_Mono } from "next/font/google";
import { cn } from "@/services/utils";
import { dank } from "@/services/font";
import Wrapper from "@/components/ui/wrapper";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
});
const dosis = Dosis({
  display: "swap",
  subsets: ["latin"],
});

const nova = Nova_Mono({
  weight: "400",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <>
      <Wrapper page="Home" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        <Card className="md:col-span-2">
          <div className="flex">
            <div className="py-2">
              <h1 className={cn("text-5xl font-medium tracking-wide", dosis.className)}>
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
          <div>Club president</div>
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

export default Home;
