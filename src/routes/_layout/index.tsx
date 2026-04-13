import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/components/lib/utils.ts";
import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";
import Morph from "@/components/ui/morph.tsx";




const Home = () => {

  const works = [
    {
      title: "KETEKU",
      span: 1,
      project: "portfolio",
      path: ""
    },
    {
      title: "PRONUNCIATION IMPROVEMENT MODEL",
      span: 1,
      project: "ai project",
      path: "details/1000"
    },
    {
      title: "BENTSURVUCE",
      span: 1,
      project: "user microservice",
      path: ""
    },
    {
      title: "AWS CLOUD PRACTITIONER",
      span: 1,
      project: "certificate",
      path: ""
    },
    {
      title: "LEADING UTS AFRICAN SOCIETY",
      span: 1,
      project: "article",
      path: ""
    },

    /* display card */
    {
      title: "",
      span: 2,
      project: "tools",
      path: ""
    },
    {
      title: "FRAGRANCE RECOMMENDATION SYSTEM",
      span: 1,
      project: "article",
      path: ""
    },

    ]

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
            <div></div>
          </DisplayCard>
        </Card>
        <div>

          <Morph />
        </div>
        {/*change these hardcoded cards into list*/}
        {works.map((work) => (
          <Card className={`col-span-${work.span}`} key={work.path}>
            <DisplayCard has_link={work.path}>
              <div> {work.project}</div>
              <div> {work.title}</div>
            </DisplayCard>
          </Card>
        ))}

      </Wrapper>
    </>
  );
};
export const Route = createFileRoute('/_layout/')({
  component: Home
})