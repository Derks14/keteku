import Card from "@/components/ui/card";

const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full gap-6 md:grid-cols-4 md:grid-rows-3">
        <Card className="col-span-2"> </Card>
        <Card className=""> </Card>
        <Card className=""> </Card>
        <Card className=""> </Card>
        <Card className=""> </Card>
        <Card className="col-span-2"> </Card>
        <Card className="col-span-2"> </Card>
        <Card className="col-span-2"> </Card>
      </div>
    </div>
  );
};

export default Home;
