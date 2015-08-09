# Spray Dots
We explore painting things that move with dots that follow.
We use placement and motion in the plane to represent abstract concepts 
rather than precise motion in the domain.

We developed
this idea for drawing factory locations on a map where clustering
of the factories physical locations made no traditional map scale or
projection suitable. We approximated the effect of a wall map filled
with push-pins by placing dots as close to the proper map location
as possible without overlapping neighboring dots.
[bl.ocks](http://bl.ocks.org/wardcunningham/5894027)

We applied the same technique to visualize the progress of 
concurrent webserver transactions. Transaction progress will slow under load.
Our dots slow proportionally and collide with more neighbors.
The visual effect shows general contention without suggesting
more meaning than that congestion and slowness can correlate.
[bl.ocks](http://bl.ocks.org/wardcunningham/5861122)

Here we revisit the technique using fabricated data and step by step
development of the d3 code necessary to render such well behaved dots.

We choose evolving voter preference as a domain. Voters naturally cluster
and polling data seeks to observe their motion between them. This
choice is inconsequential in that our work here is much more about
programming this class of visualizations than delivering a finished
package.

# Install
We develop the visualization as static html/javascript files
that can be conveniently viewed and edited without first being
sent through a webserver. We anticipate artifacts similarly developed will
be bundled into complete web properties using, for example, browserify.

With [git](https://git-scm.com/downloads)
and [npm](https://nodejs.org/download/) installed, type:
```
git clone ...
cd ...
npm install
open index.html
```
Where `...` represents this repository.

# Browse
We developed this example program in small steps committing
changes all along the way. This sequence is easily browsed
on github working either forward or backwards.

To view the development advancing forward through commits
start at the list of commits and then advance through each
one cronologically while possibly viewing complete files 
for context.

[list](https://github.com/WardCunningham/spray-dots/commits/master) =>
[commit](https://github.com/WardCunningham/spray-dots/commit/dabf2d0374c5bba2dc221f9d54479f28360044d6) =>
[view](https://github.com/WardCunningham/spray-dots/blob/dabf2d0374c5bba2dc221f9d54479f28360044d6/index.html)

To view the development backwards start with a view of a current file,
use blame to establish what commit contributed the code of interest,
choose a commit and then view the files it produced. Reapply blame to
step further back into the developmental history.


[list](https://github.com/WardCunningham/spray-dots/tree/38f2107916a69d1de7bb26e25a04777d687e00af) =>
[file](https://github.com/WardCunningham/spray-dots/blob/38f2107916a69d1de7bb26e25a04777d687e00af/index.html) =>
[blame](https://github.com/WardCunningham/spray-dots/blame/38f2107916a69d1de7bb26e25a04777d687e00af/index.html) =>
[commit](https://github.com/WardCunningham/spray-dots/commit/c419441a13aca8cff73e0aaa430ae298f0653417) =>
[view](https://github.com/WardCunningham/spray-dots/blob/c419441a13aca8cff73e0aaa430ae298f0653417/index.html) =>
[blame](https://github.com/WardCunningham/spray-dots/blame/c419441a13aca8cff73e0aaa430ae298f0653417/index.html) =>
...
