// @ts-nocheck
// TODO: Fix types for this file (tippy.js support is missing)
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";
import { VariableList } from "./VariableList";

export const renderVariableList = () => {
  let component;
  let popups;

  return {
    onStart: (props) => {
      component = new ReactRenderer(VariableList, {
        props,
        editor: props.editor,
      });

      popups = tippy("body", {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: true,
        interactive: true,
        trigger: "manual",
        placement: "bottom-start",
      });
    },

    onUpdate(props) {
      component?.updateProps(props);

      if (popups) {
        popups[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      }
    },

    onKeyDown(props) {
      if (props.event.key === "Escape") {
        if (popups) {
          popups[0].hide();
        }
        return true;
      }

      return component?.ref?.onKeyDown(props);
    },

    onExit() {
      component?.destroy();
      if (popups) {
        popups[0].destroy();
      }
    },
  };
};
