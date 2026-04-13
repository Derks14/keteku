import Signature from "@/components/ui/signature.tsx";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-[80%] max-w-[1240px] pt-10">
        <div className="text-center">
          {/*<div>Appreciate you for passing through</div>*/}
          <div className="my-2">
            <Signature />
          </div>
          <div className="font-bold text-lg">
            <p><span className="mr-2 font-bold">© {new Date().getFullYear()} Keteku. </span>  Built with  ❤️ by yours truly.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
