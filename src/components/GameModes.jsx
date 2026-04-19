import React from "react";
const modes = [
  { name: "Solo", img: "🧠"}, { name: "1v1", img: "⚔️"}, { name: "Команда", img: "👥"}
];
export default function GameModes() {
  return (
    <div style={{margin:30}}>
      <h2>Ойын режимдері</h2>
      <div style={{display:'flex', gap:18}}>
        {modes.map((m,i)=>(
          <div key={i} style={{
            background: "#f7fdd6", borderRadius: 20, width: 130, height: 130, display: 'flex',
            alignItems:'center', justifyContent:'center', flexDirection:'column', fontSize:40
          }}>
            <div>{m.img}</div>
            <span style={{fontSize:22, marginTop:10}}>{m.name}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:30, fontSize:17}}>Daily challenge: <b>3 жаңа есеп!</b> &#127873;</div>
    </div>
  );
}
