const colors = [
    {color: 'green', hex:'#9EF9D550'},
    {color: 'orange', hex:'#F9D7AB50'},
    {color: 'red', hex:'#F9ABB950'},
    {color: 'blue', hex:'#D6ECF950'},
    {color: 'yellow', hex:'#F9F6AC50'},
    {color: 'purple', hex:'#DEC9FF50'},
    {color: 'seafoam', hex: '#F0FBF050'},
    {color: 'khaki', hex: '#F0E68C50'},
    {color: 'hotpink', hex: '#FFCCFF50'},
    {color: 'babyblue', hex: '#BAE1FF50'},
    {color: 'babygreen', hex: '#baffc950'},
    {color: 'babyorange', hex: '#ffdfba50'}, 
    {color: 'babypurple', hex: '#dbdcff50'},
]


export default () => {
    return colors[Math.floor(Math.random() * (colors.length - 0))].hex
}