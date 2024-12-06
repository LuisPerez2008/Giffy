
import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { PageGifs } from './pages/pageGifs';
import { PageStickers } from './pages/PageStickers';
import { useState } from 'react';
import { KeywordContext } from './context/keywordContext';
import { PageFavoritos } from './pages/PageFavoritos';
import { FavoritosProvider } from './context/FavoritosContext';
import { PageElement } from './pages/PageElement';

function App() {

  const [keyword, setKeyword] = useState("goku");

  return (
    <div className="max-w-[80%] mx-auto">
      <KeywordContext.Provider value={{ keyword, setKeyword }} >
        <FavoritosProvider >
          <BrowserRouter>

            <Navbar />
            <Routes>
              <Route path='/' element={<PageGifs />} />
              <Route path='/gifs' element={<PageGifs />} />
              <Route path='/stickers' element={<PageStickers />} />
              <Route path='/favoritos' element={<PageFavoritos />} />
              <Route path='/gifs/elemento/:id' element={<PageElement />} />
              <Route path='/stickers/elemento/:id' element={<PageElement />} />
              <Route path='/favoritos/elemento/:id' element={<PageElement />} />
            </Routes>

          </BrowserRouter>
        </FavoritosProvider>

      </KeywordContext.Provider>
    </div>
  )
}

export default App
