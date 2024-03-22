function getGrade(score: number): string {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getGrade(85)); // Output: 'B'
console.log(getGrade(72)); // Output: 'C'
console.log(getGrade(95)); // Output: 'A'


function calculateArea(length, width) {
    const area = length * width;
    console.log(`The area is ${area} square units.`);
}

// Calling the function with arguments
calculateArea(5, 3);
