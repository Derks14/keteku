import { createFileRoute } from '@tanstack/react-router'
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";


export const Route = createFileRoute('/_layout/projects')({
  component: RouteComponent,
})

export  interface fetchProjectParamsType {
  page: number;
  size: number;
  search?: string;
}

export type fetchProjectQueryKeyType = [string, fetchProjectParamsType]

function RouteComponent() {
  // const pros = [
  //   {
  //     id: 324,
  //     span: 2,
  //     project: "Lab",
  //     title: "",
  //   },
  //   {
  //     id: 14,
  //     span: 2,
  //     project: "Lab",
  //     title: "",
  //   },
  //   {
  //     id: 321,
  //     span: 2,
  //     project: "Lab",
  //     title: "",
  //   },
  //   {
  //     id: 322,
  //     span: 2,
  //     project: "Lab",
  //     title: "",
  //   },
  //   {
  //     id: 394,
  //     span: 2,
  //     project: "Lab",
  //     title: "",
  //   },
  //   {
  //     id: 354,
  //     span: 2,
  //     project: "Lab",
  //     title: "",
  //   },
  // ];
  //
  // const [params, setParams ] = useState<fetchProjectParamsType>({
  //   search: "",
  //   page: 0,
  //   size: 6,
  // })
  //
  //
  // const { isLoading, data } = useQuery({
  //   queryKey: ["projects", params],
  //   queryFn: ProjectService.fetchProjects,
  // })
  //
  // const projects: Project[] = data?.data ?? [];

  return (
    <>
      <Wrapper page="Projects" row_cols_class="md:grid-cols-3 md:grid-rows-6">
        <div className="col-span-3 flex h-full flex-col-reverse">
          <h1 className="font-bold text-7xl">Projects</h1>
        </div>
        <Card className="row-span-2">
          <DisplayCard>
            <div>Keteku</div>
          </DisplayCard>
        </Card>
        <Card className="row-span-2">
          <DisplayCard>
            <div>Atom</div>
          </DisplayCard>
        </Card>
        <Card className="row-span-2">
          <DisplayCard>
            <div>Pdf</div>
          </DisplayCard>
        </Card>

        {/* Spacing*/}
        <div className="col-span-3 flex h-full flex-col-reverse">
          <div>
            <h3 className="text-5xl font-bold ">Experiments</h3>
          </div>
        </div>

        <Card>
          <DisplayCard>
            <div></div>
          </DisplayCard>
        </Card>
        <Card>
          <DisplayCard>
            <div></div>
          </DisplayCard>
        </Card>
        <Card>
          <DisplayCard>
            <div>
              write a blog to test scenarios where you need replication and sharding
            </div>
          </DisplayCard>
        </Card>

      </Wrapper>
    </>
  );
}
