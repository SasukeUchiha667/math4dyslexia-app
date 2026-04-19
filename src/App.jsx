import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FakeLogin from "./components/FakeLogin";
import Dashboard from "./components/Dashboard";
import LessonView from "./components/LessonView";
import ErrorWork from "./components/ErrorWork";
import GameModes from "./components/GameModes";
import ParentPanel from "./components/ParentPanel";
import TeacherPanel from "./components/TeacherPanel";
import ClassRoom from "./components/ClassRoom";
import Profile from "./components/Profile";
import Progress from "./components/Progress";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <FakeLogin onLoggedIn={() => setUser({ name: "Demo User", role: "student" })} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard user={user} />} />
        <Route path="/lessons" element={<LessonView />} />
        <Route path="/errorwork" element={<ErrorWork />} />
        <Route path="/games" element={<GameModes />} />
        <Route path="/parent" element={<ParentPanel />} />
        <Route path="/teacher" element={<TeacherPanel />} />
        <Route path="/classroom" element={<ClassRoom />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
