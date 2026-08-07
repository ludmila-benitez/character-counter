const WriteArea = ({handleChangeTextArea, text}) => {
    return(
    <textarea
    placeholder="Write your text..."
    onChange={handleChangeTextArea}
    value={text}
    ></textarea>
    )
}

export{WriteArea}