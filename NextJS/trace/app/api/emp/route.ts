import { context } from '@opentelemetry/api';
import { NextResponse } from 'next/server';

import { createSpanByPropagatingContext } from '../../../utils/traceUtil/tracerUtility';

export async function GET(request: Request) {
    let traceID = request.headers.get('traceparent');
    let baggage = request.headers.get('baggage');

    let carrier = { traceparent: traceID, context: context, baggage: baggage };
    createSpanByPropagatingContext('EMP Span', carrier, true);

    return NextResponse.json({
        data: {
            emp_carrier: carrier,
        },
    });
}
