void function(w, d)
{
  'use strict';

  w.Render = class
  {
    constructor(selector, show = false)
    {
      this.draw = new Draw(selector);
      this.grid = new Grid(this.draw, show);
    }

    clear()
    {
      this.draw.clear();
    }

    image(src, xi, yi, wi, hi, w, h, cb)
    {
      this.draw.image(src,
        this.grid.x(xi),
        this.grid.y(yi),
        this.grid.span(wi),
        this.grid.span(hi),
        w, h, cb
      );
    }

    square(xi, yi, wi, hi, thickness, strokeColour, fillColour)
    {
      this.draw.square(
        this.grid.x(xi),
        this.grid.y(yi),
        this.grid.span(wi),
        this.grid.span(hi), thickness, strokeColour, fillColour);
    }
  }
}(window, document);
