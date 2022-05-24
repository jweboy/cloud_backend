import LogTerminal from '@/components/Terminal';
import { Card } from '@douyinfe/semi-ui';
import React from 'react';
import { useLocation } from 'react-router-dom';

const PublishProjectPage = React.memo(() => {
  const { state } = useLocation();
  return (
    <Card>
      <LogTerminal data={state as any} />
    </Card>
  );
});

export default PublishProjectPage;
