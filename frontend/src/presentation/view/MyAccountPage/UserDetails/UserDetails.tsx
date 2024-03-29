import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material"
import { Fragment } from "react"
import "../../../../assets/yup/TraducoesYup"
import { RHTextField } from "../../../components/FormComponents/RHTextField"
import UserDetailsViewModel from "./UserDetailsViewModel"

function useViewModel() {
	return UserDetailsViewModel()
}

export const UserDetails = () => {
	
	const viewModel = useViewModel()

	viewModel.initializeData()

    return (
			<Box
				width="100%"
				height="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{ background: "background.default" }}
			>
				<Box>
					<Card>
						<CardContent>
							<Box display="flex" flexDirection="column" gap={2} width={500} padding={2}>
								<Typography variant="h4" align="center">
									Suas informações
								</Typography>

								{ viewModel.isLoadingFields && (
									<Fragment>
										<Skeleton variant="rectangular" animation="wave" height={56} />
										<Skeleton variant="rectangular" animation="wave" height={56} />
										<Skeleton variant="rectangular" animation="wave" height={56} />
										<Skeleton variant="rectangular" animation="wave" height={56} />
										<Skeleton variant="rectangular" animation="wave" height={56} />
									</Fragment>
								)}

								{ !viewModel.isLoadingFields && (
									<Fragment>
										<RHTextField
											name="name"
											control={viewModel.control}
											label="Nome"
											type="text"
											disabled={viewModel.isLoading}
										/>

										<RHTextField
											name="cpf"
											control={viewModel.control}
											label="CPF"
											type="text"
											disabled={viewModel.isLoading}
										/>

										<RHTextField
											name="email"
											control={viewModel.control}
											label="E-mail"
											type="email"
											disabled={viewModel.isLoading}
										/>

										<RHTextField
											name="birthDate"
											control={viewModel.control}
											label="Data de nascimento"
											type="text"
											disabled={viewModel.isLoading}
										/>

										<RHTextField
											name="userName"
											control={viewModel.control}
											label="Usuário"
											type="text"
											disabled={viewModel.isLoading}
										/>
									</Fragment>
								)}
							</Box>
						</CardContent>
					</Card>
				</Box>
			</Box>
		)
}
