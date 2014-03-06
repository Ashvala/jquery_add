jquery_add
==========

Inspired by [Herzult/SimplePHPEasyPlus](http://github.com/Herzult/SimplePHPEasyPlus), jquery_add is a jquery plugin that will allow you to add two numbers or more...

Check out the demo at: http://ashvala.github.io/jquery_add

Built in Functions:
===========

There are 3 built in functions:

- getNum()
- addEmUp()
- addEmUpAjax()

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
$("#no1").getNum();
```
will return the number as a parsed float.

----------
You can also send the data out on AJAX!

```
var url = "http://localhost:8080";
$(".number").addEmUpToAjax(url);
```

It creates a POST request and sends the added number over! Isn't that magical?

Bugs
==========

- Go figure.
- You're planning on using it. That's a pretty big bug...
