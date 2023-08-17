<!--<script src="https://npmcdn.com/srbjslogger/SRBJSLogger.min.js"></script>-->

<!--<script src="https://npmcdn.com/srbjslogger@1.3.17/SRBJSLogger.min.js"></script>-->

<!--<ui5-message-strip design="Information" hidden="true">Information MessageStrip</ui5-message-strip>-->

<!--<ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>-->

<!--<ui5-title level="H1" style="">Guide for the SRBJSLogger</ui5-title>-->

<!--<code>Testing the code</code>-->

# SRBJSLogger

[![](https://img.shields.io/static/v1.svg?color=f5d410\&labelColor=11215a\&logoColor=ffffff\&style=for-the-badge\&label=srb.at\&message=Blog)](https://www.srb.at/blog--events/) [![](https://img.shields.io/static/v1.svg?color=f5d410\&labelColor=11215a\&logoColor=ffffff\&style=for-the-badge\&label=srb.at\&message=Products)](https://www.srb.at/produkte/) [![](https://img.shields.io/static/v1.svg?color=f5d410\&labelColor=11215a\&logoColor=ffffff\&style=for-the-badge\&label=srb.at\&message=github\&logo=github)](https://github.com/SRBConsultingTeam/) [![](https://img.shields.io/static/v1.svg?color=f5d410\&labelColor=11215a\&logoColor=ffffff\&style=for-the-badge\&label=NPM\&message=srbjslogger\&logo=npm)](https://www.npmjs.com/package/srbjslogger) [![](https://img.shields.io/static/v1.svg?color=f5d410\&labelColor=11215a\&logoColor=ffffff\&style=for-the-badge\&label=License\&message=MIT)](LICENSE)

## Getting started

**Initialize the SRBJSLogger via the NPM CDN:**

For initializing the Logger via CDN, simply copy and paste the following in the index file of the HTML5 app:

```markup
<script src="https://npmcdn.com/srbjslogger/SRBJSLogger.min.js"></script>
```

**Initialize the SRBJSLogger via downloading the latest version:**

Download the latest minified version from [here](https://npmcdn.com/srbjslogger/SRBJSLogger.min.js). Place that file into a directory of the app's folder structure, where it can access that file. For UI5 apps, using the index.html bootrapping, instantiate the Logger like above via

```markup
<script src="/path/to/SRBJSLogger.min.js"></script>
```

For UI5 apps, not using the index.html startup logic, paste the following in the ressources section of the manifest file:

```json
"resources": { "js": [ { "uri": "path/to/SRBJSLogger.min.js" } ] }
```

**Initialize the Logger temporarily via the browsers console. Just copy, paste and execute the following snippet in the browsers console:**

```js
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://npmcdn.com/srbjslogger/SRBJSLogger.min.js';
script.addEventListener("load", function() { SRBJSLogger.getVersionInfo(); });
    
document.head.appendChild(script);
```

\


## Documentation

### The init function

```js
SRBJSLogger.init("SCOPE","TOPIC",{verbose: true})
```

Execute Open the console to see the result

**Parameters**\
\
`init(scope[String], topic[String], opt[{}])`

*   **scope**

    Sets the scope of all log messages

*   **topic**

    Sets the topic of all log messages

*   **opt**

    *   This variable has to contain an object or undefined. Setting the object property `verbose` to `true`, logs a badge, after the init function is processed.

***

### The log function

```js
SRBJSLogger.log("Title", "My message", { scope: "testscope", topic: "testtopic" })
```

Execute Open the console to see the result

**Parameters**\
\
`init(title[String], message[String], opt[{}])`

*   **title**

    Sets the title ( left ) of the badge

*   **message**

    Sets the message ( left ) of the badge

*   **opt**

    *   This variable has to contain an object or undefined. Setting the propeties `scope` and/or `topic`, of this object, overwirtes state and topic, if they were set via the `init` method

\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/logResult.png)

***

### The error function

```js
SRBJSLogger.error("Title", "My message", { scope: "testscope", topic: "testtopic" })
```

Execute Open the console to see the result

**Parameters**\
\
`init(title[String], message[String], opt[{}])`

*   **title**

    Sets the title ( left ) of the badge

*   **message**

    Sets the message ( left ) of the badge

*   **opt**

    *   This variable has to contain an object or undefined. Setting the propeties `scope` and/or `topic`, of this object, overwirtes state and topic, if they were set via the `init` method

\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/errorResult.png)

***

### The warn function

```js
SRBJSLogger.warn("Title", "My message", { scope: "testscope", topic: "testtopic" })
```

Execute Open the console to see the result

**Parameters**\
\
`init(title[String], message[String], opt[{}])`

*   **title**

    Sets the title ( left ) of the badge

*   **message**

    Sets the message ( left ) of the badge

*   **opt**

    *   This variable has to contain an object or undefined. Setting the propeties `scope` and/or `topic`, of this object, overwirtes state and topic, if they were set via the `init` method

\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/warnResult.png)

***

### The getVersionInfo function

```js
SRBJSLogger.getVersionInfo()
```

Execute Open the console to see the result\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/getVersionInfoResult.png)

***

### The developer function

```js
SRBJSLogger.developer(true, {obi: "wan kenobi"});
```

Execute Open the console to see the result

**Parameters**\
\
`developer(showQrCode[true|false], customObject[{}])`

*   **showQrCode**

    Displays a QRCode in the console if a value is provided resulting in `true`

*   **customObject**

    Supply a object here. The object is appended in the logoutput and also in the QRCode data like in the example below

\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/developerResult.png)

***
