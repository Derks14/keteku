import { createFileRoute } from '@tanstack/react-router'
import Card from "@/components/ui/card.tsx";


export const Route = createFileRoute('/_layout/detail')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>
        <div>
          <div>This title should be quite big</div>
          <div>Description with bolder and larger text compared to the title and the link to the project down below
          It should be quite lengthy
          </div>
          <div>this can be normal text or slightly bigger</div>
        </div>
        <Card>
          <div className="flex-col flex">
            <div>one</div>
            <div>one</div>
            <div>one</div>
            <div></div>
          </div>
        </Card>
      </div>
    </>
  )
}
