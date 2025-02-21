import Signature from "@/components/ui/signature";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-[80%] max-w-[1240px] pt-20">
        <div className="text-center">
          <div>Appreciate you for passing through</div>
          <div>
            <Signature />
          </div>
          <div>
            <p> ©2024 Derrick Keteku Built with ❤️ by yours truly.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
