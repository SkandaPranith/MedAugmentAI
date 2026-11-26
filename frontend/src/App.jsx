import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import UploadPage from './pages/UploadPage.jsx'
import DatasetPage from './pages/DatasetPage.jsx'
import AugmentPage from './pages/AugmentPage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobPage from './pages/JobPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import ExportsPage from './pages/ExportsPage.jsx'
import Pix2PixBenchmarkPage from './pages/Pix2PixBenchmarkPage.jsx'

export default function App() {
  return (
    <Routes>
      {/* Interactive Video Scrollytelling Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Main Studio / Application Layout */}
      <Route element={<AppLayout />}>
        <Route path="/app" element={<Dashboard />} />
        <Route path="/dashboard" element={<Navigate to="/app" replace />} />
        <Route path="/datasets/new" element={<UploadPage />} />
        <Route path="/datasets/:datasetId" element={<DatasetPage />} />
        <Route path="/datasets/:datasetId/augment" element={<AugmentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobPage />} />
        <Route path="/jobs/:jobId/results" element={<ResultsPage />} />
        <Route path="/exports" element={<ExportsPage />} />
        <Route path="/benchmarks/pix2pix" element={<Pix2PixBenchmarkPage />} />
        <Route path="*" element={<p className="p-8">Page not found.</p>} />
      </Route>
    </Routes>
  )
}
