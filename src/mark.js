export default function devToolMark() {
    const one = {
        color: '#fff',
        background: 'aqua',
        padding: '5px 10px',
        'border-left-top-radius': '3px',
        'border-left-bottom-radius': '3px'
    };
    const two = {
        color: '#fff',
        background: '#6cf',
        padding: '5px 10px',
        'border-right-top-radius': '3px',
        'border-right-bottom-radius': '3px'
    };

    console.log(
        '%c link %c start ',
        Object.entries(one)
            .map(attr => {
                return attr[0] + ':' + attr[1];
            })
            .join(';'),
        Object.entries(two)
            .map(attr => {
                return attr[0] + ':' + attr[1];
            })
            .join(';')
    );
    console.log('(￢_￢)');
}
