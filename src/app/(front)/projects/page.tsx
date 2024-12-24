import Wrapper from "@/components/ui/wrapper";
import Card from "@/components/ui/card";

export default function Lab() {
  const projects = [
    {
      id: 324,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 14,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 321,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 322,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 394,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 354,
      span: 2,
      project: "Lab",
      title: "",
    },
  ];
  return (
    <>
      <Wrapper page="Projects" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        {projects.map((project) => (
          <Card className="" key={project.id}>
            <div>aws</div>
            <div>DEPLOYING KUBENETES</div>
          </Card>
        ))}
      </Wrapper>
    </>
  );
}
