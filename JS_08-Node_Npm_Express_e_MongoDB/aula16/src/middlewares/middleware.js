exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = "Exemplo de variavel local";
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log("Sou seu outro middleware");
    next();
}