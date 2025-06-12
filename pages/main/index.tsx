import { motion } from "motion/react";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};

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
            <motion.div
              style={box}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
              }}
            />
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
