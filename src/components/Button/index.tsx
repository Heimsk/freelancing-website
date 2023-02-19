import "./styles.scss";
import { ReactNode } from "react";

export type ButtonStyles = "rounded" | "outline";
export type ButtonHoverEffects = "fill" | "round" | "square";

export interface Props {
  label?: string;
  icon?: ReactNode;
  iconPos?: "right" | "left";
  style?: Array<ButtonStyles>;
  hoverEffect?: Array<ButtonHoverEffects>;
  bgColor?: number | string;
  small?: boolean;
  wide?: boolean;
  iconOnly?: boolean;
}

export function Button(props: Props) {
  return (
    <button
      data-bg-color={props.bgColor}
      data-style={props.style?.join(" ")}
      data-hover-effect={props.hoverEffect?.join(" ")}
      data-small={props.small ? "true" : "false"}
      data-wide={props.wide ? "true" : "false"}
      data-icon-only={props.iconOnly ? "true" : "false"}
      className="button"
    >
      {props.icon && (props.iconPos == "left" || !props.iconPos) && (
        <i data-side="left">{props.icon}</i>
      )}
      <span>{props.label}</span>
      {props.icon && props.iconPos == "right" && (
        <i data-side="right">{props.icon}</i>
      )}
    </button>
  );
}
