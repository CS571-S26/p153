import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MentorshipProgramPage from './pages/MentorshipProgramPage.jsx'
import CurriculumPage from './pages/CurriculumPage.jsx'
import PastEventsPage from './pages/PastEventsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="mentorship-program" element={<MentorshipProgramPage />} />
        <Route path="events/curriculum" element={<CurriculumPage />} />
        <Route path="events/pastevent" element={<PastEventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
