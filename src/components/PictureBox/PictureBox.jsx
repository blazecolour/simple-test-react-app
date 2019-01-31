import React, { Component } from 'react';
import Picture from '../Picture';
import Button from '../Button';
import { uniqId } from '../../utils';
import { pic } from '../../constants';
import './PictureBox.css';

export default class PictureBox extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1, imgs: [{ id: 0, newPic: pic }] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    const newImg = { id: uniqId(), newPic: pic };
    this.setState(({ counter, imgs }) => ({
      counter: counter + 1,
      imgs: [newImg, ...imgs]
    }));
  }

  handleRemove() {
    const { imgs } = this.state;
    const newImgs = imgs.slice(0, -1);
    this.setState(({ counter }) => {
      if (counter > 1) return { counter: counter - 1, imgs: newImgs };
    });
  }

  renderPiture() {
    const { imgs } = this.state;
    return imgs.map(img => (
      <Picture key={img.id} src={img.newPic} alt="dan abramov" />
    ));
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="picture-box">
        <div className="picture-list">{this.renderPiture()}</div>
        <div className="counter">{counter}</div>
        <div className="btn-group">
          <Button onClick={this.handleRemove}> - </Button>
          <Button onClick={this.handleAdd}> + </Button>
        </div>
      </div>
    );
  }
}
