# Duplicate HTTP Request 'data' Event Listener

This repository demonstrates a common, yet subtle error in Node.js HTTP servers: attaching the same event listener multiple times to the 'data' event of an incoming request.  This leads to unexpected behavior where the request body is processed multiple times.

## Bug Description

The `bug.js` file shows a simple HTTP server with the 'data' event listener attached twice.  This results in receiving the same request data chunk multiple times. This can cause issues in data processing, leading to incorrect calculations, database write errors, or other unforeseen problems.

## Solution

The `bugSolution.js` provides the correct implementation. The 'data' event listener is added only once. The complete request data is accumulated, then processed when the request ends.