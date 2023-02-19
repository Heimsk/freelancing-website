import { ReactNode } from "react";
import "./styles.scss";

export interface Props {
  children?: ReactNode;
}

export function Card(props: Props) {
  return (
    <>
      <div className="card">{props.children}</div>
    </>
  );
}

export function CardHeading(props: Props) {
    return <>
        <div className='heading'>{props.children}</div>
    </>
}

export function CardContent(props: Props) {
  return <>
    <div className="content">{props.children}</div>
  </>
}
