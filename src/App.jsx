
import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { PageGifs } from './pages/pageGifs';
import { PageStickers } from './pages/PageStickers';
import { useState } from 'react';
import { KeywordContext } from './context/keywordContext';

function App() {

  const [keyword, setKeyword] = useState("gif");

  return (
    <div className="max-w-[80%] mx-auto">
      <KeywordContext.Provider value={{ keyword, setKeyword }} >

        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/gifs' element={<PageGifs />} />
            <Route path='/stickers' element={<PageStickers />} />
          </Routes>

        </BrowserRouter>

      </KeywordContext.Provider>
    </div>
  )
}

export default App
