interface TopNavProps {
  title: string;
}

const topNav = ({ title }: TopNavProps) => {
  return (
    <>
      <div className="flex justify-between pb-6">
        <div>
          <span>do it with shadow</span>
          <h1 className="text-6xl ">{title}</h1>
        </div>
        <div>toggle day and night</div>
      </div>
    </>
  );
};
export default topNav;
