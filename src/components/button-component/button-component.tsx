import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

const typeHash = {
  primary: 'btn-primary'
}

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class Button {

  @Prop() type: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() loadingtext: string = 'Loading';

  @Event() zpClick!: EventEmitter<void>;

  handleClick(event) {
    this.zpClick.emit(event);
  }

  render() {
    const buttonType = typeHash[this.type]?.toLowerCase() || '';
    return (
      <button
        onClick={(event) => this.handleClick(event)}
        class={`btn ${buttonType}`}
        disabled={this.disabled}
      >
        {this.disabled ? this.loadingtext : <slot /> }
      </button>
    );
  }
}
