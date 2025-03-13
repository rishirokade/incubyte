function add(s) {
    // checking empty string condition
    if (!s) return 0;

    // handle new line condition and ,
    const delimiter = /,|\n/;

    const numberArray = s.split(delimiter).map((value) => {
        const number = Number(value);
        return isNaN(number) ? 0 : number;
    });

    // checking is containing negative
    const negativeValueArray = numberArray.filter((num) => num < 0);
    if (negativeValueArray.length > 0) {
        throw "containing negative value" + " " + negativeValueArray.join(",");
    }

    // create sum using reduced
    return numberArray.reduce((acc, curr) => acc + curr, 0);
}

console.log(add("1,5")); // 6

try {
    add("-1,-5");
} catch (error) {
    console.log(error); // 6
}
