import {Stack, } from 'aws-cdk-lib';
import queue = require ('../lib/pipeline-stack');
import'@aws-cdk/assert/jest'

// example test. To run these tests, uncomment this file along with the
// example resource in lib/pipeline-stack.ts
test('SQS Queue Created', () => {
    const stack = new Stack();
    const queue_resource = new queue.PipelineStack(stack, 'lambdafunction');
    
    expect(queue_resource).toHaveResource('AWS::SQS::Queue', {
        VisibilityTimeout: 300
    })
});
