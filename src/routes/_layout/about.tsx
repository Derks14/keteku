import { createFileRoute } from '@tanstack/react-router'
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";


const About = () => {
  return (
    <>
      <Wrapper page="About" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        <Card className="">
          <DisplayCard>
            <div> One</div>
            <div>Put a picture here, let it be a canvas</div>
          </DisplayCard>
        </Card>
        <Card className="col-span-2 col-start-2 row-span-2 ">
          <DisplayCard>
            <div>About Me</div>
            <div>Derrick Keteku</div>
            <div>Im a software engineer blah blah blah blah whatever here</div>
            <div>Tell them to open a card to learn about a certain experience </div>
            <div></div>
          </DisplayCard>
        </Card>
        <Card className="">
          <DisplayCard>
            <div>
              <div>map with pointer showing location</div>
              <div>
                <hr className="text-primary-foreground" />
              </div>

              <div> artist cover art</div>
              <div> title</div>
            </div>
            <div></div>
          </DisplayCard>
        </Card>

        <Card>
          <DisplayCard>
            School
          </DisplayCard>
        </Card>
        <Card>
          <DisplayCard>
            <div></div>
            <div>WORK EXPERIENCE</div>
          </DisplayCard>
        </Card>
        <Card className="col-span-full">
          <DisplayCard>
            <div></div>
            <div>SAY HI</div>
          </DisplayCard>
        </Card>
      </Wrapper>
    </>
  )
}
export const Route = createFileRoute('/_layout/about')({
  component: About,
})

