import { Component, EventEmitter, Event, State } from '@stencil/core';

@Component({
  tag: 'ion-header',
  styleUrl: 'header.scss',
  shadow: true
})
export class HeaderComponent {
  @Event() navigate: EventEmitter;
  @State() route: string = '';
  @State() color = '#3BBFBD'
  @State() profileColor = '';
  @State() homeColor = '';
  @State() buyColor = '';
  @State() profileCursor = '';
  @State() homeCursor = '';
  @State() buyCursor = '';

  navigateHandler(route) {
    this.navigate.emit(route);
    switch (route) {
      case 'profile':
        this.profileColor = '#681F74';
        this.homeColor = '';
        this.buyColor = '';
        this.profileCursor = 'initial';
        this.homeCursor = 'pointer';
        this.buyCursor = 'pointer';
        this.color = 'rgba(104, 31, 116, 0.3)';
        break;
      case 'home':
        this.profileColor = '';
        this.homeColor = '#3BBFBD';
        this.buyColor = '';
        this.profileCursor = 'pointer';
        this.homeCursor = 'initial';
        this.buyCursor = 'pointer';
        this.color = 'rgba(58, 191, 189, 0.3)';
        break;
      case 'types':
        this.profileColor = '';
        this.homeColor = '';
        this.buyColor = '#3BBFBD';
        this.profileCursor = 'pointer';
        this.homeCursor = 'pointer';
        this.buyCursor = 'initial';
        this.color = 'rgba(58, 191, 189, 0.3)';
        break;
      case 'buy':
        this.profileColor = '';
        this.homeColor = '';
        this.buyColor = '#3BBFBD';
        this.profileCursor = 'pointer';
        this.homeCursor = 'pointer';
        this.buyCursor = 'initial';
        this.color = 'rgba(58, 191, 189, 0.3)';
        break;
    }
  }
  componentWillLoad() {
    this.route = window.localStorage.getItem('FLIPPIT_route');
    this.navigateHandler(this.route);
  }
  render() {
    return (
      <div class="header-container">
        <div class="container-left" onClick={() => this.navigateHandler('profile')}>
          <style>{`
            .container-left{
              background-color: ${this.profileColor};
              color: #4a4a4a;
            }
            .container-left:hover {
              background-color: ${this.color};
              cursor: ${this.profileCursor};
            }
            .container-left:hover{
              background-color: ${this.profileColor};
            }
        `}</style>
          <svg width="20px" height="24px" viewBox="0 0 20 24" >
            <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Profile-0401" transform="translate(-1022.000000, -61.000000)" fill="#FFFFFF">
                <g id="perfil" transform="translate(996.000000, 61.000000)">
                  <g id="icon/profile/white" transform="translate(23.000000, 0.000000)">
                    <path d="M5.43651276,17.3792012 C4.93938167,17.3792012 4.53570946,17.7951771 4.53570946,18.306104 L4.53570946,22.3026375 C4.53570946,22.3650339 4.58485217,22.4156745 4.645403,22.4156745 L20.8611786,22.4156745 C20.9212907,22.4156745 20.9708721,22.3650339 20.9708721,22.3026375 L20.9708721,18.306104 C20.9708721,17.7951771 20.5698326,17.3792012 20.0779668,17.3792012 L16.0390509,17.3792012 C13.4349264,15.2518463 15.2448697,11.3814619 16.559437,9.25862849 C17.0973741,8.22456669 17.4273323,7.35779955 17.4273323,6.20844009 C17.4273323,3.59819141 15.4212569,1.61009797 12.7614081,1.5838734 C10.0984879,1.61009797 8.09153503,3.59819141 8.09153503,6.20844009 C8.09153503,7.35779955 8.42237073,8.22456669 8.95635885,9.25139412 C10.2753139,11.3814619 12.0852572,15.2518463 9.48069394,17.3792012 L5.43651276,17.3792012 Z M20.8800459,24 L20.8611786,23.9981914 L4.645403,23.9981914 L4.62609694,24 L3,24 L3,18.306104 C3,16.9220799 4.09298636,15.7966843 5.43651276,15.7966843 L8.80015526,15.7966843 L8.88922641,15.7496609 C9.93833536,14.2548606 8.57330903,11.5749812 7.66548535,10.1100226 L7.60230188,9.99788998 C7.05866073,8.95297664 6.55582557,7.77015825 6.55582557,6.20844009 C6.55582557,2.7648832 9.27227623,0.03933685 12.7399082,0.00180859081 L12.7605306,0 L12.7802754,0.00180859081 C16.2474686,0.03933685 18.9630417,2.7648832 18.9630417,6.20844009 C18.9630417,7.77015825 18.4610841,8.95297664 17.9178817,9.99834213 L17.8542595,10.1100226 C16.9468746,11.5749812 15.5814095,14.2548606 16.6305184,15.7496609 L16.7195896,15.7966843 L20.0779668,15.7966843 C21.4131565,15.7966843 22.5,16.9220799 22.5,18.306104 L22.5,24 L20.8800459,24 Z" id="Fill-21"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <p>Mi perfil</p>
        </div>
        <div class="container-center" onClick={() => this.navigateHandler('home')}>
          <style>{`
            .container-center{
              background-color: ${this.homeColor};
            }
            .container-center:hover{
              background-color: ${this.color};
              cursor: ${this.homeCursor};
            }
            .container-center:hover{
              background-color: ${this.homeColor};
            }
        `}</style>
          <svg width="26px" height="26px" viewBox="0 0 26 26" >
            <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Profile-0401" transform="translate(-1132.000000, -60.000000)" stroke="#FFFFFF" stroke-width="1.5">
                <g id="filps" transform="translate(1109.000000, 61.000000)">
                  <g id="icon/flips/white" transform="translate(24.000000, 0.000000)">
                    <path d="M5.00027713,9.42666632 C5.03968927,4.2137197 9.27776115,0 14.5,0 C19.7467051,0 24,4.25329488 24,9.5 C24,14.7222389 19.7862803,18.9603107 14.5733337,18.9997229 C13.5438209,21.9128486 10.7656506,24 7.5,24 C3.35786438,24 0,20.6421356 0,16.5 C0,13.2343494 2.08715144,10.4561791 5.00027713,9.42666632 Z" id="Combined-Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <p>Mis Flips</p>
        </div>
        <div class="container-right" onClick={() => this.navigateHandler('types')}>
          <style>{`
            .header-container{
              background-color: ${this.color};
              border-radius: 4px;
            }
            .container-right{
              background-color: ${this.buyColor};
            }
            .container-right:hover{
              background-color: ${this.color};
              cursor: ${this.buyCursor};
            }
            .container-right:hover{
              background-color: ${this.buyColor};
            }
          `}</style>
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Profile-0401" transform="translate(-1247.000000, -61.000000)" fill="#FFFFFF">
                <g id="recargar" transform="translate(1224.000000, 61.000000)">
                  <g id="icon/income/white" transform="translate(23.000000, 0.000000)">
                    <g id="icon-income">
                      <path d="M15.9587586,14.5771034 C15.9587586,15.0914483 15.5416552,15.5081379 15.0277241,15.5081379 C14.5137931,15.5081379 14.0966897,15.0914483 14.0966897,14.5771034 C14.0966897,14.0627586 14.5137931,13.646069 15.0277241,13.646069 C15.5416552,13.646069 15.9587586,14.0627586 15.9587586,14.5771034" id="Fill-2"></path>
                      <path d="M22.5086897,17.3284138 L14.1037241,17.3284138 C13.3622069,17.3284138 12.7588966,16.7246897 12.7588966,15.9835862 L12.7588966,13.3626207 C12.7588966,12.6215172 13.3622069,12.0177931 14.1037241,12.0177931 L22.5086897,12.0177931 L22.5086897,17.3284138 Z M20.7670345,20.8452414 C20.7670345,21.5867586 20.1637241,22.190069 19.4222069,22.190069 L2.79310345,22.190069 C2.05158621,22.190069 1.44827586,21.5867586 1.44827586,20.8452414 L1.44827586,8.50096552 C1.44827586,7.75944828 2.05158621,7.15613793 2.79310345,7.15613793 L19.4222069,7.15613793 C20.1637241,7.15613793 20.7670345,7.75944828 20.7670345,8.50096552 L20.7670345,10.5695172 L14.1037241,10.5695172 C12.5635862,10.5695172 11.3106207,11.8224828 11.3106207,13.3626207 L11.3106207,15.9835862 C11.3106207,17.5237241 12.5635862,18.7766897 14.1037241,18.7766897 L20.7670345,18.7766897 L20.7670345,20.8452414 Z M23.2328276,10.5695172 L22.2153103,10.5695172 L22.2153103,8.50096552 C22.2153103,6.96082759 20.9623448,5.70786207 19.4222069,5.70786207 L2.79310345,5.70786207 C1.25296552,5.70786207 0,6.96082759 0,8.50096552 L0,20.8452414 C0,22.3853793 1.25296552,23.6383448 2.79310345,23.6383448 L19.4222069,23.6383448 C20.9623448,23.6383448 22.2153103,22.3853793 22.2153103,20.8452414 L22.2153103,18.7766897 L23.2328276,18.7766897 C23.6329655,18.7766897 23.9569655,18.4522759 23.9569655,18.0525517 L23.9569655,11.2936552 C23.9569655,10.893931 23.6329655,10.5695172 23.2328276,10.5695172 Z" id="Fill-3"></path>
                      <polyline id="Fill-1" points="15.6244138 1.92041379 16.7929655 4.46648276 18.3864828 4.46648276 16.3361379 0 6.60703448 4.46648276 10.0783448 4.46648276 15.6244138 1.92041379"></polyline>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <p>Recargar</p>
        </div>
      </div>
    )

  }
}
