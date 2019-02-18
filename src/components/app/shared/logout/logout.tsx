import { Component, EventEmitter, Event, Prop } from '@stencil/core';
import { removeCookies } from '../../../../tools/cookie';

@Component({
  tag: 'ion-logout',
  styleUrl: 'logout.scss',
  shadow: true
})
export class LogOutComponent {
  @Prop() action: any;
  @Event() navigate: EventEmitter;
  @Prop() color = 'white';
  @Prop() backgroundColor = '#3d1980';
  @Prop() logoutColor = 'white';


  logOut() {
    removeCookies();
    this.navigate.emit('login');
  }
  render() {
    let showBackButton = false;
    if(this.backgroundColor === '#3bbfbd') {
      showBackButton = true;
    }
    return (
      <div class="logout">
        <style>
          {`
              button{
                background-color: ${this.backgroundColor};
                color: ${this.color}
              }
              p {
                color: ${this.logoutColor}
              }
            `}
        </style>
        {showBackButton ? 
        <div class="buttons-container">
          <button class="back" onClick={() => this.navigate.emit('types')}>Atrás</button>
          <button onClick={() => this.action()}>Continuar</button>
        </div> :
        <div class="button-container">
          <button onClick={() => this.action()}>Continuar</button>
        </div>
        }


        <p onClick={() => this.logOut()}>
          <span>¿Quieres salir de tu cuenta?</span>
              <br />
          <b>
            Cerrar sesión
              </b>
        </p>
      </div>
    );
  }
}
