## Comment marche NodeJS?

# NodeJS CheatSheet

https://gist.github.com/LeCoupa/985b82968d8285987dc3

# PM2 log en temps réel

```
  pm2 logs
```

# Principes

1. Les Streams
2. Le Buffer
3. Child Process

Before...After...
https://cdn-images-1.medium.com/max/1600/1*4LsfQ0ZbZkapHDR8eTYp4g.png

# SetTimeout() et SetImmediat()

- setImmediate () permet de planifier l'exécution immédiate du rappel après les rappels d'événements d'E / S et avant setTimeout et setInterval.

- setTimeout () permet de planifier l'exécution d'un rappel ponctuel après un délai de millisecondes.

!! Utilisez toujours setImmediate , sauf si vous êtes vraiment sûr que vous avez besoin de setTimeout(,0) (mais je ne peux même pas imaginer, pour quoi faire).

- setImmediate callback setImmediate sera presque toujours exécuté avant _setTimeout(,0)_, sauf lorsqu'il est appelé en premier tick et en callback setImmediate .

- setTimeout (fn, 0) peut être utilisé pour empêcher le navigateur de geler dans une mise à jour massive.

Exception:
Par exemple, dans websocket.onmessage, vous pouvez avoir des modifications html, et si les messages continuent à arriver, _le navigateur peut se bloquer lors de l'utilisation de setImmediate_

# Child process

les child_process, permet de créer et contrôler de nouveau processus. La méthode fork permet même une communication inter processus NodeJS, simple à base de send Message style WebWorker !

```
  const spawn = require("child_process").spawn;
  const ls = spawn("/anaconda3/envs/tensorflow/bin/python", ["main.py"]);

  ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
  });

  setTimeout(() => console.log("Finis"), 5000);


  ou

  const spawn = require("child_process").spawn;

  spawn("open", ["-a", "Google Chrome", "http://yahoo.fr"]);


```

## Asynchrone avec sortie par le Buffer

```
  const spawnSync = require("child_process").spawn;
  const ls = spawnSync("/anaconda3/envs/tensorflow/bin/python", ["main.py"]);

  console.log("laa");

  setTimeout(() => console.log("Finis"), 2000);
```

## Synchrone

```
  const spawnSync = require("child_process").spawnSync;
  const ls = spawnSync("/anaconda3/envs/tensorflow/bin/python", ["main.py"]);

  console.log("laa");

  setTimeout(() => console.log("Finis"), 2000);
```

# Test Bash File

```
  const exec = require("child_process").exec;
  exec("./test.sh", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
```

# Best Practicies

- Use r2 Module

- Use debug module

```
  var debug = require("debug")("info");

  setTimeout(() => {
    const a = 2 * 10e20;
    debug("Nb est", a);
}, 2000);
```

- Use colors

```
  require('colors');
  console.log('Be careful!'.red);
  console.log('YAY, working!'.green.underline);
```

- Use Async Await

Before with Promises

```
const asyncFuncA = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("ok"), 2000)
  );
};
function asyncFuncB(mess) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(" la " + mess), 1000)
  );
}
function asyncFuncC(mess) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(" sisi " + mess), 3000)
  );
}

const res = asyncFuncA()
  .then(asyncFuncB)
  .then(asyncFuncC)
  .then(data => console.log(data))
  .catch(err => cb(err));
```

Avoid

```
function addPromise(x){
  return new Promise(resolve => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
        })
      })
    })
  });
}
```

Okay

```

const a = async () => {
  // const wait = await alpha(4);
  // const waitTwo = await beta(4);
  try {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return a + b + c;
  } catch (error) {
    console.log("Errurrrrr");
    throw new Error(error);
  }
};
a().then(res => console.log(res));

```

- Use Mocha Chai for testing

```
async function alpha(nb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(5 * nb), 2000);
  });
}
```

- Use Winston

```
const winston = require("winston");
/**
 * Logger is good
 */
const logger = winston.createLogger({
  level: "verbose",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error"
    }),
    new winston.transports.File({ filename: "./logs/combined.log" })
  ]
});
```

# Les Bibliothèques standards de NodeJS

REPL : c'est l'interpréteur que vous avez quand vous tapez node dans votre console.
assert : pour faire des tests.
console : pour les logs.
debugger : point d'arrêt, step, ...
dns : les noms de domaines.
event : tout sur la gestion des événements.
fs : tout sur le système de fichiers.
global : tout ce qui est tout le temps disponible.
http : un serveur, un client, requête, réponse, ...
net : wrapper réseau asynchrone.
path : gestion des chemins sur un système de fichier.
os : gestion du système: dossiers temporaires, noms d'hôtes, ...
querystring : échapper, analyser les arguments d'une requête.
string_decoder : permet de passer d'un buffer à une chaine.
timers : global, permet d'appeler régulièrement des actions, poser un délai avant, ...
tls : SSL, chiffrer les échanges réseaux.
dgram : datagram, UDP.
util : différents outils, héritage, tests de type, ....
zlib : compression et lecture des formats gzip.
