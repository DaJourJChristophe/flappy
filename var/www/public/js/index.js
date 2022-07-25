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

    // landscape = new Landscape();
    minefield = new MineField();
    // bird      = new Bird();

    // for (let i = -10; i < 10; i++)
    // {
    //   landscape.add(new Cloud(i, 2, 1, 1));
    //   landscape.add(new Building(i, 3, 1, 2));
    //   landscape.add(new Bush(i, 5, 1, 1));
    // }

    function getRandomArbitrary(min, max)
    {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    function mineSingular(x)
    {
      let y, w, h;
      y = getRandomArbitrary(-5, 5);
      w = 1;
      h = 14 - Math.abs(y);
      return { x:x, y:y, w:w, h:h };
    }

    function minePartner(x, y, w, h)
    {
      const gap = 1;
      y = y + gap; h = 6 + -y;
      return { x:x, y:y, w:w, h:h };
    }

    const distance = 4;

    var mineTopCache = new Array();
    var mineBottomCache = new Array();
    let dim, mine;

    let innerLoop, outerLoop, onawait, onresolve;

    onresolve = (j,i,n) =>
    {
      // recurse
      innerLoop(j, (i+1), n);
    };

    onawait = (resolve, i) =>
    {
      dim = mineSingular(i);
      // put image async loads in parallel
      minefield.addTop(new Mine(dim.x, dim.y, dim.w, dim.h), function() {
        // mineTopCache.push(mine);
        dim = minePartner(dim.x, dim.y, dim.w, dim.h);
        minefield.add(new Mine(dim.x, dim.y, dim.w, dim.h), function() {
          // mineBottomCache.push(mine);
          resolve(i);
        });
      });
    };

    innerLoop = (j, i, n) =>
    {
      // stop case
      if (i > n) { outerLoop((j+1)); return; }

      // skip case
      if (0 !== (i+j) % distance)
      {
        innerLoop(j, (i+1), n);
        return;
      }

      new Promise((resolve) => {
        onawait.apply(null, [resolve, i]);
      }).then((i) => {
        onresolve.apply(null, [j, i, n]);
      });
    };

    outerLoop = (j) =>
    {
      // stop case
      if (0) { return; } // while running ..

      setTimeout(() => { // better block? :P
        minefield.clear();
        // blocking layer
        innerLoop(j, -10, 10); // <-- i, n
      }, 1000);
    };

    outerLoop(0); // <-- j
    // bird.render();
  });
}(window, document);
