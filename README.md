# algoholic

<img src="docs/hedgehog.png" />

algorithmic toolkit for audio and visuals for pure data &amp; GEM. 

## about

algoholic is a toolkit for creating algorithmic music and visuals using the open source multimedia programming environment [pure data & GEM](https://puredata.info) at version 0.50 and higher. Algoholic is designed to run on any computer that can run Pd including single board computers like the raspberry pi. Algoholic is similar to [else](https://github.com/porres/pd-else) but is built entirely using vanilla pd abstractions for increased portability and ease of installation.

## objects

* mseq : m-onz sequencer
* randseq : random sequence
* playdir~ : play sound directory

### mseq

m-onz sequencer: Sequencing object similar to [else/sequencer].

### randseq

Random sequence: An object that can generate random sequences for mseq or else/sequencer

### playdir~

Play sound directory: An object that plays wav files from a folder.

## installation

Please ensure you are using Pd version 0.50 and higher because some objects will not work at lower version.

* clone algoholic into your existing Pd externals folder.
* alternatively clone to a different folder and add the path in pd preferences

## author

This library was created and currently maintained by [m-onz](https://m-onz.net) a.k.a. Stephen Monslow.

## listen

Here examples of music made with algoholic.

https://algoholic.bandcamp.com
