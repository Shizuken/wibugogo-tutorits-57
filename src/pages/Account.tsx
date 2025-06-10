
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Account = () => {
  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-cream-white">
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-scholarly-blue to-pastel-sky-blue rounded-xl shadow-sm p-8 text-center">
              <h1 className="text-4xl font-bold text-deep-navy mb-4">myITS Account</h1>
              <p className="text-graphite-gray text-lg">Manage your academic profile and information</p>
            </section>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Profile Information */}
              <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
                <h2 className="text-2xl font-bold text-deep-navy mb-6">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-deep-navy font-semibold mb-2">Student ID</label>
                      <input 
                        type="text" 
                        value="05111940000XXX" 
                        className="w-full p-3 border-2 border-scholarly-blue rounded-lg bg-pastel-sky-blue" 
                        readOnly 
                      />
                    </div>
                    <div>
                      <label className="block text-deep-navy font-semibold mb-2">Full Name</label>
                      <input 
                        type="text" 
                        value="Student Name" 
                        className="w-full p-3 border-2 border-scholarly-blue rounded-lg bg-white focus:ring-2 focus:ring-bright-mustard" 
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-deep-navy font-semibold mb-2">Email</label>
                      <input 
                        type="email" 
                        value="student@its.ac.id" 
                        className="w-full p-3 border-2 border-scholarly-blue rounded-lg bg-white focus:ring-2 focus:ring-bright-mustard" 
                      />
                    </div>
                    <div>
                      <label className="block text-deep-navy font-semibold mb-2">Department</label>
                      <input 
                        type="text" 
                        value="Teknik Informatika" 
                        className="w-full p-3 border-2 border-scholarly-blue rounded-lg bg-white focus:ring-2 focus:ring-bright-mustard" 
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Academic Information */}
              <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
                <h2 className="text-2xl font-bold text-deep-navy mb-6">Academic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-pastel-sky-blue rounded-lg p-4 text-center">
                    <label className="block text-deep-navy font-semibold mb-2">Current Semester</label>
                    <div className="text-3xl font-bold text-scholarly-blue">5</div>
                  </div>
                  <div className="bg-bright-mustard rounded-lg p-4 text-center">
                    <label className="block text-deep-navy font-semibold mb-2">Current GPA</label>
                    <div className="text-3xl font-bold text-deep-navy">3.75</div>
                  </div>
                  <div className="bg-pastel-sky-blue rounded-lg p-4 text-center">
                    <label className="block text-deep-navy font-semibold mb-2">Credits Completed</label>
                    <div className="text-3xl font-bold text-scholarly-blue">102</div>
                  </div>
                </div>
              </section>

              {/* Learning Progress */}
              <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
                <h2 className="text-2xl font-bold text-deep-navy mb-6">Learning Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-bright-mustard to-yellow-300 rounded-lg p-6">
                    <h3 className="text-deep-navy font-bold text-lg mb-2">Courses Completed</h3>
                    <div className="text-4xl font-bold text-deep-navy">23</div>
                  </div>
                  <div className="bg-gradient-to-r from-scholarly-blue to-pastel-sky-blue rounded-lg p-6">
                    <h3 className="text-deep-navy font-bold text-lg mb-2">Study Streak</h3>
                    <div className="text-4xl font-bold text-deep-navy">7 days</div>
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <section className="flex justify-center space-x-4">
                <button className="bg-bright-mustard text-deep-navy px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                  Save Changes
                </button>
                <button className="border-2 border-scholarly-blue text-scholarly-blue px-8 py-3 rounded-full font-semibold hover:bg-scholarly-blue hover:text-white transition-colors">
                  Cancel
                </button>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Account;
