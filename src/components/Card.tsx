import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, description, href }) => {
  return (
    <Link href={href}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Card;