/*
file: css/index.js
Copyright (C) 2022 Da'Jour J. Christophe. All rights reserved.
*/
void function(w, d)
{
  'use strict';

  Load.ready((e) =>
  {
    let bird, landscape, minefield;

    landscape = new Landscape();
    minefield = new MineField();
    bird      = new Bird();

    for (let i = -10; i < 10; i++)
    {
      landscape.add(new Cloud(i, 2.51, 1, 1));
      landscape.add(new Building(i, 3.51, 1, 2));
      landscape.add(new Bush(i, 5.51, 1, 1));
    }

    class Spawn
    {
      constructor()
      {
        this.cache = new Array();
        this.distance = 4;
        this.gap = 1;
        this.speed = undefined;

        this.maxRenderable = minefield.renderer.grid.scale / this.distance;
        this.step = Math.pow(minefield.renderer.grid.cell, (-1));
        this.computedDistance = this.distance * minefield.renderer.grid.cell;
      }

      run()
      {
        let i = -0.5 * minefield.renderer.grid.scale - this.distance;
        for (; i < 0.5 * minefield.renderer.grid.scale; i += this.distance)
        {
          this.createPipeCouple(i);
        }

        requestAnimationFrame(this.outerLoop.bind(this));
      }

      outerLoop()
      {
        this.createPipeCouple();
        this.slideLoop(0, this.outerLoop.bind(this));
      }

      slideLoop(i, cb)
      {
        if (i > this.computedDistance) { cb(); return; }
        minefield.clear();
        this.cacheLoop();
        requestAnimationFrame(() => {
          this.slideLoop((i+1), cb);
        });
      }

      cacheLoop(q)
      {
        this.cache = this.cache.map(itm => {
          itm.xi -= this.step;
          minefield.addTop(itm);
          minefield.add(this.minePartner(
            new Mine(itm.xi, itm.yi, itm.wi, itm.hi)));
          return itm;
        });
      }

      createPipeCouple(x)
      {
        if (this.cache.length >= this.maxRenderable)
        {
          this.cache.shift();
        }

        this.cache.push(this.mineSingular(x));
      }

      minePartner(mine)
      {
        mine.yi =  mine.yi + this.gap;
        mine.hi = -mine.yi + minefield.renderer.grid.cv;
        return mine;
      }

      mineSingular(x)
      {
        let y, w, h;
        x = x ? x : (0.5 * minefield.renderer.grid.scale);
        y = this.getRandomArbitrary(Math.round(-minefield.renderer.grid.cv) + 2,
                                    Math.round( minefield.renderer.grid.cv) - 2);
        w = 1;
        h = y + minefield.renderer.grid.cv;
        return new Mine(x, y, w, h);
      }

      getRandomArbitrary(min, max)
      {
        min = Math.ceil(min);
        return Math.floor(Math.random() * (Math.floor(max) - min) + min);
      }
    }

    var spawn = new Spawn();

    bird.render();

    spawn.run();
  });
}(window, document);
