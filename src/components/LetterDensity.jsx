const letterDensity = (sortLetters) => {
    return (
        <section>
            <h2>Cantidad de letras</h2>
            <article>
                <ul>
                    {
                        sortLetters.slice(0, 5).map(letter => (
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
                        ))
                    }
                </ul>
            </article>

            <details>
                <summary>
                    See more
                </summary>
                <ul>
                    {
                    sortLetters.slice(5, sortLetters.length).map(letter => (
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
                            </li>)
                    )
                    }
                </ul>
            </details>

        </section>
    )
}

export{letterDensity}