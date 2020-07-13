import { defineConfig} from 'umi'
import routes from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  dva: {
    hmr: true,
  },
  antd: {}
})