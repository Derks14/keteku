import Link from "next/link";

const Nav = () => {
  const links: { label: string; path: string }[] = [
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    { label: "Resume", path: "/resume" },
  ];
  return (
    <>
      <aside className="h-full w-32  min-w-[8rem]  p-4 py-8">
        <div className=" flex w-full items-center justify-center">logo</div>
        <nav className="flex h-full flex-col items-center justify-between py-8">
          {/*one*/}
          <div className=" ">
            {links.map((link) => (
              <div className="mt-10 rotate-[270deg] font-medium" key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <a target="_blank" href="https:/github.com/Derks14">
                Github
              </a>
            </div>

            <div>
              <a target="_blank" href="https://linkedIn.com">
                LinkedIn
              </a>
            </div>
            <div>
              <a target="_blank" href="htttps://twitter.com/4teeeeeen">
                Twitter
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Nav;
