import { createFileRoute } from '@tanstack/react-router'
import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";


export const Route = createFileRoute('/_layout/detail')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Wrapper row_cols_class="md:grid-cols-1 md:grid-rows-1">
        <Card>
          <div className="flex-col flex">
            <div>one</div>
            <div>one</div>
            <div>one</div>
            <div></div>
          </div>
        </Card>
      </Wrapper>
    </>
  )
}
