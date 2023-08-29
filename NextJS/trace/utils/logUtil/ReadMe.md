# Enable GCP Logging in the project

Following are the steps that needs to be performed to enable logging to GCP

### Step 1

Clone the entire repository from "ims-boilerplate-frontend"

### Step 2

The logging component is present in "utils\logUtil"

### Step 3

In the page where logging needs to be enabled, we need to

```
   import { writeLog } from "../../utils/logUtil/otelutility.js";
   import { LogLevel } from "./../utils/logUtil/LogLevel.ts";
```

Declare these variables in top of the page

```
   const pageName = <Current page from where logging is being sent to GCP>
   const projectId = <GCP ProjectID>
   const logName = <LogName that needs to go in GCP>
```

Declare these in the place where log needs to be captured

```
   const message = JSON.stringify({
     SEVERITY: LogLevel.WARNING,
     SOURCE_PATH: pageName,
     LOG_MESSAGE : "This is the main description",
     ADDTIONAL_PARAMETERS: [
       { "OptionalParam1 ": "Value1", "OptionalParam2": "Value2" },
     ],
   });
   writeLog(projectId, logName, message);
```
