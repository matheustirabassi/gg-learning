import { useState } from "react";

export default function HomeContentViewModel() {
	const [textButton, setTextButton] = useState("banana");

	function onChange(text: string) {
		setTextButton(text);
		if (text === "abacate") {
			alert(text);
		}
	}

	return {
		textButton,
		onChange,
	};
}
