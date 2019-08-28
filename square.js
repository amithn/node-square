
function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    await sleep(3000);
} 


module.exports = x => {
    const xx = x ** 2;
    console.log(`the square of ${x} is ${xx}`);
    demo();
    return xx;
}




