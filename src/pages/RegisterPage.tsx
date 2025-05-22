
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-afrix-blue">Join the AFRI-X Community</h1>
                <p className="mt-2 text-lg text-gray-600">
                  Create an account to connect with mentors, access funding, and leverage AI-powered business insights.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-afrix-blue/10 p-4 rounded-lg">
                  <div className="text-2xl text-afrix-blue mb-2">🚀</div>
                  <h3 className="font-bold text-afrix-blue">For Entrepreneurs</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Get mentorship, funding opportunities, and AI-driven business insights for your venture.
                  </p>
                </div>
                <div className="bg-afrix-green/10 p-4 rounded-lg">
                  <div className="text-2xl text-afrix-green mb-2">🤝</div>
                  <h3 className="font-bold text-afrix-green">For Mentors</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Share your expertise and help shape the next generation of African entrepreneurs.
                  </p>
                </div>
                <div className="bg-afrix-orange/10 p-4 rounded-lg">
                  <div className="text-2xl text-afrix-orange mb-2">💰</div>
                  <h3 className="font-bold text-afrix-orange">For Funders</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Discover vetted investment opportunities across the African continent.
                  </p>
                </div>
                <div className="bg-afrix-purple/10 p-4 rounded-lg">
                  <div className="text-2xl text-afrix-purple mb-2">💻</div>
                  <h3 className="font-bold text-afrix-purple">For Developers</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Build solutions for growing ventures and participate in tech challenges.
                  </p>
                </div>
              </div>

              <p className="text-gray-600">
                Already have an account? <Link to="/login" className="text-afrix-blue hover:underline font-medium">Sign in</Link> to access your dashboard.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <RegisterForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
