<!--<script src="https://npmcdn.com/srbjslogger/SRBJSLogger.min.js"></script>-->

<!--<ui5-message-strip design="Information" hidden="true">Information MessageStrip</ui5-message-strip>-->

<!--<ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>-->

<!--<ui5-title level="H1" style="">Guide for the SRBJSLogger</ui5-title>-->

<!--<code>Testing the code</code>-->

# Guide for the SRBJSLogger

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

### The log function

```js
SRBJSLogger.log("Title", "My message")
```

Execute Open the console to see the result\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/logResult.png)

***

### The error function

```js
SRBJSLogger.error("Title", "My message")
```

Execute Open the console to see the result\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/errorResult.png)

***

### The warn function

```js
SRBJSLogger.warn("Title", "My message")
```

Execute Open the console to see the result\
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

**Parameters**\
\
`developer(showQrCode[true|false], customObject[{}])`

*   **showQrCode**
*   Displays a QRCode in the console if a value is provided resulting in `true`
*   **customObject**
*   Supply a object here. The object is appended in the logoutput and also in the QRCode data like in the example below

Execute Open the console to see the result\
\
**Results in**\
\
![](https://unpkg.com/srbjslogger/ressources/images/developerResult.png)

***
