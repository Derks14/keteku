import Wrapper from "@/components/ui/wrapper";
import Card from "@/components/ui/card";

export default function About() {
  return (
    <>
      <Wrapper page="About" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        <Card className="">
          <div> One </div>
          <div>Put a picture here, let it be a canvas</div>
        </Card>
        <Card className="col-span-2 col-start-2 row-span-2 ">
          <div>About Me</div>
          <div>Derrick Keteku</div>
          <div>I'm a software engineer blah blah blah blah whatever here</div>
          <div>Tell them to open a card to learn about a certain experience </div>
          <div></div>
        </Card>
        <Card>
          <div>
            <div>map with pointer showing location</div>
            <div>
              <hr className="text-primary-foreground" />
            </div>

            <div> artist cover art</div>
            <div> title</div>
          </div>
          <div></div>
        </Card>

        <Card>SCHOOL </Card>
        <Card>WORK EXPERIENCE</Card>
      </Wrapper>
    </>
  );
}
