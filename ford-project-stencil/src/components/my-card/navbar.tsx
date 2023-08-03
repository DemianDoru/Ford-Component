import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-navbar',
  styleUrl: 'navbar.css',
  shadow: true,
})
export class MyCard {
  @State() vinValue: string = '';

  handleFetchDataEvent(event: CustomEvent<string>) {
    this.vinValue = event.detail;
  }

  render() {
    return (
      <div class="my-card-wrapper">
        <div class="logo">
          <p>
            <img src="assets/img/Logo.jpg" alt="" />
          </p>
        </div>
        <div class="container">
          <div class="container-navbar">
            {' '}
            <div class="navbar">
              <div class="navbar-elements">
                <ul>
                  <li>Home</li>
                  <li>Accesories</li>
                  <li>Maintenance Parts</li>
                  <li>Diesel Parts</li>
                  <li>Videos</li>
                  <li>No Vehicle Selected</li>
                </ul>
              </div>
              {/* <p>Introduceți codul VIN de 20 de cifre al vehiculului Toyota</p> */}
              <div class="enter-container">
                <input-component onFetchDataEvent={(event: CustomEvent<string>) => this.handleFetchDataEvent(event)}></input-component>
              </div>
              {this.vinValue && <vin-decoder vin={this.vinValue}></vin-decoder>}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
