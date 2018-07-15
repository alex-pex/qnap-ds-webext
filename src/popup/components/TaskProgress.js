import PropTypes from 'prop-types';
import React from 'react';
import { Progress } from 'reactstrap';

import { STATE_COMPLETED } from '../../background/client';

/*
const getStatusText = state => {
  switch (state) {
    case STATE_PAUSED:
      return 'En pause';
    case STATE_STOPPED:
      return 'Arrêté';
    case STATE_COMPLETED:
      return 'Terminé';
    case STATE_SEEDING:
      return 'Seeding';
    case STATE_DOWNLOADING:
      return 'Téléchargement en cours';
    default:
      return 'Inactif';
  }
};
*/

const TaskProgress = ({ task }) => {
  let currentActivity = false;
  let downloadProgress = 0;
  let uploadProgress = 0;

  if (task.done < task.size) {
    currentActivity = task.activity_time > 0 && 'downloading';
    downloadProgress = task.progress;
  } else {
    currentActivity = task.activity_time > 0 && 'uploading';
    downloadProgress = 100;
    uploadProgress = task.progress;
  }

  return task.state === STATE_COMPLETED ? (
    <Progress value={100} color="success" />
  ) : (
    <Progress multi>
      <Progress bar value={downloadProgress / 2} animated={currentActivity === 'downloading'} />
      <Progress
        bar
        value={uploadProgress / 2}
        animated={currentActivity === 'uploading'}
        color="warning"
      />
    </Progress>
  );
};

TaskProgress.propTypes = {
  task: PropTypes.shape({
    state: PropTypes.number,
    activity_time: PropTypes.number,
    done: PropTypes.number,
    size: PropTypes.number,
  }).isRequired,
};

export default TaskProgress;
