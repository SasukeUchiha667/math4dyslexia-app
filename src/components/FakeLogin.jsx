import React, { useState } from 'react';

function FakeLogin({ onLoggedIn }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoggedIn();
    }, 700);
  };

  return (
    <form onSubmit={handleLogin} style={{
      display: "flex", flexDirection: "column", alignItems: "center", marginTop: 100
    }}>
      <h2>Дислексияға арналған математикалық қосымша</h2>
      <input
        placeholder="Email немесе телефон"
        style={{ padding: 13, fontSize: 16, margin: 9, minWidth: 245 }}
        autoFocus
        disabled={loading}
      />
      <button disabled={loading} style={{ padding: 12, fontSize: 16, marginTop: 10 }}>
        {loading ? "Кіріп жатыр..." : "Кіру"}
      </button>
      <button type="button" onClick={handleLogin} disabled={loading}
        style={{ background: "#2e66c7", color: "#fff", padding: 12, fontSize: 16, marginTop: 9, border: 0 }}>
        Google арқылы
      </button>
    </form>
  );
}
export default FakeLogin;
