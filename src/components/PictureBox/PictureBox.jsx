import React, { Component } from 'react';
import Picture from '../Picture';
import Button from '../Button';
import { uniqId } from '../../utils';
import { pic } from '../../constants';
import './PictureBox.css';

export default class PictureBox extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1, imgs: [pic] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    const { counter, imgs } = this.state;
    const newImg = pic;
    this.setState({ counter: counter + 1, imgs: [newImg, ...imgs] });
  }

  handleRemove() {
    const { counter, imgs } = this.state;
    const newImgs = imgs.slice(0, -1);
    if (counter > 1) this.setState({ counter: counter - 1, imgs: newImgs });
  }

  render() {
    const { counter, imgs } = this.state;

    return (
      <div className="picture-box">
        <div className="picture-list">
          {imgs.map(img => (
            <Picture key={uniqId()} src={img} alt="dan abramov" />
          ))}
        </div>
        <div className="counter">{counter}</div>
        <div className="btn-group">
          <Button onClick={this.handleRemove}> - </Button>
          <Button onClick={this.handleAdd}> + </Button>
        </div>
      </div>
    );
  }
}
