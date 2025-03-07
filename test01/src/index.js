import React from 'react';
import './index.css';
import UserProfile from "./Props01"
import Items from "./Prop02"

const sampleItems = [
    { id: 1, name: "りんご", isVisible: true },
    { id: 2, name: "バナナ", isVisible: false },
    { id: 3, name: "みかん", isVisible: true },
    { id: 4, name: "ぶどう", isVisible: false },
    { id: 5, name: "いちご", isVisible: true }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Itmes/>
);
