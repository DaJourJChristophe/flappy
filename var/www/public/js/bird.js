void function(w, d)
{
  'use strict';

  const DEFAULT_BIRD_WIDTH = 0.65;
  const DEFAULT_BIRD_HEIGHT = 0.475;

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
      this.renderer.image(YELLOWBIRDIMAGE, -8, -1,
        DEFAULT_BIRD_WIDTH, DEFAULT_BIRD_HEIGHT, 34, 24);
    }
  };
}(window, document);
