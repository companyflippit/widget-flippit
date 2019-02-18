import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ion-message',
  styleUrl: 'message.scss',
  shadow: true
})
export class MessageComponent {
  @Prop() error: boolean;
  @Prop() confirmation: boolean;
  @Prop() flips: number;

  render() {
    return (
      <div class="message-container">
        {this.confirmation ? <p class="confirmation">Gracias por los {this.flips} flips!</p> : null}
        {this.error ? <p class="error">No dispones de {this.flips} Flips!</p> : null} 
      </div>
    )
  }
}
