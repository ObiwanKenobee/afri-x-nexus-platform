
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-afrix-blue sm:text-5xl md:text-6xl">
                Empowering Africa's <span className="gradient-text">Entrepreneurial Future</span>
              </h1>
              <p className="mt-6 text-base text-gray-600 sm:text-lg md:text-xl">
                AFRI-X connects African entrepreneurs with mentors, funders, and developers
                to build sustainable businesses powered by data and AI insights.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link to="/register">
                  <Button className="bg-afrix-blue hover:bg-afrix-blue/90 text-lg px-8 py-6">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/#programs">
                  <Button variant="outline" className="text-lg px-8 py-6 mt-3 sm:mt-0">
                    Explore Programs
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-afrix-blue/80 flex items-center justify-center text-white font-medium`}>
                      {i}
                    </div>
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">
                  Joined by <span className="font-semibold text-afrix-blue">2,500+ entrepreneurs</span> from 30+ African countries
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6 flex items-center">
            <div className="rounded-xl bg-gradient-to-tr from-afrix-blue via-afrix-purple to-afrix-orange p-1 shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-lg bg-white p-6 sm:p-8">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt="African Entrepreneurs"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-afrix-green text-white">
                        AI
                      </span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">AI-Powered Insights</h3>
                      <p className="text-sm text-gray-500">Get real-time business analytics and market intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
