import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Mentorship from "./pages/Mentorship";
import Scholarships from "./pages/Scholarships";
import NotFound from "./pages/NotFound";
import StudentSignUp from './pages/StudentSignUp';
import Login from './pages/Login';
import CrowdfundingDashboard from './pages/Crowdfunding';
import './App.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/signup" element={<StudentSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crowdfunding" element={<CrowdfundingDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
