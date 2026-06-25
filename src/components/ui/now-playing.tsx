const nowPlaying = () => {
  return (
    <>
      <div className="space-between relative flex h-[20px] w-[26px] gap-px">
        <span className="animate-dance h-full w-[3px] origin-bottom rounded-sm bg-[#1DB954] [animation-delay:0ms]"></span>
        <span className="animate-dance h-full w-[3px] origin-bottom rounded-sm bg-[#1DB954] [animation-delay:300ms]"></span>
        <span className="animate-dance h-full w-[3px] origin-bottom rounded-sm bg-[#1DB954] [animation-delay:450ms]"></span>

        <span className="animate-dance h-full w-[3px] origin-bottom rounded-sm bg-[#1DB954] [animation-delay:50ms]"></span>
      </div>
    </>
  );
};

export default nowPlaying;
