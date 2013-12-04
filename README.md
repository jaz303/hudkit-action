# hudkit-action

An action is a wrapped, observable function that can be enabled/disabled. Actions are called just like normal functions but act as no-ops when disabled.

Note: this module was written for [hudkit](http://github.com/jaz303/hudkit.js) but can also be used in isolation.

## Install

    $ npm install hudkit-action

## Usage

    var createAction = require('hudkit-action');

    var myAction = createAction(function() {
        console.log("HELLO WORLD");
    });

    myAction(); // => "HELLO WORLD"
    myAction.disable();
    myAction(); // (nothing)

## API

#### `action(callback, [opts])`

Create a new action with the given `callback`. 

Option keys:

  * `title`: action title, default: `''`
  * `enabled`: action enabled, default: `true`

#### `action.getTitle()`

Returns the action's title.

#### `action.setTitle(title)`

Set's the action title.

#### `action.isEnabled()`

Returns `true` if action is enabled, `false` otherwise.

#### `action.toggleEnabled()`

Toggle action enabled.

#### `action.disable()`

Disable action.

#### `action.enable()`

Enable action.

#### `action.setEnabled(isEnabled)`

Set action enabled explicitly.

#### `action.onchange`

[Signalkit](http://github.com/jaz303/signalkit) signal that will be emitted when the action's state is changed.