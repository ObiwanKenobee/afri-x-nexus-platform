
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";

interface DashboardOverviewProps {
  role?: "entrepreneur" | "mentor" | "funder" | "admin";
}

const DashboardOverview = ({ role = "entrepreneur" }: DashboardOverviewProps) => {
  // Different stats based on user role
  const stats = role === "entrepreneur" 
    ? [
        { name: "Mentorship Sessions", value: "3", icon: Users, change: "+50%", color: "bg-blue-100 text-blue-600" },
        { name: "Pitch Score", value: "82%", icon: TrendingUp, change: "+5%", color: "bg-green-100 text-green-600" },
        { name: "Funding Readiness", value: "68%", icon: DollarSign, change: "+12%", color: "bg-purple-100 text-purple-600" },
        { name: "Next Session", value: "May 25", icon: Calendar, change: "3 days", color: "bg-amber-100 text-amber-600" }
      ]
    : role === "mentor"
    ? [
        { name: "Active Mentees", value: "7", icon: Users, change: "+2", color: "bg-blue-100 text-blue-600" },
        { name: "Feedback Rating", value: "4.8", icon: TrendingUp, change: "+0.2", color: "bg-green-100 text-green-600" },
        { name: "Sessions This Month", value: "12", icon: Calendar, change: "+3", color: "bg-purple-100 text-purple-600" },
        { name: "Next Session", value: "May 24", icon: Calendar, change: "2 days", color: "bg-amber-100 text-amber-600" }
      ]
    : role === "funder"
    ? [
        { name: "Pipeline Ventures", value: "15", icon: Users, change: "+3", color: "bg-blue-100 text-blue-600" },
        { name: "Portfolio Performance", value: "+18%", icon: TrendingUp, change: "+4%", color: "bg-green-100 text-green-600" },
        { name: "Available Capital", value: "$2.5M", icon: DollarSign, change: "$500K", color: "bg-purple-100 text-purple-600" },
        { name: "Next Review", value: "May 27", icon: Calendar, change: "5 days", color: "bg-amber-100 text-amber-600" }
      ]
    : [
        { name: "Total Users", value: "2,543", icon: Users, change: "+87", color: "bg-blue-100 text-blue-600" },
        { name: "Platform Growth", value: "+23%", icon: TrendingUp, change: "+5%", color: "bg-green-100 text-green-600" },
        { name: "Revenue", value: "$18.2K", icon: DollarSign, change: "+$2.4K", color: "bg-purple-100 text-purple-600" },
        { name: "Active Programs", value: "4", icon: Calendar, change: "+1", color: "bg-amber-100 text-amber-600" }
      ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm font-medium text-gray-500">{stat.name}</CardTitle>
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <stat.icon size={18} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs font-medium text-green-600 mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg font-medium text-gray-800">AI Business Insights</CardTitle>
                <CardDescription>Ask for market intelligence and business advice</CardDescription>
              </div>
              <Link to="/dashboard/insights">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ArrowUpRight size={14} />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-afrix-blue flex items-center justify-center text-white">
                  AI
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-3 text-gray-700">
                    <p className="mb-2">Based on your venture details, here are 3 suggested next steps:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Conduct customer interviews in Nairobi's CBD area to validate pricing model</li>
                      <li>Explore partnerships with local logistics providers for last-mile delivery</li>
                      <li>Consider applying for the AgriTech Innovation Fund opening next month</li>
                    </ol>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Generated May 21, 2025 · Based on your business plan</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask for business insights or advice..."
                  className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-afrix-blue focus:border-transparent"
                />
                <Button className="absolute right-1 top-1 bg-afrix-blue hover:bg-afrix-blue/90">
                  Ask AI
                </Button>
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="text-xs">How to find investors?</Button>
                <Button variant="outline" size="sm" className="text-xs">Market size analysis</Button>
                <Button variant="outline" size="sm" className="text-xs">Pricing strategy</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-800">Upcoming Events</CardTitle>
            <CardDescription>Your scheduled sessions and programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Mentor Session",
                  date: "May 24, 2025",
                  time: "10:00 AM",
                  with: "Dr. Sarah Johnson",
                  type: "Virtual"
                },
                {
                  title: "Pitch Practice",
                  date: "May 28, 2025", 
                  time: "2:30 PM",
                  with: "Startup Cohort",
                  type: "In-person"
                },
                {
                  title: "Funding Workshop",
                  date: "June 3, 2025",
                  time: "1:00 PM",
                  with: "Investment Panel",
                  type: "Virtual"
                }
              ].map((event, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-gray-600">with {event.with}</p>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${event.type === 'Virtual' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                      {event.type}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {event.date}, {event.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Full Calendar
            </Button>
          </CardFooter>
        </Card>
      </div>

      {role === "entrepreneur" && (
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg font-medium text-gray-800">Your Venture Progress</CardTitle>
                <CardDescription>Track the development of your business</CardDescription>
              </div>
              <Link to="/dashboard/ventures">
                <Button variant="outline" size="sm" className="gap-1">
                  Update
                  <ArrowUpRight size={14} />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">Business Model</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-afrix-green h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>75%</span>
                  <span className="text-green-600">+8% this month</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">Market Validation</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-afrix-blue h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>60%</span>
                  <span className="text-green-600">+12% this month</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">Team Building</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-afrix-orange h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>40%</span>
                  <span className="text-green-600">+5% this month</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">Funding Readiness</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-afrix-purple h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>30%</span>
                  <span className="text-green-600">+10% this month</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {role === "mentor" && (
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg font-medium text-gray-800">Your Mentees</CardTitle>
                <CardDescription>Current entrepreneurs you're mentoring</CardDescription>
              </div>
              <Link to="/dashboard/mentees">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ArrowUpRight size={14} />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Amina Kimani", company: "EcoHarvest", industry: "Agriculture", stage: "Seed" },
                { name: "Tendai Moyo", company: "FinLink", industry: "Fintech", stage: "Pre-seed" },
                { name: "Kofi Mensah", company: "HealthConnect", industry: "Healthcare", stage: "Series A" }
              ].map((mentee, index) => (
                <Card key={index} className="border border-gray-200 shadow-none">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-afrix-blue to-afrix-purple text-white flex items-center justify-center font-bold">
                        {mentee.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="font-medium">{mentee.name}</h4>
                        <p className="text-sm text-gray-600">{mentee.company}</p>
                        <div className="flex mt-1 gap-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {mentee.industry}
                          </span>
                          <span className="bg-afrix-blue/10 text-afrix-blue text-xs px-2 py-1 rounded">
                            {mentee.stage}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {role === "funder" && (
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg font-medium text-gray-800">Investment Pipeline</CardTitle>
                <CardDescription>Ventures under consideration</CardDescription>
              </div>
              <Link to="/dashboard/pipeline">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ArrowUpRight size={14} />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Venture</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sector</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Location</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Ask</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "EcoHarvest", sector: "AgriTech", location: "Kenya", ask: "$250K", status: "Due Diligence" },
                    { name: "FinLink", sector: "FinTech", location: "Zimbabwe", ask: "$150K", status: "Review" },
                    { name: "MediConnect", sector: "HealthTech", location: "Ghana", ask: "$350K", status: "Screening" }
                  ].map((venture, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm font-medium">{venture.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{venture.sector}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{venture.location}</td>
                      <td className="px-4 py-3 text-sm font-medium">{venture.ask}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs
                          ${venture.status === 'Due Diligence' ? 'bg-green-100 text-green-600' : 
                          venture.status === 'Review' ? 'bg-blue-100 text-blue-600' : 
                          'bg-gray-100 text-gray-600'}`}>
                          {venture.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DashboardOverview;
