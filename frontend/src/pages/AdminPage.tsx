import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getDailyHits } from "../services/adminService";
import type { HitStatistics } from "../services/adminService";

import "./AdminPage.css";

function AdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [statistics, setStatistics] =
    useState<HitStatistics | null>(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadStatistics() {
    if (!adminKey.trim()) {
      setError("יש להזין מפתח מנהל");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getDailyHits(adminKey);
      setStatistics(data);
    } catch {
      setError("מפתח שגוי או שלא ניתן לטעון את הנתונים");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-page" dir="rtl">
      <h1>לוח ניהול</h1>

      {!statistics && (
        <div className="admin-login">
          <h2>כניסת מנהל</h2>

          <input
            type="password"
            placeholder="מפתח מנהל"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
          />

          <button onClick={loadStatistics}>
            {loading ? "טוען..." : "כניסה"}
          </button>

          {error && <p className="admin-error">{error}</p>}
        </div>
      )}

      {statistics && (
        <>
          <div className="stat-card">
            <span>סה״כ כניסות</span>
            <strong>{statistics.total}</strong>
          </div>

          <div className="chart-card">
            <h2>כניסות לפי יום</h2>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={statistics.data}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="date" />

                <YAxis allowDecimals={false} />

                <Tooltip />

                <Bar
                  dataKey="count"
                  name="כניסות"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminPage;