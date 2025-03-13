function add(s) {
    // checking empty string condition
    if (!s) return 0;

    // split string by , and convert into number
    const numberArray = s.split(",").map((value) => {
        const number = Number(value);
        return isNaN(number) ? 0 : number;
    });

    // create sum using reduced
    return numberArray.reduce((acc, curr) => acc + curr, 0);
}

add("1,5");
