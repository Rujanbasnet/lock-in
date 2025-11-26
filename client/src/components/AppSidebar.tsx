import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, Target, Activity, BookOpen, Settings, Zap, ChevronLeft, ChevronRight, LogOut, CreditCard } from "lucide-react";
import { useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LockInLogo } from "@/components/LockInLogo";
import { ThemeToggle } from "@/components/ThemeToggle";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Lock In",
    url: "/lock-in",
    icon: Zap,
    badge: "Active",
  },
  {
    title: "Intention",
    url: "/intention",
    icon: Target,
  },
  {
    title: "Journal",
    url: "/journal",
    icon: BookOpen,
  },
  {
    title: "Activity Log",
    url: "/activities",
    icon: Activity,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [location] = useLocation();
  const isLockInActive = location === "/lock-in";
  const { setOpen, state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleLogout = () => {
    localStorage.removeItem("testMode");
    window.location.href = "/";
  };

  return (
    <Sidebar
      collapsible="icon"
      className="bg-sidebar/80 backdrop-blur-md border-r border-sidebar-border/50 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border/50 flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-2 transition-opacity duration-200">
          <LockInLogo variant="compact" className={`text-lg transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`} />
          {isCollapsed && <LockInLogo variant="icon" className="text-lg absolute left-1/2 -translate-x-1/2" />}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={`text-xs font-mono px-4 py-2 text-muted-foreground uppercase tracking-widest transition-opacity duration-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url}
                    data-testid={`link-${item.title.toLowerCase().replace(' ', '-')}`}
                    className={`
                      transition-all duration-200 group relative overflow-hidden
                      ${location === item.url
                        ? 'bg-primary/10 text-primary font-bold shadow-[inset_3px_0_0_0_var(--primary)]'
                        : 'hover:bg-sidebar-accent/50 hover:text-foreground hover:translate-x-1'}
                    `}
                  >
                    <a href={item.url} className="flex items-center justify-between gap-2 py-3">
                      <div className="flex items-center gap-3 z-10">
                        <item.icon className={`h-4 w-4 ${location === item.url ? 'text-primary animate-pulse' : 'text-muted-foreground group-hover:text-primary transition-colors'}`} />
                        <span className={`tracking-wide transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>{item.title}</span>
                      </div>
                      {item.badge && isLockInActive && !isCollapsed && (
                        <Badge variant="outline" className="text-[10px] font-mono border-primary/50 text-primary uppercase shadow-[0_0_8px_rgba(0,217,255,0.3)] bg-primary/5">
                          {item.badge}
                        </Badge>
                      )}
                      {/* Subtle background glow for active state */}
                      {location === item.url && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3 border-t border-sidebar-border/50 flex flex-col gap-2 overflow-hidden">
        <div className={`flex items-center justify-between px-2 transition-opacity duration-200 ${isCollapsed ? 'opacity-0 h-0' : 'opacity-100'}`}>
          <span className="text-[10px] uppercase text-muted-foreground font-mono tracking-widest">Theme</span>
          <ThemeToggle />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="w-full flex items-center gap-3 rounded-md border border-sidebar-border/50 p-3 bg-sidebar-accent/20 hover:bg-sidebar-accent/40 hover-elevate transition-all cursor-pointer backdrop-blur-sm overflow-hidden"
              data-testid="button-user-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-10 w-10 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30 flex-shrink-0 shadow-[0_0_10px] shadow-primary/20">
                <span className="text-sm font-mono font-bold text-primary">JD</span>
              </div>
              <div className={`flex-1 min-w-0 text-left transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                <div className="font-bold text-sm truncate">John Doe</div>
                <div className="text-xs text-muted-foreground font-mono">
                  <span className="text-destructive font-bold">7</span> day streak
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-popover/90 backdrop-blur-md border-border/50" onClick={(e) => e.stopPropagation()}>
            <DropdownMenuItem asChild>
              <a href="/settings" className="cursor-pointer flex items-center gap-2" data-testid="menu-item-settings" onClick={(e) => e.stopPropagation()}>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/pricing" className="cursor-pointer flex items-center gap-2" data-testid="menu-item-plan" onClick={(e) => e.stopPropagation()}>
                <CreditCard className="h-4 w-4" />
                <span>Plan</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                handleLogout();
              }}
              className="cursor-pointer text-destructive focus:text-destructive flex items-center gap-2"
              data-testid="menu-item-logout"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
