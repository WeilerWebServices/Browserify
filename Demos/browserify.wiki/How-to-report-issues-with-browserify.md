# How to report issues with browserify

## isolate
Attempt to isolate the source of your problem to browserify. This will help you confirm that the problem is with browserify and help you prepare the example code you'll need to submit to demonstrate it.

## search
Make a reasonable attempt to search open and closed issues and pull requests to see if the problem has already been reported, especially if you're not using the latest version of browserify.

## example
Create a minimal test case. This should contain the minimal amount of code and information necessary to reproduce the problem. At minimum it should generally include:
  1. The version of browserify you're using
  2. The API call or CLI command you're using to invoke browserify.

    For all but the simplest cases, the best way to provide an example is generally to put it in a GitHub repo so that running it only requires `git clone {repo URL}`, `npm install`, and `node somefile.js` or `sh somefile` for a CLI command. If you need help getting started, see [miniminirepro/browserify](https://github.com/miniminirepro/browserify)

  You should exclude layers of complexity over browserify, like gulp or grunt code, unless it's necessary to demonstrate the problem (and it still suggests a problem with browserify itself). If you must include that sort of thing, narrow it down to the relevant parts as much as possible. Don't paste a whole `gulpfile` with a bunch of tasks unrelated to the browserify issue.

  Browserify API or CLI commands are preferable. Make those as minimal as possible while demonstrating the problem. In other words, exclude any options or commands that aren't necessary to reproduce the problem.

  It may be necessary to include some information about your file system, such as the location and contents of files you're giving as input to browserify. Again, try to show the fewest, most minimal example files that will demonstrate the problem.
  
  If your issue is tagged with the `repro-please` label, it means some additional information or action is required from you in order for the issue to be actionable. If you don't respond, the issue will eventually be closed. If that's the case and you're still having a problem, please open a new issue with more information.

## formatting
Mark up code in your issue report. There are 2 primary ways of doing this in GitHub issues:

1. Enclose inline code in backticks (`` ` ``). This is appropriate for things like variable and file names.
2. Enclose blocks of code in pairs of triple backticks.

  You can (and generally should) include a language identifier to enable syntax highlighting, like `js` indicates JavaScript in this example:

      ```js
      // code here
      ```
  
  If syntax highlighting isn't appropriate you can omit the language identifier:

      ```
      // code here
      ```

See the following for more information about formatting messages on GitHub:
* [Writing on GitHub / Markdown Basics](https://help.github.com/articles/markdown-basics/)
* [Writing on GitHub / GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
* [Language IDs](https://github.com/jmm/gfm-lang-ids/wiki/GitHub-Flavored-Markdown-(GFM)-language-IDs) for enabling syntax highlighting in GitHub Flavored Markdown (GFM)

## preview
Use the preview feature to make sure your post looks good (code formatting, etc.) before submitting.
