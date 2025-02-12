import Wrapper from "@/components/ui/wrapper";
import Card from "@/components/ui/card";

export default function Blog() {
  return (
    <Wrapper page="Blog" row_cols_class="md:grid-cols-4 md:grid-rows-3">
      <Card>
        <div>the need for a blog</div>
        <div>MY FIRST EVER BLOG</div>
      </Card>
    </Wrapper>
  )
}
