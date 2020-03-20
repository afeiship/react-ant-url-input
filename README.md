# react-ant-url-input
> Url input for ant.

## installation
```shell
npm install -S @feizheng/react-ant-url-input
```

## update
```shell
npm update @feizheng/react-ant-url-input
```

## properties
| Name         | Type   | Default | Description                           |
| ------------ | ------ | ------- | ------------------------------------- |
| className    | string | -       | The extended className for component. |
| onAddonClick | func   | -       | When addonAfter button click.         |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-url-input/dist/style.scss";

  // customize your styles:
  $react-ant-url-input-options: ()
  ```
2. import js
  ```js
  import ReactAntUrlInput from '@feizheng/react-ant-url-input';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactAntUrlInput />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-url-input/
