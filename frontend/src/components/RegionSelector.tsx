import "./RegionSelector.css";

type Props = {
  onSelectRegion: (region: string) => void;
};

function RegionSelector({ onSelectRegion }: Props) {
  return (
    <section className="region-selector" dir="rtl">
      <div className="region-header">
        <span className="region-label">איפה אתם נמצאים?</span>
        <h2>בחרו אזור בתל אביב</h2>
        <p>בחרו את האזור כדי לראות את ההנחות וההטבות הזמינות בו.</p>
      </div>

      <div className="regions">
        <button
          className="region-card"
          onClick={() => onSelectRegion("NORTH")}
        >
          <span className="region-icon">↑</span>

          <span className="region-info">
            <strong>צפון תל אביב</strong>
            <small>הצג הטבות באזור</small>
          </span>

          <span className="region-arrow">←</span>
        </button>

        <button
          className="region-card"
          onClick={() => onSelectRegion("CENTRAL")}
        >
          <span className="region-icon">●</span>

          <span className="region-info">
            <strong>מרכז תל אביב</strong>
            <small>הצג הטבות באזור</small>
          </span>

          <span className="region-arrow">←</span>
        </button>

        <button
          className="region-card"
          onClick={() => onSelectRegion("SOUTH")}
        >
          <span className="region-icon">↓</span>

          <span className="region-info">
            <strong>דרום תל אביב</strong>
            <small>הצג הטבות באזור</small>
          </span>

          <span className="region-arrow">←</span>
        </button>

        <button
          className="region-card"
          onClick={() => onSelectRegion("EAST")}
        >
          <span className="region-icon">←</span>

          <span className="region-info">
            <strong>רמת גן - גבעתיים</strong>
            <small>הצג הטבות באזור</small>
          </span>

          <span className="region-arrow">←</span>
        </button>
      </div>
    </section>
  );
}

export default RegionSelector;