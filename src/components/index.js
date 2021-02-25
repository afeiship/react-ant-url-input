import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input, Button } from 'antd';

const CLASS_NAME = 'react-ant-url-input';

export default class ReactAntUrlInput extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * When addonAfter button click.
     */
    onAddonClick: PropTypes.func
  };

  static defaultProps = {};

  get addonAfterView() {
    return (
      <Button
        onClick={this.handleAddonClick}
        icon="link"
        shape="circle"
        size="small"
      />
    );
  }

  get value() {
    const { input } = this.input;
    return input.value;
  }

  handleAddonClick = (inEvent) => {
    const { onAddonClick } = this.props;
    if (onAddonClick) {
      onAddonClick(inEvent);
    } else {
      window.open(this.value);
    }
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <Input
        ref={(ref) => (this.input = ref)}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        addonAfter={this.addonAfterView}
        {...props}
      />
    );
  }
}
