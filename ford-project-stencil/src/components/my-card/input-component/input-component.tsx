import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})
export class InputComponent {
  @Event() fetchDataEvent: EventEmitter<string>;
  private inputValue: string = '';

  handleInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  handleSubmit() {
    if (this.inputValue) {
      this.fetchDataEvent.emit(this.inputValue);
    }
  }

  render() {
    return (
      <div class="input-container">
        <input type="text" placeholder="Cod VIN" value={this.inputValue} onInput={(event: Event) => this.handleInputChange(event)}></input>
        <button onClick={() => this.handleSubmit()}>Trimite</button>
      </div>
    );
  }
}
