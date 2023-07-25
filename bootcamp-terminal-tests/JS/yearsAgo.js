export default function yearsAgo(year) {
    console.log(year)
    const today = new Date();
    if (year !=='') {
        return today.getFullYear() - year;

    }else{
    return "no year was found"
}
}
console.log(yearsAgo(''))
