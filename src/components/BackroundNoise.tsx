import Noise from "./Noise";

const BackroundNoise = () => {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Noise
        patternSize={300}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={2}
        patternAlpha={20}
      />
    </div>
  );
};

export default BackroundNoise;
