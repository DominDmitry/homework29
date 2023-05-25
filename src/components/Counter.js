const Counter = ({counters, handleImageClick }) => {
    return (
        <div>
            <div>
                {counters.map((counter, index) => (
                    <div key={index}>
                        <img
                            src={`/img/smile${index + 1}.png`}
                            alt="smile"
                            onClick={() => handleImageClick(index)}
                        />
                        <span >{counter}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Counter;