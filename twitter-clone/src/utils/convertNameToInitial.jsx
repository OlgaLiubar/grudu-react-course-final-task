export default function convertNameToInitial(str) {
    return str.split(' ').map((n)=>n[0]).join('');
}

