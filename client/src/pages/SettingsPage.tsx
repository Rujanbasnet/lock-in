import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Settings } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [breakEnabled, setBreakEnabled] = useState(true);
  const [interval, setInterval] = useState("60");

  return (
    <div className="h-full overflow-auto">
      <PageHeader 
        icon={<Settings className="h-6 w-6 text-muted-foreground" />}
        title="Settings"
        description="Configure your Lock In experience and manage your account."
      />
      
      <div className="max-w-3xl mx-auto p-6 md:p-8 space-y-6 md:space-y-8">

        <Card>
          <CardHeader>
            <CardTitle>Break Reminders</CardTitle>
            <CardDescription>
              Configure when you want to be reminded to take mindful breaks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="break-enabled">Enable break reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get notifications to take breathing breaks
                </p>
              </div>
              <Switch
                id="break-enabled"
                checked={breakEnabled}
                onCheckedChange={setBreakEnabled}
                data-testid="switch-break-enabled"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interval">Reminder interval (minutes)</Label>
              <Input
                id="interval"
                type="number"
                min="15"
                max="120"
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                disabled={!breakEnabled}
                data-testid="input-interval"
              />
            </div>

            <Button
              className="w-full"
              onClick={() => console.log('Settings saved')}
              data-testid="button-save-settings"
            >
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Manage your account and data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Username</Label>
              <p className="text-sm text-muted-foreground">johndoe</p>
            </div>

            <div className="space-y-2">
              <Label>Member since</Label>
              <p className="text-sm text-muted-foreground">November 2025</p>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => console.log('Export data')}
              data-testid="button-export-data"
            >
              Export My Data
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
