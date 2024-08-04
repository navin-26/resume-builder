
import { toPng } from 'html-to-image';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { JSDOM } from 'jsdom';
import axios from 'axios';

// Function to convert React component to an image
export const componentToImage = async (Component, props) => {
  // Create a new DOM element to render the component into
  const dom = new JSDOM('<!DOCTYPE html><div id="root"></div>');
  const container = dom.window.document.getElementById('root');

  // Render the component to the container
  const componentHtml = ReactDOMServer.renderToString(<Component {...props} />);
  container.innerHTML = componentHtml;

  // Convert the container to an image
  const dataUrl = await toPng(container, { pixelRatio: 3 });

  return dataUrl;
};
