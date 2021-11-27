import React, {Suspense} from 'react';
import UserContext from "./context/userCTX";
import ReactRef from "./components/REF/ReactRef";
import ErrorBoundary from "./components/ErrorBoundary";
import HigherOrderFunction from "./components/HOC/HigherOrderFunction";
import HocRepeat from "./components/HocRepeat/HocRepeat";
import Agreement from "./components/Agreement/Agreement";
import Portal from "./components/Portal/Portal";
import ReactProfiler from "./components/Profiler/ReactProfiler";
import RenderProps from "./components/RenderProps/RenderProps";
import UseState from "./components/hooks/UseState";


//! Обязатель должен быть внутри Suspense
//? React.lazy Позволяет рендерить динамический инпорт как обычный компонет
const UserProvider = React.lazy(() => import('./components/CTX/UserProvider'))
const UserConsumer = React.lazy(() => import('./components/CTX/UserConsumer'))


const App = () => {

  //! Динамический импорт - используется для разделение кода
  import('./utils/untils').then(imports => {
    console.log(imports.sum(10, 20))
  })

  const ReactContextView = false
  const ReactRefView = false
  const HOC = false
  const HOC2 = false
  const agreement = false
  const portal = false
  const profiler = false
  const renderProps = false
  const useState = true

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Загрузка...</div>}>
        {ReactContextView && (
          <UserContext>
            <UserConsumer/>
            <UserProvider/>
          </UserContext>
        )}
      </Suspense>
      {ReactRefView && <ReactRef/>}
      {HOC && <HigherOrderFunction/>}
      {HOC2 && <HocRepeat/>}
      {agreement && <Agreement/> }
      {portal && <Portal/>}
      {profiler && <ReactProfiler/>}
      {renderProps && <RenderProps/>}
      {useState && <UseState/>}
    </ErrorBoundary>
  );
};

export default App;