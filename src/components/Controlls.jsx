const Controlls = (
    excludeSpaces, 
    handleExcludeSpace, 
    limitCharacter, 
    handleChangeInputLimit,
    limitValue, 
    handleLimitValue) => {
    (
    <div>
        <label>
            <input
                type="checkbox"
                checked={excludeSpaces}
                onChange={() => handleExcludeSpace(!excludeSpaces)}
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
    )
}

export{Controlls}