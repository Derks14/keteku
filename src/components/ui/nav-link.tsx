import Link from "next/link";

export const NavLink = (link: { path: string; label: string }) => {
  return (
    <div className="mt-10 rotate-[270deg] font-medium" key={link.path}>
      <Link href={link.path}>{link.label}</Link>
    </div>
  );
};
