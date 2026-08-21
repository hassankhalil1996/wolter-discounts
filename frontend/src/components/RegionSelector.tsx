type Props = {
  onSelectRegion: (region: string) => void;
};

function RegionSelector({ onSelectRegion }: Props) {
  return (
    <>
      <h2>Choose your region</h2>

      <div className="regions">
        <button onClick={() => onSelectRegion("NORTH")}>
          North Tel Aviv
        </button>

        <button onClick={() => onSelectRegion("CENTRAL")}>
          Central Tel Aviv
        </button>

        <button onClick={() => onSelectRegion("SOUTH")}>
          South Tel Aviv
        </button>

        <button onClick={() => onSelectRegion("EAST")}>
          East Tel Aviv
        </button>
      </div>
    </>
  );
}

export default RegionSelector;