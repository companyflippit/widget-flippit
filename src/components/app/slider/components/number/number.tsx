import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'ion-number',
  styleUrl: 'number.scss',
})
export class NumberComponent {
  @Prop() range: number;
  @State() sliderWidth: number = 272;
  @State() inputWidth: number = this.sliderWidth * 0.5992647059;
  render() {
    const movePerClick = this.inputWidth / 123;
    return (<div>
      <p class="number"><span class="font-size">{this.range/10}</span></p>
      <style>{`
          .number{
            left: ${this.range * movePerClick}px;
          }
        `}</style>
    </div>)
  }
}