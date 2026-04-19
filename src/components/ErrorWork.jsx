import React from "react";
const errorExamples = [
  { task: "2 + 3 = ?", userAnswer: "4", correct: "5", tip: "Әр саусақты санап көр!", weak: "Қосу" },
  { task: "7 - 4 = ?", userAnswer: "2", correct: "3", tip: "Сандарды сызықшада байқа!", weak: "Азайту" },
];
export default function ErrorWork() {
  return (
    <div style={{margin:30}}>
      <h2>Қатемен жұмыс</h2>
      {errorExamples.map((e,i)=>(
        <div key={i} style={{margin:"18px 0", padding:20, background:"#ffe9e9", borderRadius:10}}>
          <div>Есеп: <b>{e.task}</b></div>
          <div>Сіздің жауабыңыз: <b style={{color:"#c94"}}>{e.userAnswer}</b></div>
          <div>Дұрыс жауап: <b style={{color:"green"}}>{e.correct}</b></div>
          <div>🧑‍🏫 Кеңес: {e.tip}</div>
        </div>
      ))}
    </div>
  );
}
