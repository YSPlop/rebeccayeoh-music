"use client";
import React from 'react';
import { Link } from '@nextui-org/react';
import styles from '../styles/bento.module.css'; // Adjust the import based on your folder structure

interface BentoCardProps {
  href: string;
  label: string;
  imageSrc: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ href, label, imageSrc }) => {
  return (
    <div className={styles.bentoLink}>
      <Link href={href} className={styles.bentoLink}>
        {/* Label */}
        <div className={styles.labelContainer}>
          <h3>{label}</h3>
        </div>

        {/* Image */}
        <img src={imageSrc} alt={label} className={styles.cardImage} />
      </Link>
    </div>
  );
};

export default BentoCard;