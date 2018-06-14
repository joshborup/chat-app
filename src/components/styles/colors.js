const colors = [
    {color: 'green', hex:'#9EF9D550'},
    {color: 'orange', hex:'#F9D7AB50'},
    {color: 'red', hex:'#F9ABB950'},
    {color: 'blue', hex:'#D6ECF950'},
    {color: 'yellow', hex:'#F9F6AC50'},
    {color: 'purple', hex:'#DEC9FF50'},
    {color: 'seafoam', hex: '#F0FBF050'}
]


export default () => {
    return colors[Math.floor(Math.random() * (colors.length - 0))].hex
}