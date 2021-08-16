const styles = () => ({
    container: {
        color: 'hsl(0,0%,30%)',
        padding: '.5rem',
        borderRadius: '6px',
        border: '2px solid rgba(77, 77, 77, 0.3)',
        backgroundColor: '#fff',
        '&:hover': {
            border: '2px solid rgba(77, 77, 77, 0.5)',
            cursor: 'pointer'
        }
    },
    title: {
        fontSize: '.9rem',
        fontWeight: 500
    },
    valueContainer: {
        width: '88px',
        minWidth: '88px',
        marginRight: '5px'
    },
    valueLabel: {
        fontSize: '9px',
        fontWeight: 600,
        opacity: '.5',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    value: {
        fontSize: '13px',
        fontWeight: 400,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
});

export default styles;
