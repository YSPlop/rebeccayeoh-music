"use client";
import styled from 'styled-components';

const ParallaxContainer = styled.div`
    position: relative;
    height: 900px; 
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000; /* Text color */
    text-align: center;
    z-index: 1;
`;

const ImageCard = styled.img`
    width: 16rem;  
    height: 16rem; 
    object-fit: cover; 
    margin-bottom: 0.5rem;
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

            <div className="mx-auto w-[100%] md:w-[80%] bg-pink-100 h-screen items-center pt-20">
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
                <div className="flex flex-col md:flex-row justify-center md:space-x-8 mb-16">
                    <div className="flex flex-col items-center">
                        <ImageCard src="/images/student-teacher.jpg" alt="Description 1" />
                        <span className="text-center text-gray-600">
                            How to read and play music <br /> (classical, contemporary and fun songs)
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <ImageCard src="/images/theory.jpg" alt="Description 2" />
                        <span className="text-center text-gray-600">
                            General knowledge <br /> (about music, including composers)
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <ImageCard src="/images/theory.jpg" alt="Description 3" />
                        <span className="text-center text-gray-600">
                            Aural skills <br /> (pitch - listening and singing and rhythm)
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <ImageCard src="/images/theory.jpg" alt="Description 4" />
                        <span className="text-center text-gray-600">
                            Theory and fundamentals of music
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPageContent;
