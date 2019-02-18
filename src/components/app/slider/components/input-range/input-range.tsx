import { Component, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'ion-input-range',
  styleUrl: 'input-range.scss',
  shadow: true
})
export class InputRangeComponent {
  @Event() rangeEmitter: EventEmitter;
  @State() range: number = 50;
  @State() min: number = 0;
  @State() max: number = 100;
  @State() increment: number = 10;

  handleChange(event) {
    this.range = Math.round(event.target.value/this.increment)*this.increment;
    this.rangeEmitter.emit(this.range/10);
  }
  rangeHandler(addition) {
    if (addition) {
      this.range < 100 ? this.range = Number(this.range) + this.increment : null;
    } else {
      this.range > 0 ? this.range = Number(this.range) - this.increment : null;
    }
    this.rangeEmitter.emit(this.range/10);
  }
  componentWillLoad(){
    this.rangeEmitter.emit(this.range/10);
  }
  render() {
    return (
      <form class="input-range">
        <div class="input-container">
          {this.range <= 18 ?
            <div class="left-button-big">
              <div class="right-button">{this.range/10}</div>
              <div class="left-button" onClick={() => this.rangeHandler(false)}>-</div>
            </div>
            :
            <div class="left-button" onClick={() => this.rangeHandler(false)}>-</div>
          }
          {this.range >= 82 ?
            <div class="right-button-big">
              <div class="left-button">{this.range/10}</div>
              <div class="right-button" onClick={() => this.rangeHandler(true)}>+</div>
            </div>
            :
            <div class="right-button" onClick={() => this.rangeHandler(true)}>+</div>
          }
          {this.range <= 18 || this.range >= 82 ?
            <input type="range" id="bubble-buttons" min={this.min} max={this.max} value={this.range} onInput={(event) => this.handleChange(event)} />
            :
            <input type="range" min={this.min} max={this.max} value={this.range} onInput={(event) => this.handleChange(event)} />
          }
          {this.range <= 18 || this.range >= 82 ? null : <ion-number range={this.range}></ion-number>}

        </div>
      </form>
    )
  }
}
