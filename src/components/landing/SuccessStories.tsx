
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    id: 1,
    name: "Amara Okafor",
    company: "EcoHarvest",
    location: "Nigeria",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    quote: "AFRI-X connected us with investors who understood our vision for sustainable agriculture technology. Our revenue has grown 300% since joining the platform.",
    funding: "$1.2M Seed Round",
  },
  {
    id: 2,
    name: "Kwame Mensah",
    company: "HealthConnect",
    location: "Ghana",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80",
    quote: "The mentorship we received through AFRI-X helped us refine our telemedicine solution for rural communities. We're now serving over 50,000 patients monthly.",
    funding: "$800K Angel Investment",
  },
  {
    id: 3,
    name: "Nala Mbeki",
    company: "SolarEase",
    location: "South Africa",
    image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    quote: "The AI-powered market insights helped us identify untapped regions for our solar solutions. Within 18 months, we expanded to 5 new countries.",
    funding: "$3M Series A",
  },
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-afrix-blue sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the entrepreneurs transforming Africa through innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-12 w-full">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-afrix-blue">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.company} | {story.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{story.quote}"</p>
                  <div className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                    {story.funding}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
