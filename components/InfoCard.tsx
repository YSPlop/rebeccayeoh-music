"use client";
import styled from 'styled-components';

// Define the CardContainer with a white background and fixed size
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 18rem;   /* Set a fixed width */
    height: 24rem;  /* Set a fixed height */
    background-color: white;
    padding: 1rem;  /* Add padding inside the card */
    border-radius: 1rem;  /* Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  /* Subtle shadow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    will-change: transform, box-shadow;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

const ImageCard = styled.img`
    width: 100%;   /* Full width of the card */
    height: auto;  /* Let the height be automatic to keep aspect ratio */
    max-height: 15rem; /* Set a max height to maintain square shape */
    object-fit: cover; 
    margin-bottom: 0.75rem;
    border-radius: 0.75rem;  /* Rounded corners for the image */

    /* Mobile view adjustments */
    @media (max-width: 768px) {
        max-height: 8rem; /* Smaller height for mobile */
    }
`;

const InfoTextWrapper = styled.div`
    display: flex;
    flex-grow: 1;  /* Allow the text wrapper to grow and take up the remaining space */
    align-items: center;  /* Vertically center the text */
    justify-content: center;  /* Horizontally center the text */
    text-align: center;  /* Center the text itself */
`;

const InfoText = styled.span`
    text-align: center;
    color: #4B5563; /* Tailwind's gray-600 */
    font-size: 1rem;

    /* Mobile view adjustments */
    @media (max-width: 768px) {
        font-size: 0.875rem; /* Smaller font size for mobile */
    }
`;

interface InfoCardProps {
    imageSrc: string;
    altText: string;
    description: string;
    extraText?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageSrc, altText, description, extraText }) => {
    return (
        <CardContainer>
            <ImageCard src={imageSrc} alt={altText} />
            <InfoTextWrapper>
                <InfoText>
                    {description} <br /> {extraText}
                </InfoText>
            </InfoTextWrapper>
        </CardContainer>
    );
};

export default InfoCard;
