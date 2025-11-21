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
  const { toggleSidebar, state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border flex items-center justify-center">
        <div className="flex items-center gap-2">
          {!isCollapsed && <LockInLogo variant="compact" className="text-lg" />}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-mono px-4 py-2 text-muted-foreground uppercase tracking-widest">
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
                  >
                    <a href={item.url} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      {item.badge && isLockInActive && (
                        <Badge variant="outline" className="text-[10px] font-mono border-primary/50 text-primary uppercase">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3 border-t border-sidebar-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="w-full flex items-center gap-3 rounded-md border border-sidebar-border p-3 bg-sidebar-accent/30 hover-elevate transition-all cursor-pointer"
              data-testid="button-user-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-10 w-10 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30 flex-shrink-0">
                <span className="text-sm font-mono font-bold text-primary">JD</span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="font-bold text-sm truncate">John Doe</div>
                <div className="text-xs text-muted-foreground font-mono">
                  <span className="text-destructive font-bold">7</span> day streak
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <a href="/settings" className="cursor-pointer flex items-center gap-2" data-testid="menu-item-settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/pricing" className="cursor-pointer flex items-center gap-2" data-testid="menu-item-plan">
                <CreditCard className="h-4 w-4" />
                <span>Plan</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleLogout}
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
