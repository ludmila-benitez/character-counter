const ProgressBar = (letter) => {
    return (
    <li key={letter.letter}>
        <span>
            {letter.letter.toUpperCase()}
        </span>
        <meter
        min="0"
        max="100"
        value={letter.percentage}>
        </meter>
        <span>
            {letter.amount}({letter.percentage.toFixed(1)}%)
        </span>
    </li>
    )
}

export {ProgressBar}