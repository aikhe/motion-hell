function MainPage() {
  return (
    <>
      <div className="bg-black"></div>
      {[...Array(4)].map((_, index) =>
        index % 2 === 0 ? (
          <div
            key={index}
            className="flex h-[100svh] w-full items-center justify-center bg-black"
          >
            <p className="text-2xl text-white">Lumi&lt;3</p>
          </div>
        ) : (
          <div
            key={index}
            className="flex h-[100svh] w-full bg-black/20 items-center justify-center"
          >
            <p className="text-2xl">maomi&lt;3</p>
          </div>
        ),
      )}
    </>
  );
}

export default MainPage;
