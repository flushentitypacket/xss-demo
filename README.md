# xss-demo

A more practical injection attack based on [xss-game](https://xss-game.appspot.com).

## Why?

Sure, everyone knows about `alert('u g0t h4cked!!')`, but it's not always clear why that's a problem.

Here, we create a more practical XSS attack that attempts to obtain private credentials.

## Setup

### Install dependencies

```sh
yarn
```

### Start the evil-server

```sh
yarn start
```

## Injecting

Go to: https://xss-game.appspot.com/level1/frame

And copy in the contents of the [injection](injection.txt) into the input field.
