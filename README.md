# cookiecutter-css

Cookiecutter for a generic CSS front-end widget. This is for pure CSS widgets that contain no JS.

See https://github.com/audreyr/cookiecutter.

* Free software: MIT license

This is largely based on [cookiecutter-jswidget](https://github.com/audreyr/cookiecutter-jswidget).

## Features

* Support for as many front-end package managers as possible
* Grunt setup with concat, cssmin, connect
* Travis CI setup

## Status

Pre-alpha - just needed a repo to stick this into.

## Usage

```
$ cookiecutter https://github.com/audreyr/cookiecutter-csswidget.git
$ ... (fill out the values you want)
$ npm install
```

After generating the project:

* Go to https://travis-ci.org/profile, click [Sync now], and turn on the
  Travis CI hook for your repo.
* Register your package with every supported package index: Component.io, Bower.
