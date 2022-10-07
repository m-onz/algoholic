
var fs = require('fs')

var name = 'demo';

function genInstrumentFile (name) {
  return `#N canvas 711 -7 450 300 12;
#N canvas 698 76 450 300 NETPD 0;
#X msg 6 9 version 0 0 1;
#N canvas 0 0 450 300 abslist 0;
#X msg 19 14 unstep;
#X msg 19 36 i2mx;
#X restore 5 36 pd abslist;
#X restore 5 7 pd NETPD 2 0;
#N canvas 364 482 450 300 \$1-${name} 1;
#X text 11 12 m-onz test;
#X obj 16 39 hsl 75 15 0 0 0 0 \$0-unstep-gui \$0.bli unstep 3 8 0
10 #dcdcdc #dcdcdc #000000 0 1;
#X restore 4 34 pd \$1-${name};
#N canvas 948 194 412 500 dsp 1;
#X obj 50 149 mtof;
#X obj 50 90 t f b;
#X obj 50 40 route note;
#X obj 50 62 t a b;
#X obj 50 121 - 12;
#X obj 50 16 r \$0-${name};
#X floatatom 15 269 5 0 0 0 - - - 0;
#X obj 28 177 bng 15 250 50 0 empty empty empty 17 7 0 10 #fcfcfc #000000
#000000;
#X obj 15 352 *~;
#X obj 16 426 switch~;
#X obj 14 298 osc~;
#X obj 16 401 i2mx \$1 ${name};
#X msg 131 280 0;
#X msg 93 280 1;
#X obj 135 252 del 100;
#X obj 209 301 loadbang;
#X obj 209 323 t b b;
#X obj 236 346 delay 1000;
#X msg 236 368 0;
#X msg 209 353 1;
#X obj 15 327 *~ 0.3;
#X connect 0 0 6 0;
#X connect 0 0 7 0;
#X connect 1 0 4 0;
#X connect 2 0 3 0;
#X connect 3 0 1 0;
#X connect 4 0 0 0;
#X connect 5 0 2 0;
#X connect 6 0 10 0;
#X connect 7 0 13 0;
#X connect 7 0 14 0;
#X connect 8 0 11 0;
#X connect 8 0 11 1;
#X connect 10 0 20 0;
#X connect 11 0 9 0;
#X connect 12 0 8 1;
#X connect 13 0 8 1;
#X connect 14 0 12 0;
#X connect 15 0 16 0;
#X connect 16 0 19 0;
#X connect 16 1 17 0;
#X connect 17 0 18 0;
#X connect 18 0 11 2;
#X connect 19 0 11 2;
#X connect 20 0 8 0;
#X restore 5 62 pd dsp;
#N canvas 555 364 518 380 guistuff 0;
#X obj 18 19 r \$0-unstep-gui;
#X msg 18 41 vis 1;
#X obj 18 65 unstep \$1 ${name};
#X obj 18 108 s \$0-${name};
#X connect 0 0 1 0;
#X connect 1 0 2 0;
#X connect 2 0 3 0;
#X restore 6 89 pd guistuff;
#X obj 100 6 netpd_head \$1 ${name};
#N canvas 0 0 450 300 declare 0;
#X restore 242 109 pd declare -path ./abs;`;
}

fs.writeFileSync('./'+name+'.pd', genInstrumentFile(name))
