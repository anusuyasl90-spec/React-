import React from 'react';

const BookCard = ({ title, author, genre, isAvailable }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p className={isAvailable ? 'available' : 'unavailable'}>
        {isAvailable ? 'In Stock' : 'Checked Out'}
      </p>
    </div>
  );
};

export default BookCard;