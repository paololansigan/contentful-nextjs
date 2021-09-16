import Link from "next/link";

export default function StickyMenu({ menus }) {
  return (
    <div id="navbar">
      {menus
        .sort((a, b) => {
          return a.fields.slugMenu === "home" ? -1 : b.fields.slugMenu ? 1 : 0; // prioritize home
        })
        .map((menu) => {
          const { title, slugMenu } = menu.fields;

          if (slugMenu === "home") {
            return (
              <Link href={`/`} key={slugMenu}>
                <a>{title}</a>
              </Link>
            );
          } else {
            return (
              <Link href={`/${slugMenu}`} key={slugMenu}>
                <a>{title}</a>
              </Link>
            );
          }
        })}

      <style jsx>{`
        /* Style the navbar */
        #navbar {
          z-index: 1;
          overflow: hidden;
          background-color: #333;
          marginbottom: 6rem;
        }

        /* Navbar links */
        a {
          float: left;
          display: block;
          color: #f2f2f2;
          text-align: center;
          padding: 14px;
          text-decoration: none;
        }

        /* Page content */
        .content {
          padding: 16px;
        }

        /* The sticky class is added to the navbar with JS when it reaches its scroll position */
        .sticky {
          position: fixed;
          top: 0;
          width: 100%;
        }

        /* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
        .sticky + .content {
          padding-top: 60px;
        }
      `}</style>
    </div>
  );
}
