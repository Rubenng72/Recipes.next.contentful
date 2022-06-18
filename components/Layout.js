import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Enjoy The Variety Of</span>
              <span>Recipes</span>
            </h1>
            <h2>From All Over The World</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Recipes :)</p>
      </footer>
    </div>
  )
}