exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = "Exemplo de variavel local";
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log("Sou seu outro middleware");
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && "EBADCSRFTOKEN" === err.code) {
        return res.render("404");
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};