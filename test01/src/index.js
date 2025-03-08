import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Items from "./Props02.js";

const sampleItems = [
    { id: 1, name: "りんご", isVisible: true },
    { id: 2, name: "バナナ", isVisible: false },
    { id: 3, name: "みかん", isVisible: true },
    { id: 4, name: "ぶどう", isVisible: false },
    { id: 5, name: "いちご", isVisible: true }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Items item={sampleItems} />
);
