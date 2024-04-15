var x = {
    resource: '/items/{itemId}',
    path: '/items/100',
    httpMethod: 'PUT',
    headers: null,
    multiValueHeaders: null,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    pathParameters: { itemId: '100' },
    stageVariables: null,
    requestContext: {
        resourceId: 'dqsdum',
        resourcePath: '/items/{itemId}',
        operationName: '/items',
        httpMethod: 'PUT',
        extendedRequestId: 'U0jXBGaINjMFQwg=',
        requestTime: '18/Mar/2024:10:35:37 +0000',
        path: '/items/{itemId}',
        accountId: '992382398545',
        protocol: 'HTTP/1.1',
        stage: 'test-invoke-stage',
        domainPrefix: 'testPrefix',
        requestTimeEpoch: 1710758137475,
        requestId: '5b883212-19aa-4df7-95ee-2c8d039b4dbb',
        identity: {
            cognitoIdentityPoolId: null,
            cognitoIdentityId: null,
            apiKey: 'test-invoke-api-key',
            principalOrgId: null,
            cognitoAuthenticationType: null,
            userArn: 'arn:aws:iam::992382398545:root',
            apiKeyId: 'test-invoke-api-key-id',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            accountId: '992382398545',
            caller: '992382398545',
            sourceIp: 'test-invoke-source-ip',
            accessKey: 'ASIA6ODUZWBIQFSSAUUR',
            cognitoAuthenticationProvider: null,
            user: '992382398545'
        },
        domainName: 'testPrefix.testDomainName',
        apiId: '87at8mn6x1'
    },
    body: '{\n    "id":"1",\n    "price":"20",\n    "name":"Apple"\n}',
    isBase64Encoded: false
}

console.log(JSON.stringify(x))