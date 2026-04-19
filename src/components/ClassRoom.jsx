import React from "react";
const students = ["Әсем", "Бекзат", "Айару", "Нұрдәулет"];
export default function ClassRoom() {
  return (
    <div style={{margin:30}}>
      <h2>Сынып</h2>
      <div>Қатысушылар: {students.join(", ")}</div>
      <div>Сынып тапсырмасы: “18:00-ге дейін 3 есепті шешу!”</div>
      <div>Рейтинг: 🥇 Әсем — 150 ұпай</div>
    </div>
  );
}
