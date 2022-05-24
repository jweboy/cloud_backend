import React from 'react';
import { Button, Card, Form, Toast } from '@douyinfe/semi-ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMount } from '@/hooks/useMount';
import { postProject, getProjectDetail } from '@/service/deploy';
import { useRequest } from '@/hooks/useRequest';

const initRepo = 'git@github.com:jweboy/cloud_backend.git';

const DeployFormPage = React.memo(() => {
  const formRef = React.useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { id } = (state as { id: string }) || {};
  const { data: detail } = useRequest({
    request: getProjectDetail,
    data: { id },
  });

  const setDefaultApplication = (repo?: string) => {
    const repoName = (repo || initRepo).split('/')[1];
    const projectName = repoName.split('.')[0];
    // @ts-ignore
    formRef.current?.setValue('application', projectName);
  };

  const handleSubmit = async (values) => {
    await postProject({ ...values, ...(state.id && { id }) });
    Toast.success('保存成功');
    navigate(-1);
  };

  const handleRepoPasteChange = (evt) => {
    const { value } = evt.target;
    setDefaultApplication(value);
  };

  useMount(() => {
    // setDefaultApplication();
  });

  React.useEffect(() => {
    if (detail != null) {
      formRef.current.setValues(detail);
    }
  }, [detail]);

  return (
    <Card title="部署">
      <Form
        onSubmit={handleSubmit}
        getFormApi={(formApi) => (formRef.current = formApi)}
      >
        <Form.Input
          label="仓库地址"
          field="repo_url"
          onPaste={handleRepoPasteChange}
        />
        <Form.Input label="应用名称" field="application" />
        <Form.TextArea label="备注信息" field="remark" />
        <Button type="primary" htmlType="submit">
          保存
        </Button>
        {/* <Form.Select label="部署环境" field="env" /> */}
      </Form>
    </Card>
  );
});

export default DeployFormPage;
