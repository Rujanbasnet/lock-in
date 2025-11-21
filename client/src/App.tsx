import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import Dashboard from "@/pages/Dashboard";
import IntentionPage from "@/pages/IntentionPage";
import ActivitiesPage from "@/pages/ActivitiesPage";
import JournalPage from "@/pages/JournalPage";
import SettingsPage from "@/pages/SettingsPage";
import PricingPage from "@/pages/PricingPage";
import LockInPage from "@/pages/LockInPage";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/not-found";

function AuthenticatedRouter() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/lock-in" component={LockInPage} />
      <Route path="/intention" component={IntentionPage} />
      <Route path="/activities" component={ActivitiesPage} />
      <Route path="/journal" component={JournalPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AuthenticatedContent() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <>
      <AppSidebar />
      {isCollapsed && (
        <SidebarTrigger
          data-testid="button-sidebar-expand"
          className="fixed left-0 top-1/2 -translate-y-1/2 z-40 w-1 hover:w-8 h-20 transition-all duration-200 opacity-0 hover:opacity-100 bg-primary/20 hover:bg-primary/40 rounded-r-lg flex items-center justify-center group"
        >
          <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100">{'>'}</span>
        </SidebarTrigger>
      )}
      <div className="flex flex-col flex-1 min-w-0 w-full">
        <main className="flex-1 overflow-hidden w-full">
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
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <Router />
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
