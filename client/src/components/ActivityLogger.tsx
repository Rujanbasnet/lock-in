import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";

const categories = [
  { value: "work", label: "Work" },
  { value: "social", label: "Social" },
  { value: "entertainment", label: "Entertainment" },
  { value: "learning", label: "Learning" },
];

export function ActivityLogger() {
  const [activityName, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleSubmit = () => {
    console.log('Activity logged:', { activityName, category, hours, minutes });
    setActivityName("");
    setCategory("");
    setHours("");
    setMinutes("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Activity</CardTitle>
        <CardDescription>Track your digital time manually</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="activity-name">Activity Name</Label>
          <Input
            id="activity-name"
            placeholder="e.g., Email, Coding, Social Media"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            data-testid="input-activity-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category" data-testid="select-category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Duration</Label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Hours"
                min="0"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                data-testid="input-hours"
              />
            </div>
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Minutes"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                data-testid="input-minutes"
              />
            </div>
          </div>
        </div>

        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={!activityName || !category}
          data-testid="button-log-activity"
        >
          <Plus className="h-4 w-4 mr-2" />
          Log Activity
        </Button>
      </CardContent>
    </Card>
  );
}
