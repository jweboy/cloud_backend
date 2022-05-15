import { formatThousands } from '@/utils/number';
import dayjs from 'dayjs';

export const columns = [
  { dataIndex: 'id', title: 'ID' },
  { dataIndex: 'incr_point', title: '新增积分' },
  {
    dataIndex: 'sum_point',
    title: '累计积分',
    render: (text) => formatThousands(text),
  },
  {
    dataIndex: 'update_time',
    title: '更新时间',
    render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
  },
];
