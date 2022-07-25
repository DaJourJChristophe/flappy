void function(w, d)
{
  'use strict';

  w.Bird = class
  {
    constructor()
    {
      // The character namespace for canvas css query-selector.
      const characterCanvasSelector = 'body .pg .cvs.character';
      // Create a new draw object to assist with drawing
      // shapes and objects to the canvas for the character.
      this.renderer = new Render(characterCanvasSelector);
    }

    render()
    {
      // Draw a square onto the canvas. This is our primary
      // character block. Users will have control of this
      // block during the games runtime.
      this.renderer.square(-8, -1, 1, 1, 2, '#00f', '#4780bc');
    }
  };
}(window, document);
