/*
file: css/load.js

Copyright (C) 2022 Da'Jour J. Christophe. All rights reserved.

As opposed to the JQuery loader, this loader is a light-weight
solution to controlling the loading sequence of a page load.
This loader in particular however, can only load dom content
loaded and page load completion targets.
*/
void function(w,d)
{
  'use strict';

  /*
  A set of static methods that allow the end-user
  to execute scripts at two points in the loading
  sequence.
  */
  w.Load = class
  {
    /*
    A namespace for setting an on page load completion
    loading callback function.
    */
    static ready(callback)
    {
      const ns = 'ready';
      Load.on(ns, callback);
    }

    /*
    A namespace for setting an on dom content loaded
    loading callback function.
    */
    static load(callback)
    {
      const ns = 'load';
      Load.on(ns, callback);
    }

    /*
    An internalized parent method for setting the loading
    callback using an action parameter.
    */
    static on(action, callback)
    {
      const evt = 'readystatechange';
      d.addEventListener(evt, (e) => {
        Load.onStateChange.apply(null, [e, action, callback]);
      });
    }

    /*
    A method with a singular context for executing
    the callback function after the page has loaded.
    */
    static onReady(e, callback)
    {
      if (w.removeEventListener)
      {
        const evt = 'load';
        e.target.removeEventListener(evt, Load.onReady);
      }

      callback(e);
    }

    /*
    A method with a singular context for executing
    the callback function after the dom has loaded.
    */
    static onLoad(e, callback)
    {
      if (w.removeEventListener)
      {
        const evt = 'DOMContentLoaded';
        e.target.removeEventListener(evt, Load.onLoad);
      }

      callback(e);
    }

    /*
    Differentiate between the loading sequence parameters
    produced by the browser api. Some of which, i.e. browsers
    that use different namespaces, perform the same action.
    Thus, we utilize a fall-through case on these params.
    */
    static onStateChange(e, action, callback)
    {
      switch (e.target.readyState)
      {
        case 'interactive':
        case 'initialized':
          if (action !== 'load')
          {
            break;
          }
          if (w.addEventListener)
          {
            const evt = 'DOMContentLoaded';
            w.addEventListener(evt, (e) => {
              Load.onLoad.apply(null, [e, callback]);
            });
          }
          break;

        case 'complete':
        case 'loaded':
          if (w.removeEventListener)
          {
            const evt = 'readystatechange';
            e.target.removeEventListener(evt, Load.onStateChange);
          }
          if (action !== 'ready')
          {
            break;
          }
          if (w.addEventListener)
          {
            const evt = 'load';
            w.addEventListener(evt, (e) => {
              Load.onReady.apply(null, [e, callback]);
            });
          }
          break;
      }
    }
  }
}(window, document);
