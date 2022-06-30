import Container from "@mui/material/Container/Container"
import HomeViewModel from "./HomeContentViewModel"

function useViewModel() {
	return HomeViewModel()
}

export const HomeContentView = () => {
	const { textButton, onChange } = useViewModel()

	return <Container></Container>
}
