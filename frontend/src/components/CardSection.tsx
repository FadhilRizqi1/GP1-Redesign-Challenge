// src/components/CardSection.tsx
import React from "react";

interface CardData {
  title: string;
  image: string;
  link: string;
}

interface CardSectionProps {
  sectionTitle: string;
  cards: CardData[];
}

export default function CardSection({ sectionTitle, cards }: CardSectionProps) {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16">
      {/* Judul Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionTitle}</h2>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
              <a
                href={card.link}
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
