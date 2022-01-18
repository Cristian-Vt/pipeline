#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EnablementTechRadarUiStack } from '../lib/enablement-tech-radar-ui-stack';

const app = new cdk.App();
new EnablementTechRadarUiStack(app, 'EnablementTechRadarUiStack', {
  env: {
    region: 'eu-west-1',
  },
});