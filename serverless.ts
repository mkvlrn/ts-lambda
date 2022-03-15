/* eslint-disable import/no-import-module-exports */

import type { AWS } from '@serverless/typescript'

const config: AWS = {
  service: 'ts-lambda',
  frameworkVersion: '3',
  plugins: ['serverless-plugin-typescript', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    memorySize: 128,
    region: 'sa-east-1',
  },
  functions: {
    check: {
      handler: 'src/hello.handler',
      events: [
        {
          http: {
            method: 'get',
            path: '/',
            cors: true,
          },
        },
      ],
    },
  },
}

module.exports = config
