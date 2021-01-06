If you're using browserify in the wild, share your experiences here! A short "we use this" or a full writeup is fine.

## [preamble](https://github.com/jeffschwartz/preamble)

**_Preamble_** is a powerful JavaScript BDD testing framework backed by a powerful assertion engine that your suites interface with through a simple to use but powerful API. Preamble makes the task of authoring tests easy, intuitive and even fun. Built with browserify.

## [browserling](https://browserling.com)

Interactive cross-browser testing. All built with browserify.

## [testling](https://ci.testling.com)

We use browserify to bundle up all the browser tests that we create ci badges for like these:

[![coverify](https://ci.testling.com/substack/coverify.png)](https://ci.testling.com/substack/coverify)

## [Getable](https://getable.com)

Getable is a construction equipment rental management and procurement system. We use browserify (through [atomify](http://github.com/techwraith/atomify)) to bundle up all of our app code for all of our apps.

## [SignForms.com](http://signforms.com)

SignForms.com is a fast and easy way to get documents signed digitally. We use browserify for all of the app's client-side code.

## [RequireBin.com](http://requirebin.com)

An in-browser code editor for making small shareable demos and applications using modules from NPM.

## [run.south.im](http://run.south.im/)

The opening titles for [Web Directions South 2013](http://webdirections.org/wds13/). Browserify, [glslify](http://github.com/chrisdickinson/glslify) and other npm modules have been used in place of a framework such as [three.js](http://github.com/mrdoob/three.js/) to render the 3D animation.

## [Mapbox](https://www.mapbox.com/)

Frontend, [Mapbox.js](https://www.mapbox.com/mapbox.js/), web-based editor, [geojson.io](http://geojson.io/), and all new products built with browserify.

## [Name That Blue](http://namethatblue.com/)

A game where you try to guess the colour of things that have a similar hue. It uses browserify to modularise the codebase and take advantage of great old-browser & mobile shims that already exist on npm.

## [Browserify Markdown Editor](http://thlorenz.github.io/browserify-markdown-editor/)

[![pic](https://github.com/thlorenz/browserify-markdown-editor/raw/master/assets/small-view.png)](http://thlorenz.github.io/browserify-markdown-editor/)

This fully functional interactive markdown editor also serves as a [follow along](https://github.com/thlorenz/browserify-markdown-editor/blob/master/CHANGELOG.md) tutorial on using browserify to easily build things like that.

## [YP.com](http://yp.com)

YP, North America’s largest local search, media and advertising company. We use browserify to organize all our client-side codebase.

## [Concurix](https://concurix.com)

Concurix offers Node.js profiling and monitoring tools, the only tools that can analyze an entire Node.js application (including third party modules).  We use browserify for all of our client code, via the excellent [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware) express plugin.  

## [Courseoff](https://courseoff.com)

Courseoff uses browserify for our website and mobile app development tooling! Using the same tools and modules across platforms has allowed us to iterate quicker and re-use work done on one platform for another.

## [StudyNotes](http://www.apstudynotes.org)

At StudyNotes, we are building beautiful and simple learning tools to empower students to accelerate their learning – i.e. to learn more effectively, in a shorter time, and with better long-term recall.

Browserify makes writing code for the browser as fun and awesome as writing code for node.js! It's mad science!

[![Discovery and Settlement of the New World](http://www.apstudynotes.org/images/studynotes.png)](http://www.apstudynotes.org/us-history/topics/discovery-and-settlement-of-the-new-world/)

## [Keybase](https://keybase.io/)

Keybase offers a command line tool in Node.js for encrypting and decrypting PGP messages. The same code is also running on their website and allows users to do the encryption there.

## [Yahoo Play](https://screen.yahoo.com/play/)

Yahoo Play lets you watch and discover new music videos and shows you interesting facts about your favorite artists, songs, and videos. We used browserify to manage our client-side dependencies.

## [Select3](https://github.com/arendjr/select3/)

Select3 is a modular selection library for jQuery. It uses Browserify to generate stand-alone bundles of the library. Browserify is a great fit for this scenario because of two reasons:

 * The generated are bundles are fully stand-alone, yet carry only a minimal amount of support code to map the dependencies internally.
 * The CommonJS format makes it very easy to write code for a client-side library, while being able to create unit tests using NodeUnit.

## [Instant](https://instant.io)

Secure, anonymous, streaming file transfer Download/upload files using the [WebTorrent](https://webtorrent.io) protocol (BitTorrent over WebRTC).

## [ABC News](http://www.abc.net.au/news) (Australia)

Most of the embedded apps, interactive graphics/maps/quizzes and pieces of long-form journalism within the news site are browserify projects, allowing us to easily reuse our growing list of UI components and utilities.

## [BBC](http://www.bbc.co.uk/blogs/internet/entries/47a96d23-ae04-444e-808f-678e6809765d)

"All our scripts are bundled together using Browserify, which allows us to mix both the AMD and the CommonJS module loading systems. Utilising a mix of these two loading systems means we are not restricted in our choice of open source libraries because of the mechanism implemented in a particular module." - from [How we built the new BBC Homepage](http://www.bbc.co.uk/blogs/internet/entries/47a96d23-ae04-444e-808f-678e6809765d).

## [Sozi](http://sozi.baierouge.fr)

Sozi is a *zooming* presentation tool based on SVG and JavaScript.
The presentation editor can be run either as a hosted web application or as a desktop application using [NW.js](http://nwjs.io/). Both are generated from the same sources and benefit from the same node modules thanks to Browserify.

## [TagHub](https://www.taghub.net)

TagHub is product lifecycle management solution. Think of it as a "facebook for things". We use browserify to bundle a variety of client side applications talking with our API.

## [ClubHut](https://clubhut.co)

ClubHut is cabin allocation SAS. If your company/club/family etc. has one or more cabins that need fair allocation, ClubHut can help. We bundle all the things with browserify.

## [BOMtotal](http://www.bomtotal.com)

BOMtotal is a free service that produces a Bill of Materials for any piece of software. We bundle all our client side code with browserify.

## [CodePlayer](http://jcppman.github.io/code-player)

CodePlayer is an interesting webapp that can turn your codes into music. We use browserify to handle everything about modules & builds!

## [nexe](https://github.com/jaredallard)

nexe is a cli tool to create single executable node.js applications used by thousands of people everyday.
Browserify is an important part of it, allowing the magic to happen!

## [BitMidi](https://bitmidi.com)

Listen to free MIDI songs, download the best MIDI files, and share the best MIDIs on the web.