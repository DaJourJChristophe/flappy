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

    clearRect(xi, yi, wi, hi)
    {
      this.draw.clearRect(
        this.grid.x(xi),
        this.grid.y(yi),
        this.grid.span(wi),
        this.grid.span(hi)
      );
    }

    clear()
    {
      this.draw.clear();
    }

    image(img, xi, yi, wi, hi, w, h)
    {
      this.draw.image(img,
        this.grid.x(xi),
        this.grid.y(yi),
        this.grid.span(wi),
        this.grid.span(hi),
        w, h
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
