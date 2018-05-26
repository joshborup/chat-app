const colors = [
    {color: 'green', hex:'#9EF9D580'},
    {color: 'orange', hex:'#F9D7AB80'},
    {color: 'red', hex:'#F9ABB980'},
    {color: 'blue', hex:'#D6ECF980'},
    {color: 'yellow', hex:'#F9F6AC80'},
    {color: 'purple', hex:'#DEC9FF80'},
]


export default (color) => {
    return colors[Math.floor(Math.random() * (colors.length - 0))].hex
}