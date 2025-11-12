import React from 'react';
import BookList from './components/BookList';
import './index.css';

const App = () => {
  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      isAvailable: true,
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      isAvailable: false,
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Historical Fiction',
      isAvailable: true,
    },
  ];

  return (
    <div className="app-container">
      <h1>📚 Digital Library</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;