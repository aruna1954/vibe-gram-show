import { Sidebar } from "@/components/Sidebar";
import { Feed } from "@/components/Feed";
import { SuggestedUsers } from "@/components/SuggestedUsers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        <div className="flex max-w-6xl mx-auto py-8 gap-8">
          {/* Feed */}
          <div className="flex-1 max-w-2xl">
            <Feed />
          </div>
          
          {/* Right Sidebar */}
          <div className="w-80 space-y-6">
            {/* Current User Profile */}
            <div className="bg-card border border-card-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-story p-0.5">
                  <div className="w-full h-full rounded-full bg-card p-0.5">
                    <div className="w-full h-full rounded-full bg-muted"></div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm">your_username</p>
                  <p className="text-xs text-muted-foreground">Your Name</p>
                </div>
              </div>
            </div>
            
            <SuggestedUsers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
