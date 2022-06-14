# algoholic

algorithmic toolkit for audio and visuals for pure data &amp; GEM.

## about

algoholic is a toolkit for creating algorithmic music and visuals using the open source multimedia programming environment [pure data & GEM](https://puredata.info) at version 0.50 and higher. Algoholic is designed to run on any computer that can run Pd including single board computers like the raspberry pi. Algoholic is similar to [else](https://github.com/porres/pd-else) but is built entirely using vanilla pd abstractions for increased portability and ease of installation.

## installation

Please ensure you are using Pd version 0.50 and higher because some objects will not work at lower version. Algoholic can be used as a self contained folder, new pd files created within the folder will have access to all the algoholic objects because Pd will search the local folder first for objects. You can also install the library to make it available to any patch by letting Pd know about it...

* clone algoholic into your existing Pd externals folder.
* alternatively clone to a different folder and add the path in pd preferences

## documentation

You can find documentation <a href="https://m-onz.github.io/algoholic/" target="_blank" rel="noreferrer">here</a>.

## author

This library was created and currently maintained by [m-onz](https://m-onz.net).

## listen

Hear some examples of music made with algoholic.

https://algoholic.bandcamp.com

## todo list

* constrained sequence : conseq
* integrate pdjs as an optional extension
