# Contributing

## Setting this up for local development

For advanced developers only. Requires Python and Cookiecutter.

```
$ python run.py
```

This generates a throwaway `boilerplate/` package and runs the default Grunt task.
Every time you run it, the previous `boilerplate/` directory is deleted.

## Pull requests

### Before sending a pull request

Try to keep your pull request:

- [ ] as small and atomic as possible
- [ ] on a clearly-named feature branch
- [ ] consistent with [Felix's Node.js Style Guide](http://nodeguide.com/style.html)

Please don't:

- [ ] include code cleanup outside the code that you're touching, unless it's
      purely a code cleanup pull request
- [ ] change the version number

### To submit a pull request

1. Fork this repo
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `dist` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

## Submitting examples

### Have you created a site using {{ cookiecutter.project_name}}?

Add it to README.md's "Sites Using This Widget" section by submitting a pull
request.
