const colors = [
    {color: 'green', hex:'#9EF9D5'},
    {color: 'orange', hex:'#F9D7AB'},
    {color: 'red', hex:'#F9ABB9'},
    {color: 'blue', hex:'#D6ECF9'},
    {color: 'yellow', hex:'#F9F6AC'},
    {color: 'purple', hex:'#DEC9FF'},
]


export default (color) => {
    return colors[Math.floor(Math.random() * (colors.length - 0))].hex
}