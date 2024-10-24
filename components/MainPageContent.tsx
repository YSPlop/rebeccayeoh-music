"use client";

const MainPageContent: React.FC = () => {

    const introMessage = "Are you interested in taking up piano lessons, but you've never had time before? Or getting your children into a music program for extra curricular activities? We take beginners of all ages!";

    return (
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
                Lessons are based in Lane Cove, the lower north shore of Sydney. Non school aged students &
                adults have the flexibility of having lessons in the comfort of their own home.
            </p>
            <p className="text-lg text-gray-600 mb-4 text-center">
                <span className="font-bold">Students will learn:</span>
            </p>
            <div className="flex flex-col md:flex-row justify-center space-x-8 mb-16">
                <div className="flex flex-col items-center">
                    <img src="/images/student-teacher.jpg" alt="Description 1" className="w-64 h-64 object-cover mb-2" />
                    <span className="text-center text-gray-600">
                        How to read and play music <br /> (classical, contemporary and fun songs)
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/theory.jpg" alt="Description 1" className="w-64 h-64 object-cover mb-2" />
                    <span className="text-center text-gray-600">
                        General knowledge <br /> (about music, including composers)
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/student-teacher.jpg" alt="Description 1" className="w-64 h-64 object-cover mb-2" />
                    <span className="text-center text-gray-600">
                        Aural skills <br /> (pitch - listening and singing and rhythm)
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/student-teacher.jpg" alt="Description 1" className="w-64 h-64 object-cover mb-2" />
                    <span className="text-center text-gray-600">
                        Theory and fundamentals of music
                    </span>
                </div>
            </div>
        </div>
    );

};
export default MainPageContent;