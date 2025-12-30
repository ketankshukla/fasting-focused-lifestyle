import React, { useState, useEffect } from "react";

const quotes = [
  {
    text: "The pain you feel today will be the strength you feel tomorrow.",
    author: "Unknown",
  },
  {
    text: "Your body can stand almost anything. It's your mind that you have to convince.",
    author: "Unknown",
  },
  {
    text: "Fasting is the greatest remedy – the physician within.",
    author: "Paracelsus",
  },
  {
    text: "The best of all medicines is resting and fasting.",
    author: "Benjamin Franklin",
  },
  {
    text: "Hunger is the first element of self-discipline.",
    author: "Mahatma Gandhi",
  },
  { text: "Instead of using medicine, rather fast a day.", author: "Plutarch" },
  {
    text: "Fasting is a fiery weapon. It has its own science.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The discipline of fasting breaks you out of the world's routine.",
    author: "Jentezen Franklin",
  },
  {
    text: "To lengthen thy life, lessen thy meals.",
    author: "Benjamin Franklin",
  },
  { text: "Fasting is the first principle of medicine.", author: "Rumi" },
  {
    text: "When you fast, you tap into your body's ability to heal itself.",
    author: "Dr. Jason Fung",
  },
  {
    text: "Every accomplishment starts with the decision to try.",
    author: "John F. Kennedy",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The body achieves what the mind believes.",
    author: "Napoleon Hill",
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn",
  },
  { text: "The greatest wealth is health.", author: "Virgil" },
  {
    text: "It's not about being the best. It's about being better than you were yesterday.",
    author: "Unknown",
  },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  {
    text: "Success doesn't just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  {
    text: "Don't stop when you're tired. Stop when you're done.",
    author: "Unknown",
  },
  {
    text: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown",
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  { text: "Little things make big days.", author: "Unknown" },
];

const MotivationalQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getQuoteOfTheDay = () => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 86400000
    );
    return quotes[dayOfYear % quotes.length];
  };

  const getRandomQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    setCurrentQuote(getQuoteOfTheDay());
  }, []);

  if (!currentQuote) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur rounded-2xl p-4 sm:p-6 border border-purple-500/30">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-white">💫 Daily Inspiration</h3>
        <button
          onClick={getRandomQuote}
          className="px-3 py-1 bg-white/10 text-white text-xs rounded-full hover:bg-white/20 transition-all"
        >
          🔄 New Quote
        </button>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <blockquote className="text-center">
          <p className="text-lg sm:text-xl text-white font-medium italic leading-relaxed">
            "{currentQuote.text}"
          </p>
          <footer className="mt-3 text-sm text-purple-300">
            — {currentQuote.author}
          </footer>
        </blockquote>
      </div>

      <div className="flex justify-center mt-4 gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">
            ✨
          </span>
        ))}
      </div>
    </div>
  );
};

export default MotivationalQuotes;
