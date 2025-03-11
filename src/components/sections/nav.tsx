import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "@/components/ui/nav-link";
import { Link } from "@tanstack/react-router";
import { navLinks } from "@/components/services/utils.ts";

const Nav = () => {

  return (
    <>
      <aside className="hidden h-full  w-32 min-w-[8rem] p-4 py-8 md:block">
        <div className=" flex w-full items-center justify-center font-bold">
          <Link className="text-sm" to="/">
            Keteku.
          </Link>
        </div>
        <nav className="flex h-full flex-col items-center justify-between py-8">
          {/*one*/}
          <div className=" ">
            {navLinks.map((link) => (
              <NavLink key={link.path} path={link.path} label={link.label} />
            ))}
          </div>
          <div className="space-y-5 text-2xl">
            <div className="rounded-lg p-2 hover:bg-accent hover:text-primary">
              <a target="_blank" href="https:/github.com/Derks14">
                <FaGithub />
              </a>
            </div>

            <div className="rounded-lg p-2 hover:bg-accent hover:text-primary">
              <a target="_blank" href="https://www.linkedin.com/in/derrick-keteku-11a034174/">
                <FaLinkedin />
              </a>
            </div>
            <div className="rounded-lg p-2 hover:bg-accent hover:text-primary">
              <a target="_blank" href="htttps://twitter.com/4teeeeeen">
                <FaTwitter />
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Nav;
