import { defineConfig } from 'umi';
import routes from './routes'
import aliyunTheme from '@ant-design/aliyun-theme';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  antd: {},
  theme: aliyunTheme,
  routes
});
