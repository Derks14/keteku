export default function Header() {
  const menu: [{ title: string; path: string }] = [
    { title: "Home", path: "/home" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
  ];
  return (
    <div className="flex flex-col items-center justify-between bg-emerald-100">
      <div className="m-2 p-2">
        <div>logo </div>
        <nav className="">
          <a className="flex justify-between">
            {menu.map((option) => (
              <div key={option.title} className="">
                {option.title}
              </div>
            ))}
          </a>
        </nav>
      </div>
      <div> action button</div>
    </div>
  );
}
