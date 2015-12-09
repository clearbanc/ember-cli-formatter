# Ember-cli-formatter

An input formatter ember-cli component for ember using [formatter.js](http://firstopinion.github.io/formatter.js/index.html).

## Usage

* `npm install --save ember-cli-formatter`

Format phone number
```hbs
{{formatter-js pattern="({{999}}) {{999}}-{{999}}"
               persistent="true"
               class="validate"
               style="background-color: pink;"
               placeholder="1234567890" id="my-input"}}
```

## Demo

Clone this repo and run the app:

```sh
$ npm install -g ember-cli
$ git clone git@github.com:clearbanc/ember-cli-formatter
$ cd ember-cli-formatter
# install dependencies
$ npm install && bower install
# fire up local server
$ ember serve
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).