import { createFileRoute } from '@tanstack/react-router'
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";

export const Route = createFileRoute('/_layout/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Wrapper page="Blog" row_cols_class="md:grid-cols-1 md:grid-rows-1">
        <Card>
          <div>yap</div>
          <div>yap</div>
        </Card>
      </Wrapper>
    </>
  );
}
