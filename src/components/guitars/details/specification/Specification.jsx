export const Specification = ({ specs }) => {
  return (
    <div className="specification-content">
      {specs ? (
        <ul>
          <li><strong>Body Wood:</strong> {specs.bodyWood}</li>
          <li><strong>Neck Wood:</strong> {specs.neckWood}</li>
          <li><strong>Fingerboard:</strong> {specs.fingerboardWood}</li>
          <li><strong>Pickups:</strong> {specs.pickups}</li>
          <li><strong>Tuners:</strong> {specs.tuners}</li>
          <li><strong>Scale Length:</strong> {specs.scaleLength}</li>
          <li><strong>Bridge:</strong> {specs.bridge}</li>
        </ul>
      ) : (
        <p>No specifications available.</p>
      )}
    </div>
  );
};
