module.exports = function reverse (n) {

    if (n < 0) {n = Math.abs(n)}
        n = n.toString().split('').reverse()
        return Number(n.join(''));

}
