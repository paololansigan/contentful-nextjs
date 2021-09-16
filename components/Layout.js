import Link from "next/link";
import StickyMenu from "./StickyMenu";

export default function Layout({ children, ...props }) {
  return (
    <div className="layout">
      <StickyMenu menus={props.stickyMenu} />

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 test</p>
      </footer>
    </div>
  );
}
