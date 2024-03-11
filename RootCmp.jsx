const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM


import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/home.jsx'
import { About } from './pages/Abourt.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookDetails } from './cmps/Bookdetails.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { Review } from '/cmps/AddReview.jsx'

export function App() {

    // const [page,setPage] = useState('home')
    return <Router>
        <section className="app main-layout">
            <AppHeader />

            <main className="full main-layout">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} >
                        <Route path="/about" element={<h1>This is default</h1>} />
                        {/* <Route path="/about/team" element={<Team />} />
                        // <Route path="/about/vision" element={<Vision />} /> */}
                    </Route>

                    <Route path="/book" element={<BookIndex />} />
                    {/* <Route path="/car/edit" element={<CarEdit />} />
                    <Route path="/car/edit/:carId" element={<CarEdit />} /> */}
                    <Route path="/book/:bookId" element={<BookDetails />}/>
                        <Route path="/book/:bookId/review" element={ <Review/>} >   
                    </Route>
                </Routes>
                {/* {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'car' && <CarIndex />} */}
            </main>

            <UserMsg />
            
        </section>
    </Router>
}