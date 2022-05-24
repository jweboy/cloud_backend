import BlockSpace from '@/components/BlockSpace';
import { useMount } from '@/hooks/useMount';
import { useRequest } from '@/hooks/useRequest';
import { getProjectList } from '@/service/deploy';
import { Table, Card, Button } from '@douyinfe/semi-ui';
import React from 'react';
import { Link } from 'react-router-dom';
import { useColumns } from './config';

const DeployPage = () => {
  const { data } = useRequest({ request: getProjectList });
  const columns = useColumns();

  useMount(() => {
    // receive a message from the server
    // send a message to the server
  });

  // return (
  //   <React.Fragment>
  //     <LogTerminal />
  //   </React.Fragment>
  // );
  return (
    <Card>
      <BlockSpace vertical>
        <Link to="/deploy/form">
          <Button theme="solid">新建</Button>
        </Link>
        <Table columns={columns} dataSource={data.list} rowKey="id" />
      </BlockSpace>
    </Card>
  );
};

export default DeployPage;
