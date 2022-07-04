/* eslint-disable import/no-unresolved */

import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../src/hello';

describe('lambda handler', () => {
  test('returns 200 on success', async () => {
    const event: APIGatewayProxyEvent = { httpMethod: 'GET', path: '/' } as any;
    const result = await handler(event);
    const parse = JSON.parse(result.body);

    expect(result.statusCode).toBe(200);
    expect(parse.message).toBe('Hello, World!');
  });
});
