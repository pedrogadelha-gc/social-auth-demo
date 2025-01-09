import { defineConfig } from 'orval'

export default defineConfig({
  base: {
    input: `http://localhost:3001/docs-json`,
    output: {
      mode: 'tags-split',
      target: './lib/http/routetracker/api.ts',
      schemas: './lib/http/routetracker/types',
      httpClient: 'fetch',
      client: 'react-query',
      baseUrl: 'http://localhost:3001',
    },
  },
})
