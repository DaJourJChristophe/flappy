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
      landscape.add(new Cloud(i, 2, 1, 1));
      landscape.add(new Building(i, 3, 1, 2));
      landscape.add(new Bush(i, 5, 1, 1));
      landscape.addImage(new Block(i, 6, 1, .25));
      landscape.add(new CementBlock(i, 6.26, 1, 1.34));
    }



    minefield.add(new Mine(-5, -7.64, 1, 2.64));
    minefield.add(new Mine(-5, -3, 1, 9));

    minefield.add(new Mine(-2, -7.64, 1, 4.64));
    minefield.add(new Mine(-2, -1, 1, 7));

    minefield.add(new Mine(1, -7.64, 1, 3.64));
    minefield.add(new Mine(1, -2, 1, 8));

    minefield.add(new Mine(4, -7.64, 1, 5.64));
    minefield.add(new Mine(4, 0, 1, 6));

    minefield.add(new Mine(7, -7.64, 1, 9.64));
    minefield.add(new Mine(7, 4, 1, 2));



    bird.render();
  });
}(window, document);
