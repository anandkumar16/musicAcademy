import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WhyChooseUs } from "@/components/WhyChooseUS";


export default function Home() {
  return (
    <>
    <HeroSection />
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <Instructors/>
    <Footer/>
    </>
  );
}
