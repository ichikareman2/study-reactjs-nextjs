import Footer from './Footer';
import Nav from './Nav';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav className='grow-0 shrink-0'>
        <Nav></Nav>
      </nav>
      <main className='grow shrink-0'>
        {children}
      </main>
      <footer className='grow-0 shrink-0'>
        <Footer></Footer>
      </footer>
    </div>
  )
}