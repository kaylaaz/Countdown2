import Counter from "./Counter.js"

export default function Board() {
    const buttons = [1, 2, 3, 4, "Bob"];
    return (
        <>
            <h1>Counter Demo App</h1>
            {buttons.map((element, index) => (
                <Counter
                    name={"Button " + element}
                    key={"button" + index}
                    color="red"
                />
            ))}
        </>
    );
}