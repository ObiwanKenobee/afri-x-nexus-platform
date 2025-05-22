
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: "🚀",
    title: "Startup Incubator",
    description: "A 12-week intensive program helping early-stage founders validate ideas and build MVPs.",
    features: ["Business Model Canvas", "MVP Development", "Market Testing", "Initial Funding"],
  },
  {
    icon: "🌱",
    title: "Growth Accelerator",
    description: "For established startups looking to scale operations and secure Series A funding.",
    features: ["Growth Strategy", "Investor Matching", "Market Expansion", "Team Building"],
  },
  {
    icon: "🔍",
    title: "Innovation Lab",
    description: "Experimental program focused on developing cutting-edge solutions for African challenges.",
    features: ["R&D Support", "Technical Mentorship", "Prototype Testing", "Patent Guidance"],
  },
  {
    icon: "🤝",
    title: "Corporate Partnership",
    description: "Connect established businesses with innovative startups for mutual growth opportunities.",
    features: ["B2B Networking", "Joint Ventures", "Corporate Innovation", "Market Access"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-16 bg-afrix-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-afrix-blue sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored support for entrepreneurs at every stage of their journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="text-4xl mb-2">{program.icon}</div>
                <CardTitle className="text-2xl font-bold text-afrix-blue">{program.title}</CardTitle>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-afrix-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-afrix-blue hover:bg-afrix-blue/90">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/programs">
            <Button variant="outline" className="text-afrix-blue">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
