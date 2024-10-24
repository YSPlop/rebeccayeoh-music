// components/Testimonials.tsx

import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <div>
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <div className="text-center">
                            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                                Our happy clients say about us
                            </h2>
                        </div>

                        <div className="mt-8 text-center md:mt-16 md:order-3">
                        </div>

                        <div className="relative mt-10 md:mt-24 md:order-2">
                            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                                <div
                                    className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                                    style={{
                                        background:
                                            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                                    }}
                                ></div>
                            </div>

                            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                                <TestimonialCard
                                    name="Felicity"
                                    title=""
                                    review="Over the past 5 years each of my three children have taken piano lessons with Rebecca and I can not speak more highly of her. She makes the lessons enjoyable and finds different ways to motivate each of them. She is a true natural when it comes to teaching the piano."
                                    imgSrc="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                                />

                                <TestimonialCard
                                    name="Georgia M"
                                    title=""
                                    review="Bec has taught my three children piano for over three years and I highly recommend her and her team. Bec is patient, positive, and encouraging, whilst also setting clear and reasonable expectations (with incentives along the way) to keep the kids motivated to practise, and enjoying the leaning process. Bec has tailored her approach for each of my children and chooses music the kids can relate to and love playing."
                                    imgSrc="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                                />

                                <TestimonialCard
                                    name="Mandy"
                                    title=""
                                    review="My daughter has been taking piano lessons from Bec and the team for several years and loves them. Bec is kind, patient and motivates kids to achieve their best with lessons appropriately tailored to ability and to ensure the child enjoys playing and doesn’t get bored. Ps. We love the stickers and prizes!"
                                    imgSrc="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                                />
                                <TestimonialCard
                                    name="Wendy L"
                                    title=""
                                    review="Rebecca has been teaching my daughter piano since kindergarten (four years and counting) and I couldn't be more pleased with the progress she has made under her guidance. My daughter looks forward to her lessons every week, which speaks volumes about Rebecca’s approach as a teacher. She is patient, encouraging and allows my daughter to learn at her own pace, fostering both confidence and a genuine love for music. I highly recommend Rebecca to anyone looking for a dedicated and talented piano teacher!"
                                    imgSrc="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                                />
                                <TestimonialCard
                                    name="Claire & Rick "
                                    title=""
                                    review="Having started off our piano journey with a different teacher and moving to Bec after a year, I can confidently say she is amazing. Bec now teaches all 3 of our kids and we’re constantly in awe of their progress. She somehow entices them all to practice willingly, and to actually enjoy it! We would recommend Bec without any hesitation."
                                    imgSrc="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

type TestimonialCardProps = {
    name: string;
    title: string;
    review: string;
    imgSrc: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, review, imgSrc }) => {
    return (
        <div className="flex flex-col overflow-hidden shadow-xl rounded-3xl transition-transform transform hover:translate-y-[-10px] hover:scale-105 hover:shadow-lg duration-300">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                    {/* keep the stars in case client wants it */}
                    {/* <div className="flex items-center">
                        {Array(5)
                            .fill(0)
                            .map((_, index) => (
                                <svg
                                    key={index}
                                    className="w-5 h-5 text-[#FDB241]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                    </div> */}

                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“{review}”</p>
                    </blockquote>
                </div>

                <div className="flex items-center mt-8">
                    <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={imgSrc} alt="" />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Testimonials;
