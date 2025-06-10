
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Settings = () => {
  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-cream-white">
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-scholarly-blue to-pastel-sky-blue rounded-xl shadow-sm p-8 text-center">
              <h1 className="text-4xl font-bold text-deep-navy mb-4">Settings</h1>
              <p className="text-graphite-gray text-lg">Customize your learning experience</p>
            </section>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Preferences */}
              <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
                <h2 className="text-2xl font-bold text-deep-navy mb-6">Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-pastel-sky-blue rounded-lg">
                    <div>
                      <h3 className="font-semibold text-deep-navy">Email Notifications</h3>
                      <p className="text-graphite-gray text-sm">Receive updates about your courses</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 text-scholarly-blue rounded" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-pastel-sky-blue rounded-lg">
                    <div>
                      <h3 className="font-semibold text-deep-navy">Course Reminders</h3>
                      <p className="text-graphite-gray text-sm">Get reminded about upcoming lessons</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 text-scholarly-blue rounded" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-pastel-sky-blue rounded-lg">
                    <div>
                      <h3 className="font-semibold text-deep-navy">Dark Mode</h3>
                      <p className="text-graphite-gray text-sm">Switch to dark theme</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 text-scholarly-blue rounded" />
                  </div>
                </div>
              </section>

              {/* Language */}
              <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
                <h2 className="text-2xl font-bold text-deep-navy mb-6">Language</h2>
                <div className="p-4 bg-pastel-sky-blue rounded-lg">
                  <label className="block text-deep-navy font-semibold mb-2">Display Language</label>
                  <select className="w-full p-3 border-2 border-scholarly-blue rounded-lg bg-white">
                    <option>English</option>
                    <option>Bahasa Indonesia</option>
                  </select>
                </div>
              </section>

              {/* Privacy */}
              <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
                <h2 className="text-2xl font-bold text-deep-navy mb-6">Privacy</h2>
                <div className="p-4 bg-pastel-sky-blue rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-deep-navy">Profile Visibility</h3>
                      <p className="text-graphite-gray text-sm">Control who can see your profile</p>
                    </div>
                    <select className="p-2 border-2 border-scholarly-blue rounded-lg bg-white">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <section className="flex justify-center space-x-4">
                <button className="bg-bright-mustard text-deep-navy px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                  Save Changes
                </button>
                <button className="border-2 border-scholarly-blue text-scholarly-blue px-8 py-3 rounded-full font-semibold hover:bg-scholarly-blue hover:text-white transition-colors">
                  Reset to Default
                </button>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
