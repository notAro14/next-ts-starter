import { ReactNode } from "react";
import "src/adapters/primary/react/styles/reset.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;
  return <div id="__root">{children}</div>;
}
