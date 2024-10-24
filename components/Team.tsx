// components/TeamComponent.tsx
import Image from 'next/image';
import { FC } from 'react';

type TeamComponentProps = {
  text: JSX.Element;
  name: string;
  imageUrl: string; // URL for the image
};

const TeamComponent: FC<TeamComponentProps> = ({ text, name, imageUrl }) => {
  return (
    <section className="bg-background-pink text-black py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Text content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">
            {name}
          </h2>
          <p className="text-gray-800 mb-6">
            {text}
          </p>
        </div>

        {/* Right side: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
