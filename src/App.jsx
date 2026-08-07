import { useState } from "react"
import { Header } from "./components/Header.jsx"

function App() {
    const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")

    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [limitCharacter, setLimitCharacter] = useState(false)
    const [limitValue, setLimitValue] = useState(300)
    const [showAll, setShowAll] = useState(false)

    const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/g).length
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length
    const readingTime = Math.ceil(words / 180)

    const handleChangeTextArea = (e) => {
        const value = e.target.value

        if (limitCharacter) {
            if (value.length <= limitValue) {
                setText(value)
            }
        } else {
            setText(value)
        }
    }

    const handleChangeInputLimit = () => {
        setLimitCharacter(!limitCharacter)

        const newText = text.slice(0, limitValue)
        setText(newText)
    }

    const cleanText = text.toLocaleLowerCase().replace(/[^a-záéíóúü]/g, "")
    const total = cleanText.length

    const dictionaryLetters = {}

    cleanText.split("").forEach(letter => {
        dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
    })

    const letters = Object.entries(dictionaryLetters).map(dataLetter => {
        const letter = dataLetter[0]
        const amountLetter = dataLetter[1]

        const infoToRenderLetter = {
            letter: letter,
            amount: amountLetter,
            porcentaje: (amountLetter / total) * 100,
        }

        return infoToRenderLetter
    })

    const sortLetters = letters.sort((a, b) => b.amount - a.amount)

    const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)

    return (
        <main>
            <Header />

            <h2>
                Analyze your text <br />
                in real-time.
            </h2>

            <textarea
                placeholder="Write your text..."
                onChange={handleChangeTextArea}
                value={text}
            ></textarea>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={() => setExcludeSpaces(!excludeSpaces)}
                    />
                    Exclude spaces
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={limitCharacter}
                        onChange={handleChangeInputLimit}
                    />
                    Character limit
                </label>

                <label>
                    {limitCharacter && (
                        <input
                            type="number"
                            value={limitValue}
                            onChange={(e) => setLimitValue(Number(e.target.value))}
                        />
                    )}
                </label>
            </div>

            <p>Character count: {characters}</p>
            <p>Word count: {words}</p>
            <p>Sentence count: {sentences}</p>
            <p>Reading time: {readingTime} minute/s</p>

            <section>
                <h2>Letter count</h2>

                <article>
                    {visibleLetters.map(obj => (
                        <div key={obj.letter}>
                            <span>{obj.letter.toUpperCase()}</span>
                            <meter
                                min="0"
                                max="100"
                                value={obj.porcentaje}
                            ></meter>
                            <span>
                                {obj.amount} ({obj.porcentaje.toFixed(1)}%)
                            </span>
                        </div>
                    ))}
                </article>

                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? "See less" : "See more"}
                </button>
            </section>
        </main>
    )
}

export { App }