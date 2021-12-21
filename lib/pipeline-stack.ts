import { Stack, StackProps, aws_sqs, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const queue = new aws_sqs.Queue(this, 'PipelineQueue', {
      visibilityTimeout: Duration.seconds(300)
    });
  }
}
