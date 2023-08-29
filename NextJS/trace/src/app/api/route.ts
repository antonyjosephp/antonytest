import { NextRequest, NextResponse } from "next/server";
//import axios from "axios";
//import generateTrace from "@/utils/telemetry/tracerutility";
import { Logger } from "../../utils/logger";
import { LogLevel } from "../../utils/loglevel";
export async function GET(req: NextRequest) {
    const res = 'testing'
  //const res = generateTrace("app/api", req,"http://localhost:3000/api/PaymentService");
  // const x = res.headers.get("X-Cloud-Trace-Context");
  // const config = {
  //   headers: {
  //     "X-Cloud-Trace-Context": x,
  //   },
  // };
  // const paymentData = await axios.get(
  //   "http://localhost:3000/api/PaymentService",
  //   //config
  // );
  const message = JSON.stringify({
    severity: LogLevel.INFO,
    pageName: "TraceUtility",
    logMessage: "succesfully called payment api",
    additionalParameters: {
      "Additional Param 1": "Value",
      "Additional Param 2": "value",
    },
  });
  Logger.writeLog(message);

  //   const currencyData = await axios.get(
  //     "http://localhost:3000/api/CurrencyService"
  //   );
  return NextResponse.json({
    data: {
      paymentData: await res,
      //currencyData: await currencyData.data,
    },
  });
}