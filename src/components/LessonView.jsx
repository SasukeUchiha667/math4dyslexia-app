import React, { useState } from "react";

const lessons = [
  { topic: "10-ға дейін санау", description: "Видео + практика, drag & drop", video: "https://www.youtube.com/embed/HdUQPHeK29U" },
  { topic: "Қосу және азайту", description: "Визуалды санау. Арнайы қаріп.", video: null },
  { topic: "Фигуралар", description: "Пішіндерді атын үйрену. Арнайы түс, түсінікті анимация.", video: null },
];

function LessonView() {
  const [selected, setSelected] = useState(0);
  return (
    <div style={{padding:30, fontFamily:'"Arial Rounded MT", Arial'}}>
      <h2>Сабақтар</h2>
      <ul style={{display:'flex', gap:13}}>
        {lessons.map((x, idx) => (
          <li key={x.topic} style={{listStyle:'none'}}>
            <button onClick={()=>setSelected(idx)} style={{background:idx===selected?'#e0eefa':'#fff',padding:10, borderRadius:10}}>
              {x.topic}
            </button>
          </li>
        ))}
      </ul>
      <div style={{marginTop:30}}>
        <h3>{lessons[selected].topic}</h3>
        <div>{lessons[selected].description}</div>
        {lessons[selected].video &&
        <iframe width="420" height="315" src={lessons[selected].video} title="Видео сабақ" style={{marginTop:18}} allowFullScreen />}
      </div>
    </div>
  );
}
export default LessonView;
