import { Link } from "@tanstack/react-router";

const notFound = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl">Sorry mate, we don't have a project like this</h1>
        <div>
          <p>We might as well go back home</p>
        </div>
        <div className="my-8">
          <Link to="/projects/details" className="text-muted-foreground underline">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default notFound;
