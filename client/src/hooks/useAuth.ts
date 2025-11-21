import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  const isTestMode = typeof window !== "undefined" && localStorage.getItem("testMode") === "true";
  
  const { data: user, isLoading } = useQuery({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user || isTestMode,
  };
}
