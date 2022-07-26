void function(w, d)
{
  'use strict';

  w.Grid = class
  {
    constructor(draw, show = false)
    {
      this.draw  = draw;

      this.w     = this.draw.ctx.canvas.width;
      this.h     = this.draw.ctx.canvas.height;

      this.hw    = this.w * 0.5;
      this.hh    = this.h * 0.5;

      this.scale = 20;

      this.cell  = Math.pow(this.scale, (-1));
      this.cell *= this.w > this.h ? this.w : this.h;

      this.cv    = this.hh * Math.pow(this.cell, (-1));
      this.ch    = this.hw * Math.pow(this.cell, (-1));

      if (show)
      {
        this.show();
      }
    }

    x(i)
    {
      return (i * this.cell) + this.hw;
    }

    y(i)
    {
      return (i * this.cell) + this.hh;
    }

    span(i)
    {
      return i * this.cell;
    }

    show()
    {
      let s1, s2, i, j, k, l;

      s1 = 0.5 * this.w, i = s1, j = s1 - this.cell,
      s2 = 0.5 * this.h, k = s2, l = s2 - this.cell;

      for (; i < this.w; i += this.cell,
                         j -= this.cell,
                         k += this.cell,
                         l -= this.cell)
      {
        if (i == s1)
        {
          this.draw.line((0.5 * this.w), 0,
                         (0.5 * this.w), this.h, 1, [3,2], '#373a38');
        }
        else if (i < this.w)
        {
          this.draw.line(i, 0, i, this.h, 1, [2,2], '#323535');
        }

        if (k == s2)
        {
          this.draw.line(0,      (0.5 * this.h),
                         this.w, (0.5 * this.h), 1, [3,2], '#373a38');
        }
        else if (k < this.h)
        {
          this.draw.line(0, k, this.w, k, 1, [2,2], '#323535');
        }

        if (j > 0)
        {
          this.draw.line(j, 0, j, this.h, 1, [2,2], '#323535');
        }

        if (l > 0)
        {
          this.draw.line(0, l, this.w, l, 1, [2,2], '#323535');
        }
      }
    }
  }
}(window, document);
