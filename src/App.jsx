
import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { PageGifs } from './pages/pageGifs';
import { PageStickers } from './pages/PageStickers';
import { useState } from 'react';
import { KeywordContext } from './context/keywordContext';
import { PageHome } from './pages/PageHome';

function App() {

  const [keyword, setKeyword] = useState("goku");

  return (
    <div className="max-w-[80%] mx-auto">
      <KeywordContext.Provider value={{ keyword, setKeyword }} >

        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path='/gifs' element={<PageGifs />} />
            <Route path='/stickers' element={<PageStickers />} />
          </Routes>

        </BrowserRouter>

      </KeywordContext.Provider>
    </div>
  )
}

export default App
