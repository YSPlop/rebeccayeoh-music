"use client";
import styled from 'styled-components';
import InfoCard from './InfoCard'; // Importing the InfoCard component

const ParallaxContainer = styled.div`
    position: relative;
    height: 90vh; 
    overflow: hidden;
    background-image: url('/images/namecard.jpg'); 
    background-attachment: fixed; /* Parallax effect */
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5); 
    }
`;

const OverlayText = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000; /* Text color */
    text-align: center;
    z-index: 1;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content */
    justify-content: center; /* Center content vertically */
    width: 100%;
    min-height: 10vh; /* Ensure this takes at least some height */
    padding: 2rem; /* Add padding for content */
    background-color: #fce4f1; /* Using pink-100 */
`;

const InfoCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Allow wrapping of cards */
    justify-content: center; /* Center cards horizontally */
    gap: 1rem; /* Space between cards */
    width: 100%; /* Full width */

    /* Mobile view - two cards per row */
    @media (max-width: 768px) {
        & > div {
            width: calc(50% - 1rem); /* Two cards per row */
            height: 18rem; /* Fixed height for square shape */
            display: flex; /* Ensure flex properties work */
            flex-direction: column; /* Stack image and text */
            align-items: center; /* Center content */
        }
    }

    /* Larger screens */
    @media (min-width: 768px) {
        flex-direction: row; /* Change to row on larger screens */
        gap: 2rem; /* Space between cards */
    }
`;

const MainPageContent: React.FC = () => {
    const introMessage = "Are you interested in taking up piano lessons, but you've never had time before? Or getting your children into a music program for extra curricular activities? We take beginners of all ages!";

    return (
        <>
            <ParallaxContainer>
                <OverlayText>
                    <h1 className="text-6xl font-bold">Rebecca Yeoh Music</h1>
                    <p className="text-lg">Piano Lessons</p>
                </OverlayText>
            </ParallaxContainer>

            <ContentContainer>
                <h1 className="text-2xl font-bold text-gray-800 text-center px-10 mb-8">
                    {introMessage}
                </h1>
                <p className="text-lg text-gray-600 mb-4 text-center">
                    <span className="italic">Rebecca Yeoh Music</span> offers students an introduction to music in many ways!
                    Students can learn by themselves and progress towards AMEB exams or with their friends
                    in a small group setting with keyboards.
                </p>
                <p className="text-lg text-gray-600 mb-4 text-center">
                    Lessons are based in Lane Cove, the lower north shore of Sydney. Non school aged students &amp;
                    adults have the flexibility of having lessons in the comfort of their own home.
                </p>
                <p className="text-lg text-gray-600 mb-4 text-center">
                    <span className="font-bold">Students will learn:</span>
                </p>

                <InfoCardsContainer>
                    <InfoCard
                        imageSrc="/images/student-teacher.jpg"
                        altText="Student Teacher"
                        description="How to read and play music"
                        extraText="(classical, contemporary and fun songs)"
                    />
                    <InfoCard
                        imageSrc="/images/theory.jpg"
                        altText="Theory"
                        description="General knowledge"
                        extraText="(about music, including composers)"
                    />
                    <InfoCard
                        imageSrc="/images/student-teacher.jpg"
                        altText="Aural Skills"
                        description="Aural skills"
                        extraText="(pitch - listening and singing and rhythm)"
                    />
                    <InfoCard
                        imageSrc="/images/theory.jpg"
                        altText="Theory and Fundamentals"
                        description="Theory and fundamentals of music"
                    />
                </InfoCardsContainer>
            </ContentContainer>
        </>
    );
};

export default MainPageContent;
