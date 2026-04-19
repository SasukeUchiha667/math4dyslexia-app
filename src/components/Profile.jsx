import React from "react";
export default function Profile({user}) {
  return (
    <div style={{margin:30, fontSize:19}}>
      <h2>Профиль</h2>
      <div>Аты: <b>{user.name}</b></div>
      <div>Деңгей: <b>1</b> (demo)</div>
      <div>Аватар: <span role="img" aria-label="">👦</span></div>
      <div>🟣 Арнайы қаріп, контраст, дислексияға бейімдеу.</div>
    </div>
  );
}
