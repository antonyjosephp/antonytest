import { TraceExporter } from '@google-cloud/opentelemetry-cloud-trace-exporter';
import * as api from '@opentelemetry/api';
import { W3CTraceContextPropagator } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
const sdk = new NodeSDK({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'trace12',
    }),
    spanProcessor: new SimpleSpanProcessor(new TraceExporter()),
});
api.propagation.setGlobalPropagator(new W3CTraceContextPropagator());
sdk.start();
