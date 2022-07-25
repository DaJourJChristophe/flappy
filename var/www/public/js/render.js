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

    image(src, xi, yi, wi, hi)
    {
      this.draw.image(src,
        this.grid.x(xi),
        this.grid.y(yi),
        this.grid.span(wi),
        this.grid.span(hi)
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
