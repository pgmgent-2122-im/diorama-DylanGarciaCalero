const LightingThreePoint = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight
        // Back Light
        castShadow={true}
        color="x0ffffff"
        intensity={0.75}
        position={[4, 2, -4]}
      />
      <spotLight
        // Fill Light
        castShadow={true}
        color="x0ffffff"
        intensity={0.75}
        position={[-4, 2, 4]}
      />
      <spotLight
        // Key Light
        castShadow={true}
        color="x0ffffff"
        intensity={0.75}
        position={[4, 2, 4]}
      />
    </>
  );
};

export default LightingThreePoint;
