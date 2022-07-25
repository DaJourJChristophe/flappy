void function(w, d)
{
  'use strict';

  class LandscapeImage
  {
    constructor(xi, yi, wi, hi)
    {
      this.hi  = hi;
      this.wi  = wi;
      this.xi  = xi;
      this.yi  = yi;
    }
  };

  class LandscapeObject
  {
    constructor(xi, yi, wi, hi)
    {
      this.hi = hi;
      this.wi = wi;
      this.xi = xi;
      this.yi = yi;
    }
  };

  w.Block = class extends LandscapeImage
  {
    constructor(xi, yi, wi, hi)
    {
      super(xi, yi, wi, hi);
      this.src = '../img/block.png';
    }
  };

  w.Building = class extends LandscapeObject
  {
    constructor(xi, yi, wi, hi)
    {
      super(xi, yi, wi, hi);

      this.st = 2;
      this.sc = null;
      this.fc = '#3f89ea';
    }
  };

  w.Bush = class extends LandscapeObject
  {
    constructor(xi, yi, wi, hi)
    {
      super(xi, yi, wi, hi);

      this.st = 2;
      this.sc = null;
      this.fc = '#d87365';
    }
  };

  w.Cloud = class extends LandscapeObject
  {
    constructor(xi, yi, wi, hi)
    {
      super(xi, yi, wi, hi);

      this.st = 2;
      this.sc = null;
      this.fc = '#e1e7ef';
    }
  };

  w.Landscape = class
  {
    constructor()
    {
      // The landscape namespace for canvas css query-selector.
      const landscapeCanvasSelector = 'body .pg .cvs.landscape';
      // Create a new draw object to assist with drawing
      // shapes and objects to the canvas for the landscape.
      this.renderer = new Render(landscapeCanvasSelector, true);
    }

    addImage(img)
    {
      this.renderer.image(img.src,
        img.xi,
        img.yi,
        img.wi,
        img.hi
      );
    }

    add(object)
    {
      // Draw a square onto the canvas. This represents a single
      // spawned landscape object.
      this.renderer.square(
        object.xi,
        object.yi,
        object.wi,
        object.hi,
        object.ts,
        object.sc,
        object.fc
      );
    }
  };
}(window, document);
