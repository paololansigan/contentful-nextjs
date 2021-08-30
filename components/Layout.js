import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>sample</span>
              <span>Product List</span>
            </h1>
            {/* <h2>Spread The Joy</h2> */}
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 test</p>
      </footer>
    </div>
  );
}
