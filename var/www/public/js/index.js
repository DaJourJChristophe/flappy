/*
file: css/index.js
Copyright (C) 2022 Da'Jour J. Christophe. All rights reserved.
*/
void function(w, d)
{
  'use strict';

  // The default namespace for canvas css query-selector.
  const DEFAULT_CANVAS_SELECTOR = 'body .pg .cvs';

  Load.ready((e) =>
  {
    // Create a new draw object to assist with drawing
    // shapes and objects to the canvas.
    let draw = new Draw(DEFAULT_CANVAS_SELECTOR);
    // Draw a square onto the canvas. This is our primary
    // character block. Users will have control of this
    // block during the games runtime.
    draw.square(200, 400, 75, 75, 2, '#00f', '#4780bc');
  });
}(window, document);
