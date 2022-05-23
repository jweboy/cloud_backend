import LogTerminal from '@/components/Terminal';
import { useMount } from '@/hooks/useMount';
import { postDeploy } from '@/service/deploy';
import { Button } from '@douyinfe/semi-ui';
import React from 'react';

const DeployPage = () => {
  useMount(() => {
    // receive a message from the server
    // send a message to the server
  });

  return (
    <React.Fragment>
      <LogTerminal />
    </React.Fragment>
  );
};

export default DeployPage;
