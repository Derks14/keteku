import Signature from "@/components/ui/signature.tsx";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-[80%] max-w-[1240px] pt-10">
        <div className="text-center">
          <div>Appreciate you for passing through</div>
          <div className="my-2">
            <Signature />
          </div>
          <div>
            <p><span className="mr-2">© 2024 Keteku. </span>  Built with lots of ❤️ by yours truly.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
