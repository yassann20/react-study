import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



  function Avater() {
    return (
      <img
        className="avater"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
    );
  }

  export default function Profile() {
    return (
      <Avater />
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Profile/>
);
