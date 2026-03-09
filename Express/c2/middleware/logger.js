module.exports = (req, res, next) => {

console.log("----- REQUEST -----");

console.log("Method:", req.method);
console.log("URL:", req.originalUrl);
console.log("Time:", new Date().toISOString());

res.on("finish", () => {
console.log("Status:", res.statusCode);
console.log("-------------------");
});

next();

};