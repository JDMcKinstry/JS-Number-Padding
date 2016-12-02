# JS-Number-Padding

----

#### Simple and easy way to "pad" numbers with 0's.

Use as simple as:

	padInt(2, 3) === "0002";
	padInt(2, -3) === 2000;
	padInt(2) === "02";

|OR|

	Number(2).pad(3) === "0002";
	Number(2).pad(-3) === 2000;
	Number(2).pad() === "02";
