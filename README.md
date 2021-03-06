# react-ant-url-input
> Url input for ant.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install antd@3
npm install -S @jswork/react-ant-url-input
```

## properties
| Name         | Type   | Required | Default | Description                           |
| ------------ | ------ | -------- | ------- | ------------------------------------- |
| className    | string | false    | -       | The extended className for component. |
| onAddonClick | func   | false    | -       | When addonAfter button click.         |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-url-input/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-url-input/dist/style.scss";

  // customize your styles:
  $react-ant-url-input-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntUrlInput from '@jswork/react-ant-url-input';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-url-input">
          <ReactAntUrlInput />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-url-input/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-url-input/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-url-input
[version-url]: https://npmjs.org/package/@jswork/react-ant-url-input

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-url-input
[license-url]: https://github.com/afeiship/react-ant-url-input/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-url-input
[size-url]: https://github.com/afeiship/react-ant-url-input/blob/master/dist/react-ant-url-input.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-url-input
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-url-input
