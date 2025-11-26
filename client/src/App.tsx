import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { useState, useRef } from "react";
import Dashboard from "@/pages/Dashboard";
import IntentionPage from "@/pages/IntentionPage";
import ActivitiesPage from "@/pages/ActivitiesPage";
import JournalPage from "@/pages/JournalPage";
import JournalHistoryPage from "@/pages/JournalHistoryPage";
import SettingsPage from "@/pages/SettingsPage";
import PricingPage from "@/pages/PricingPage";
import LockInPage from "@/pages/LockInPage";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { TimerProvider } from "@/context/TimerContext";

function AuthenticatedRouter() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/lock-in" component={LockInPage} />
      <Route path="/intention" component={IntentionPage} />
      <Route path="/activities" component={ActivitiesPage} />
      <Route path="/journal" component={JournalPage} />
      <Route path="/journal/history" component={JournalHistoryPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AuthenticatedContent() {
  return (
    <>
      <div className="h-full">
        <AppSidebar />
      </div>
      <div className="flex flex-col flex-1 min-w-0 w-full">
        <main className="flex-1 w-full h-full overflow-auto">
          <AuthenticatedRouter />
        </main>
      </div>
    </>
  );
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route component={Landing} />
      </Switch>
    );
  }

  return <AuthenticatedContent />;
}

export default function App() {
  const style = {
    "--sidebar-width": "13rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TimerProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full relative">
              <BackgroundGrid />
              <Router />
            </div>
          </SidebarProvider>
          <Toaster />
        </TimerProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
