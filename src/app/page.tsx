import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WhyChooseUs } from "@/components/WhyChooseUS";


export default function Home() {
  return (
    <><h1 className="text-2xl text-center">helloo</h1>
    <HeroSection />
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
    </>
  );
}
