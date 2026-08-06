import { useState } from "react"
import { Header } from "./components/Header.jsx"

function App() {
    const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design **transforms** complex ideas into elegant solutions, making them easy to understand. It blends **aesthetics** and functionality seamlessly.")

    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [limitCharacter, setLimitCharacter] = userState(false)
    const [limitValue, setLimitValue] = useState(300)

    const characters = excludeSpaces ? text.replace(/\s/g, "").length : "text.length"
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/g).length
    const sentences = text.trim() === "" ? 0 : text.split("/[.!?]/").filter(sentence => sentence.trim() !== "").length
    const readingTime = Math.ceil(words / 200)

    const handleChangeTextArea = (e) =>{
        const value = e.target.value
        if (limitCharacter){
            if(value.length <= limitValue){
                setText(value)
            }
        } else {
            setText(value)
        }
    }
    const handleChangeInputLimit = (e) => {
        setLimitCharacter(!limitCharacter)
        const newText = text.slice(0, limitValue)
        setText(newText)
    }

    const cleanText = text.toLocaleLowerCase().replace(/[^a-záéíóúÜ]/g, "")
    const total= cleanText.length


    const dictionaryLetters = { test: 1 }
    cleanText.split("").forEach (letter => dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1)
    const letters = Object.entries(dictionaryLetters).map(dataLetter => {
        const letter = dataLetter[0]
        const amountLetter = dataLetter[1]
        const infoToRenderLetter = {
            letter: letter,
            amount: amountLetter,
            porcentaje: (total/amountLetter)*100,
        }
    })
    const sortLetters = letters.sort((a,b) => b.amount - a.amount)

    return (
        <main>
            <Header />
            <h2>Analyze your text <br /> in real-time.</h2>
            <textarea 
                placeholder="Write your text..."
                onChange={handleChangeTextArea}
            value={text}
            ></textarea>
            <div>
                <label>
                    <input type="checkbox"
                    checked={excludeSpaces}
                    onChange={() => setExcludeSpaces(!excludeSpaces)}
                    />
                    Excluir espacios
                </label>
                <label>
                    <input type="checkbox"
                    checked={limitCharacter}
                    onChange={() => setLimitCharacter(handleChangeInputLimit)}
                    />
                    Límite de caracteres
                </label>
                <label>
                    limitCharacter && <input type="number" value={setLimitValue}
                    onChange={(e) => setLimitValue (e.target.value)}/>
                </label>
            </div>
            <p>Cantidad de caracteres: {characters}</p>
            <p>Cantidad de palabras: {words}</p>
            <p>Cantidad de oraciones: {sentences}</p>
            <p>Tiempo aprox de lectura: {readingTime} minuto/s</p>
            <section>
                <h2>Cantidad de letras</h2>
                <article>
                    {
                        letters.map(obj => 
                            <div key= {obj.letter}>
                                <span>{obj.letter.toUpperCase()}</span>
                                <meter min="0" max="100" value={obj.porcentaje}></meter>
                                <span>{obj.amount}({obj.porcentaje.toFixed(1)}%)</span>
                            </div>
                        )
                    }
                </article>
            </section>
        </main>
    )
}
export {App}
