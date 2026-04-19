import React from "react";
import { useNavigate } from "react-router-dom";

const menu = [
  { to: "/lessons", emoji: "📚", label: "Сабақ" },
  { to: "/games", emoji: "🎮", label: "Ойын" },
  { to: "/errorwork", emoji: "❗", label: "Қатемен жұмыс" },
  { to: "/progress", emoji: "📈", label: "Прогресс" },
  { to: "/parent", emoji: "👨‍👩‍👧", label: "Ата-ана" },
  { to: "/teacher", emoji: "🧑‍🏫", label: "Мұғалім" },
  { to: "/classroom", emoji: "🏫", label: "Сынып" },
  { to: "/profile", emoji: "🧑", label: "Профиль" },
];
function Dashboard({ user }) {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", background: "#f5f7fb"
    }}>
      <h2>Қош келдіңіз, {user.name}!</h2>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", marginTop: 25
      }}>
        {menu.map(({ to, emoji, label }) => (
          <button key={to}
            onClick={() => navigate(to)}
            style={{
              width: 120, height: 120, fontSize: 30, background: "#fff", borderRadius: 20,
              border: "none", boxShadow: "0 2px 8px #c6d0e6", margin: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
            }}>
            <div>{emoji}</div>
            <span style={{ fontSize: 18, marginTop: 8 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
