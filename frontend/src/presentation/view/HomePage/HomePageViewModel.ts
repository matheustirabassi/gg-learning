import { useState } from "react";

export default function HomePageViewModel() {
    const [textButton, setTextButton] = useState("banana")

    function onChange(text: string) {
        setTextButton(text)
        if(text === "abacate") {
            alert(text)
        }
    }

    return {
        textButton,
        onChange,
    }
}