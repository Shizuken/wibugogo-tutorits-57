
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-foreground mb-6">Settings</h1>
      
      <div className="max-w-2xl space-y-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Email Notifications</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Course Reminders</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Dark Mode</span>
              <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Language</h2>
          <select className="w-full p-2 border border-border rounded-md bg-background text-foreground">
            <option>English</option>
            <option>Bahasa Indonesia</option>
          </select>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Privacy</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Profile Visibility</span>
              <select className="p-2 border border-border rounded-md bg-background text-foreground">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
