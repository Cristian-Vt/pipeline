import { Stack, StackProps, aws_s3, RemovalPolicy, aws_s3_deployment } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';

export class EnablementTechRadarUiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const s3Tr = new aws_s3.Bucket(this, 's3', {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      bucketName: 'locococooooooo-adadadadadasdafafaaf'
    });

    new aws_s3_deployment.BucketDeployment(
      this,
      'deployStaticWebsite',
      {
        sources: [aws_s3_deployment.Source.asset(path.join(__dirname, `/../techRadar/`))],
        destinationBucket: s3Tr,
      }
    );
  }
}
