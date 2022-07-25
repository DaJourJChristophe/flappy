void function(w, d)
{
  'use strict';

  w.Mine = class
  {
    constructor(xi, yi, wi, hi)
    {
      this.hi = hi;
      this.wi = wi;
      this.xi = xi;
      this.yi = yi;
    }
  };

  w.MineField = class
  {
    constructor()
    {
      // The landmines namespace for canvas css query-selector.
      const landminesCanvasSelector = 'body .pg .cvs.landmines';
      // Create a new draw object to assist with drawing
      // shapes and objects to the canvas for the landmines.
      this.renderer = new Render(landminesCanvasSelector);
    }

    add(mine)
    {
      // Draw a square onto the canvas. This represents a single
      // spawned landmine object.
      this.renderer.square(
        mine.xi,
        mine.yi,
        mine.wi,
        mine.hi, 2, '#396b2c', '#719e66');
    }
  };
}(window, document);
