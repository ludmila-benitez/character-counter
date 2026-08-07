
import { ProgressBar } from "./ProgressBar"

const letterDensity = (sortLetters) => {
    return (
        <section>
            <h2>Cantidad de letras</h2>
            <article>
                <ul>
                    {
                        sortLetters.slice(0, 5).map(letter => (
                            <ProgressBar letter={letter} />
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
                        <ProgressBar letter={letter} />
                    ))
                    }
                </ul>
            </details>
        </section>
    )
}

export{letterDensity}