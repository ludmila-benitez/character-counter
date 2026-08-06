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
        </main>
    )
}
export {App}
