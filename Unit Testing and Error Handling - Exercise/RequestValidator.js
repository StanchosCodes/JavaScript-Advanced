function validator(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g; // the g stands for global
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialSymbols = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!methods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!obj.hasOwnProperty('uri')) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (obj.uri !== '*' && !obj.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!versions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version"); 
    }

    if (!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message"); 
    }

    for (let charecter of obj.message) {
        if (specialSymbols.includes(charecter)) {
            throw new Error("Invalid request header: Invalid Message"); 
        }
    }

    return obj;
}

console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(validator({ method: 'POST', uri: 'home.bash', message: 'rm -rf /*' }));

console.log(validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));