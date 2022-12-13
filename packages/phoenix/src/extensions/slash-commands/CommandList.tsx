import { Component } from "react";
import { SuggestionProps, SuggestionKeyDownProps } from "@tiptap/suggestion";

export class CommandList extends Component<
  SuggestionProps,
  {
    selectedIndex: number;
  }
> {
  state = {
    selectedIndex: 0,
  };

  componentDidUpdate(oldProps: SuggestionProps) {
    if (this.props.items !== oldProps.items) {
      this.setState({
        selectedIndex: 0,
      });
    }
  }

  onKeyDown({ event }: SuggestionKeyDownProps) {
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }

    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        (this.state.selectedIndex + this.props.items.length - 1) %
        this.props.items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length,
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  selectItem(index: number) {
    const item = this.props.items[index];

    if (item) {
      this.props.command(item);
    }
  }

  render() {
    const { items } = this.props;
    return (
      <div className="SlashCommandsList">
        {items.map((item, index) => {
          return (
            <button
              className={`SlashCommandsList__ListItem ${
                index === this.state.selectedIndex ? "is-selected" : ""
              }`}
              key={index}
              onClick={() => this.selectItem(index)}
            >
              {item.element || item.title}
            </button>
          );
        })}
      </div>
    );
  }
}
