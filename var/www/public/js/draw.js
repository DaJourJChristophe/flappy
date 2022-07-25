/*
file: css/draw.js

Copyright (C) 2022 Da'Jour J. Christophe. All rights reserved.

A generic module for drawing objects/shapes onto the canvas.
*/
void function(w, d)
{
  'use strict';

  /*
  The methods in this class are real values and
  do not use any pixel maniuplation internally.
  */
  w.Draw = class
  {
    constructor(selector)
    {
      const canvasContextDimension = '2d';
      // In order to initialize the canvas we need properties
      // from the canvas dom which are need to be set after
      // the canvas context has been selected and stored. We
      // let this variable die with the function scope.
      let cvs = d.querySelector(selector);
      // Using a css selector, query the dom for the
      // target canvas element. Once found get the context
      // of the canvas and store as a property.
      this.ctx = cvs.getContext(canvasContextDimension);
      // For whatever reason, the canvas does not initialize
      // properly if we do not reset the canvas width and
      // height in relation to the context. Therefore, it is
      // a good idea to first set the width and height in
      // our stylesheet and then use those values to assign
      // to the canvas.
      this.ctx.canvas.width  = parseFloat(getComputedStyle(cvs).width);
      this.ctx.canvas.height = parseFloat(getComputedStyle(cvs).height);
    }

    image(src, x, y, w, h)
    {
      let img = new Image();
      img.addEventListener('load', () => {
        this.ctx.drawImage(img, x, y, w, h);
      });
      img.src = src;
    }

    /*
    Using real unaltered pixel values, draw a square
    onto the canvas.
    */
    square(x, y, w, h, strokeThickness, strokeColour, fillColour)
    {
      this.ctx.lineWidth   = strokeThickness;
      this.ctx.fillStyle   = fillColour;
      this.ctx.strokeStyle = strokeColour;

      this.ctx.setLineDash([]);

      this.ctx.beginPath();
      this.ctx.rect(x, y, w, h);

      if (strokeColour)
      {
        this.ctx.stroke();
      }

      if (fillColour)
      {
        this.ctx.fill();
      }
    }

    line(x1, y1, x2, y2, thickness, dash, colour)
    {
      this.ctx.lineWidth = thickness;
      this.ctx.strokeStyle = colour;
      this.ctx.setLineDash(dash);

      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  }
}(window, document);
