const Statistics = (
    characters, 
    sentences, 
    words, 
    readingTime) => {
    return (
        <div>
            <p>Character count: {characters}</p>
            <p>Word count: {words}</p>
            <p>Sentence count: {sentences}</p>
            <p>Reading time: {readingTime} minute/s</p>
        </div>
    )
}

export{Statistics}