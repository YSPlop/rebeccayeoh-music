"use client";

const MainPageContent: React.FC = () => {

    return (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1700px] bg-pink-100 h-full flex flex-col items-center pt-32">
            <h1 className="text-2xl font-bold text-gray-800 text-center px-10 mb-8">
                Are you interested in taking up piano lessons, but you've never had time before?
                Or getting your children into a music program for extra curricular activities?
                We take beginners of all ages!
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
            <div className="flex justify-center space-x-8 mb-16">
                <div className="flex flex-col items-center">
                    <img src="/path/to/image1.jpg" alt="Description 1" className="w-32 h-32 object-cover mb-2" />
                    <span className="text-center text-gray-600">Caption for Image 1</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/path/to/image2.jpg" alt="Description 2" className="w-32 h-32 object-cover mb-2" />
                    <span className="text-center text-gray-600">Caption for Image 2</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/path/to/image3.jpg" alt="Description 3" className="w-32 h-32 object-cover mb-2" />
                    <span className="text-center text-gray-600">Caption for Image 3</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/path/to/image4.jpg" alt="Description 4" className="w-32 h-32 object-cover mb-2" />
                    <span className="text-center text-gray-600">Caption for Image 4</span>
                </div>
            </div>
        </div>
    );

};
export default MainPageContent;