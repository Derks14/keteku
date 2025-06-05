import { createFileRoute } from '@tanstack/react-router'
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";

export const Route = createFileRoute('/_layout/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Wrapper page="Blog" row_cols_class="md:grid-cols-1 md:grid-rows-1">
        <Card>
          <DisplayCard>
            <div>yap</div>
            <div>yap</div>
          </DisplayCard>
        </Card>
      </Wrapper>
    </>
  );
}
