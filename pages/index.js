import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {/* <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        // not using this anchor tag as it sends a http request and all over states gets lost */}
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </>
  );
}
