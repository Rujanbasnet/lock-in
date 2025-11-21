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
} from "@/components/ui/sidebar";
import { LayoutDashboard, Target, Activity, BookOpen, Settings, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
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
    title: "Activity Log",
    url: "/activities",
    icon: Activity,
  },
  {
    title: "Journal",
    url: "/journal",
    icon: BookOpen,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <LockInLogo variant="compact" className="text-lg" />
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
                      {item.badge && (
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
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 rounded-md border border-sidebar-border p-3 bg-sidebar-accent/30">
          <div className="h-10 w-10 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="text-sm font-mono font-bold text-primary">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm truncate">John Doe</div>
            <div className="text-xs text-muted-foreground font-mono">
              <span className="text-destructive font-bold">7</span> day streak
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
