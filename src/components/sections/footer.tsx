import Signature from "@/components/ui/signature.tsx";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-[80%] max-w-[1240px]">
        <div className="text-center">
          {/*<div>Appreciate you for passing through</div>*/}
          <div className="my-2">
            <Signature />
          </div>
          <div className="text-muted-foreground font-medium tracking-wider">
            <p>
              <span className="text-muted-foreground mr-2">
                © {new Date().getFullYear()} Keteku.{" "}
              </span>
              Built with ❤️ by yours truly.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
