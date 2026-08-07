import { useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controlls } from "./components/Controlls.jsx"
import { Statistics } from "./components/Statistics.jsx"
import { letterDensity  } from "./components/LetterDensity.jsx"

function App() {
    const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")

    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [limitCharacter, setLimitCharacter] = useState(false)
    const [limitValue, setLimitValue] = useState(300)
    const [showAll, setShowAll] = useState(false)

    const handleExcludeSpace = () => {
        setExcludeSpaces(!excludeSpaces)
    }
    const handleLimitValue = () => {
        setLimitValue(!limitCharacter)
    }

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
            percentage: (amountLetter / total) * 100,
        }

        return infoToRenderLetter
    })

    const sortLetters = letters.sort((a, b) => b.amount - a.amount)

    const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)

    return (
        <main>
            <h2>
                Analyze your text <br />
                in real-time.
            </h2>
            {/* <textarea
                placeholder="Write your text..."
                onChange={handleChangeTextArea}
                value={text}
            ></textarea> */}
            <WriteArea
            handleChangeTextArea={handleChangeTextArea}
            text={text}
            />
            {/* <div>
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
            </div> */}
            <Controlls
                excludeSpaces={excludeSpaces}
                handleExcludeSpace={handleExcludeSpace}
                limitCharacter={limitCharacter}
                handleChangeInputLimit={handleChangeInputLimit}
                limitValue={limitValue}
                handleLimitValue={handleLimitValue}
            />
            {/* <div>
                <p>Character count: {characters}</p>
                <p>Word count: {words}</p>
                <p>Sentence count: {sentences}</p>
                <p>Reading time: {readingTime} minute/s</p>
            </div> */}
            <Statistics 
                words={words}
                sentences={sentences}
                readingTime={readingTime}
                characters={characters}
            />
        {/* <section>
            <h2>Cantidad de letras</h2>
            <article>
                <ul>
                    {
                        sortLetters.slice(0, 5).map(letter => 
                        (
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
                        </li>
                    ))
                    }
                </ul>
            </details>
        </section>
         */}
            <section
                sortLetters={sortLetters}
            />
        </main>
    )
}

export { App }