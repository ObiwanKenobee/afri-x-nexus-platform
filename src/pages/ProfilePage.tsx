
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate saving profile data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <Tabs defaultValue="details">
        <TabsList className="mb-6">
          <TabsTrigger value="details">Personal Details</TabsTrigger>
          <TabsTrigger value="professional">Professional Info</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-800">Personal Information</CardTitle>
              <CardDescription>Update your personal details and how we can contact you</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveChanges}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+254 123 456 789" className="mt-1" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      rows={4} 
                      defaultValue="Entrepreneur focused on developing sustainable solutions for agricultural challenges in East Africa." 
                      className="mt-1" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <select id="country" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="kenya">Kenya</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="southAfrica">South Africa</option>
                      <option value="ghana">Ghana</option>
                      <option value="ethiopia">Ethiopia</option>
                      <option value="rwanda">Rwanda</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="Nairobi" className="mt-1" />
                  </div>
                </div>

                <Button type="submit" className="mt-6 bg-afrix-blue hover:bg-afrix-blue/90" disabled={isLoading}>
                  {isLoading ? "Saving changes..." : "Save Changes"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="professional">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-800">Professional Information</CardTitle>
              <CardDescription>Your business experience and expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveChanges}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Label htmlFor="companyName">Current Company/Venture</Label>
                    <Input id="companyName" defaultValue="EcoHarvest Solutions" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="role">Role/Position</Label>
                    <Input id="role" defaultValue="Founder & CEO" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <select id="industry" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="agriculture">Agriculture & AgriTech</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="fintech">Financial Services & FinTech</option>
                      <option value="energy">Energy & CleanTech</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="technology">Technology & Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="expertise">Areas of Expertise (select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                      {["Business Strategy", "Marketing", "Finance", "Operations", "Technology", "Product Development", "Sales", "Supply Chain", "Legal", "Human Resources"].map((skill) => (
                        <div key={skill} className="flex items-center">
                          <input type="checkbox" id={skill.replace(' ', '')} className="rounded border-gray-300 mr-2" />
                          <Label htmlFor={skill.replace(' ', '')} className="text-sm">{skill}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input id="linkedin" type="url" defaultValue="https://linkedin.com/in/johndoe" className="mt-1" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="website">Website/Portfolio</Label>
                    <Input id="website" type="url" defaultValue="https://ecoharvest.com" className="mt-1" />
                  </div>
                </div>

                <Button type="submit" className="mt-6 bg-afrix-blue hover:bg-afrix-blue/90" disabled={isLoading}>
                  {isLoading ? "Saving changes..." : "Save Changes"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-800">Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Password</h3>
                  <p className="text-sm text-gray-500">Update your password to keep your account secure</p>
                  <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" className="mt-1" />
                    </div>
                    <div></div>
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" className="mt-1" />
                    </div>
                  </div>
                  <Button className="mt-4 bg-afrix-blue hover:bg-afrix-blue/90">Change Password</Button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800">Notification Preferences</h3>
                  <p className="text-sm text-gray-500">Configure how and when we can contact you</p>
                  <div className="mt-4 space-y-3">
                    {[
                      { id: "emailNotifs", label: "Email Notifications" },
                      { id: "smsNotifs", label: "SMS Notifications" },
                      { id: "marketingEmails", label: "Marketing Emails" },
                      { id: "eventReminders", label: "Event Reminders" },
                    ].map((pref) => (
                      <div key={pref.id} className="flex items-center justify-between">
                        <Label htmlFor={pref.id}>{pref.label}</Label>
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none">
                          <input id={pref.id} type="checkbox" className="sr-only" defaultChecked={pref.id !== "marketingEmails"} />
                          <span className="inline-block h-5 w-5 translate-x-1 transform rounded-full bg-white transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-4 bg-afrix-blue hover:bg-afrix-blue/90">Save Preferences</Button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-red-600">Danger Zone</h3>
                  <p className="text-sm text-gray-500">Permanently delete your account and all of your data</p>
                  <Button variant="destructive" className="mt-4">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default ProfilePage;
