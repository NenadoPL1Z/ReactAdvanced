import React, {Profiler} from 'react';
import Agreement from "../Agreement/Agreement";

const ReactProfiler = () => {

  const handleRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    // id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
    // phase, // либо "mount" (если дерево было смонтирова
    // actualDuration, // время, затраченное на рендер зафиксированного обновления
    // baseDuration, // предполагаемое время рендера всего поддерева без кеширования
    //  startTime, // когда React начал рендерить это обновление
    // interactions // Множество «взаимодействий» для данного обновления 
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
    console.log(interactions);
  }

  return (
    <Profiler id='Agreement' onRender={handleRender}>
      <Agreement/>
    </Profiler>
  );
};

export default ReactProfiler;