const {useState} = React


import { AppHeader } from './cmps/AppHeader.jsx'
import {Home} from './pages/home.jsx'
import { About } from './pages/Abourt.jsx'
import {BookIndex} from './pages/BookIndex.jsx'

export function App() {

    const [page,setPage] = useState('home')


    return <section className="app">
            <AppHeader setPage={setPage}/>
        <main className="container">
           {page === 'home' && <Home/>} 
           {page === 'about' && <About/>} 
           {page === 'book' && <BookIndex/>} 
            
            
        </main>
    </section>
}