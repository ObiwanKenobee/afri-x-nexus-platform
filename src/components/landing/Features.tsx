
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🤝",
    title: "Expert Mentorship",
    description: "Connect with experienced entrepreneurs and industry experts who've built successful ventures across Africa."
  },
  {
    icon: "💰",
    title: "Funding Access",
    description: "Get matched with investors looking specifically for African innovation and impact-driven businesses."
  },
  {
    icon: "🧠",
    title: "AI Business Insights",
    description: "Leverage data-driven recommendations for business growth, market entry, and strategic decisions."
  },
  {
    icon: "🚀",
    title: "Growth Resources",
    description: "Access templates, guides, and tools designed specifically for scaling in African markets."
  },
  {
    icon: "🌍",
    title: "Pan-African Network",
    description: "Join a community of innovators from across the continent to collaborate and expand your reach."
  },
  {
    icon: "💡",
    title: "SDG Alignment",
    description: "Develop business models that advance sustainable development goals while building profitable ventures."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-afrix-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-afrix-blue sm:text-4xl">
            Why Choose AFRI-X?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides comprehensive support for your entrepreneurial journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-afrix-blue mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
