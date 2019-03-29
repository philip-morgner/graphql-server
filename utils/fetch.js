import http from "http";

// const AUTH_URL = "http://localhost:4000/api/users/login";
// const TESTER_CREDENTIALS = { email: "tester3@testing.de", password: "tester3" };

// export const auth = () =>
//   fetch("POST", AUTH_URL, undefined, TESTER_CREDENTIALS);

export const fetch = (method, url, auth = "", payload) =>
  new Promise((resolve, reject) => {
    const path = url.slice(url.indexOf("/api"));
    const addr = url.split("/")[2].split(":");
    const hostname = addr[0];
    const port = addr[1];

    let json = "";
    if (method === "POST" && payload) {
      json = JSON.stringify(payload);
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: auth,
      "Content-Length": json.length
    };

    const options = {
      hostname,
      port,
      path,
      method,
      headers
    };

    const req = http.request(options, res => {
      // console.log(`STATUS: ${res.statusCode}`);
      let data = "";
      res.setEncoding("utf8");
      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", e => {
      console.error(`ERROR: ${e.message}`);
    });
    if (method === "POST" && json.length > 0) {
      req.write(json);
    }
    req.end();
  });

// TODO make it like the fetch API
// export default fetch = (url, headers = {}) =>
//   new Promise((resolve, reject) => {
//     const path = url.slice(url.indexOf("/api"));
//     const addr = url.split("/")[2].split(":");
//     const hostname = addr[0];
//     const port = addr[1];

//     let json = "";
//     if (method === "POST") {
//       json = JSON.stringify(headers.body);
//     }

//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: headers.authorization,
//       "Content-Length": json.length,
//       ...headers
//     };

//     const options = {
//       hostname,
//       port,
//       path,
//       method: headers.method,
//       headers
//     };

//     const req = http.request(options, res => {
//       console.log(`STATUS: ${res.statusCode}`);
//       let data = "";
//       res.setEncoding("utf8");
//       res.on("data", chunk => {
//         data += chunk;
//       });
//       res.on("end", () => {
//         try {
//           const parsed = JSON.parse(data);
//           resolve(parsed);
//         } catch (e) {
//           reject(e);
//         }
//       });
//     });

//     req.on("error", e => {
//       console.error(`ERROR: ${e.message}`);
//     });
//     if (method === "POST" && json.length > 0) {
//       req.write(json);
//     }
//     req.end();
//   });
