
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AddPensievePage from "./pages/AddPensievePage";
import FeaturedPage from "./pages/FeaturedPage";
import UploadMemoryPage from "./pages/UploadMemoryPage";
import MemoryContentPage from "./pages/MemoryContentPage";
import ProfilePage from "./pages/ProfilePage";
import AiAnalysisPage from "./pages/AiAnalysisPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPensievePage />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/upload" element={<UploadMemoryPage />} />
          <Route path="/memory-content" element={<MemoryContentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ai-analysis" element={<AiAnalysisPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
