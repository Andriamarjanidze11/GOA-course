import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('btn1');
const root = createRoot(container);
root.render(
  <button>btn1</button>,
  <button>btn2</button>,
  <button>btn3</button>
);

const P = <p>dudu</p>;
root.render(P);

const img = <img src='sdwededref'/>;
root.render(img);

const h1 = <h1>h1</h1>;
root.render(h1);

const h2 = <h2>h2</h2>;
root.render(h2);