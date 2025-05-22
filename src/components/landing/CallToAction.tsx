
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-afrix-blue to-afrix-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Start Your Entrepreneurial Journey?
        </h2>
        <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
          Join thousands of African founders building impactful and profitable businesses.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register">
            <Button className="bg-afrix-orange hover:bg-afrix-orange/90 text-lg px-8 py-6">
              Join AFRI-X Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
