jquery_add
==========

Inspired by Herzult/SimplePHPEasyPlus, jquery_add is a jquery plugin that will allow you to add two numbers. 

Check out the demo at: http://ashvala.github.io/jquery_add

Built in Functions:
===========

There are 2 built in functions: 

- getNum()
- addEmUp()

Usage:
=========

First things first, add the number class to the div!

```
<div class="number" id="no1"> 33.3 </div>
<div class="number" id="no2"> 33.3 </div>
```
----------

To check if it works: 

```
console.log($(".number").addEmUp());
```
----------
If you want to just get the number that's been input on the first field: 

```
$("#no1").getNum()
```
will return the number as a parsed float. 

----------
Bugs
==========

- Go figure.
- You're planning on using it. That's a pretty big bug... 



