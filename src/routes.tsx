import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts';
import { Home } from './features';
import { Quiz } from './features/Quiz';
import { Legacy } from './features/Legacy';
import { _404 } from './features/_404';

export const AppRouter = () => {
  return (
    <BrowserRouter basename='/quizality'>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />

          <Route path='quiz' element={<Quiz />}>
            <Route index element={<Quiz.New />} />
            <Route path='config' element={<Quiz.Create />} />
            <Route path='play' element={<Quiz.Play />} />
            <Route path='gameover' element={<Quiz.GameOver />} />
          </Route>

          <Route path='legacy' element={<Legacy />}>
            <Route index element={<Legacy.New />} />
            <Route path='play' element={<Legacy.Play />} />
            <Route path='gameover' element={<Legacy.GameOver />} />
            <Route path='scores' element={<Legacy.Scores />} />
          </Route>

          <Route path='*' element={<_404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
