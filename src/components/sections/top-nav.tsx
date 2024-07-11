interface TopNavProps {
  title: string;
}

const topNav = ({ title }: TopNavProps) => {
  return (
    <div>
      <div className="flex  justify-between">
        <div>
          <span>do it with shadow</span>
          <h1 className="text-6xl ">{title}</h1>
        </div>
        <div>toggle day and night</div>
      </div>
    </div>
  );
};
export default topNav;
