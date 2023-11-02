// import { lazy } from "react";
import AboutUsBanner from "../AboutUsBanner/AboutUsBanner";
import Blogs from "../Blogs/Blogs";
import ClientReviews from "../ClientReviews/ClientReviews";
import OurFeatures from "../OurFeatures/OurFeatures";
import OurGoals from "../OurGoals/OurGoals";
import OurTeam from "../OurTeam/OurTeam";
import SocialMediaReview from "../SocialMediaReview/SocialMediaReview";


const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
            <OurFeatures></OurFeatures>
            <OurTeam></OurTeam>
            <OurGoals></OurGoals>
            <Blogs></Blogs>
            <ClientReviews></ClientReviews>
            <SocialMediaReview></SocialMediaReview>
        </div>
    );
};

export default AboutUs;