import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from 'contexts/AuthContext';
import { UserAPI } from "data/api/UserAPI";
import { UserDTO } from 'data/dto/UserDTO';
import infoUser from 'data/json/info.json';
import { parseDateToString } from 'helper/DateHelper';
import { useDebounce } from 'hooks/UseDebounce';
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

export default function UserDetailsViewModel() {

	const [user, setUser] = useState<IInfoAccountInput>(infoUser)
	const [isLoadingFields, setIsLoadingFields] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { debounce } = useDebounce(5000)
	const { token } = useAuthContext()

	interface IInfoAccountInput {
		name: string
		cpf: string
		email: string
		birthDate: string
		typeUser: string
		userName: string
		password: string
	}

	const createAccountSchema = yup.object().shape({
		name: yup.string().required(),
		cpf: yup.string().required(),
		email: yup.string().email().required(),
		birthDate: yup.string().required().min(10).max(10),
		userName: yup.string().required(),
		password: yup.string().required().min(3),
	})

	const { handleSubmit, control,  setValue} = useForm<UserDTO>({
		resolver: yupResolver(createAccountSchema),
	})

	const onSubmit: SubmitHandler<IInfoAccountInput> = (data) => {
		setUser(infoUser)
		setIsLoadingFields(false)
		setIsLoading(false)
		console.log(data)
	}

	function getMyAccountData() {
		debounce(() => {
			UserAPI.getMyAccountData(token)
				.then((res) => {
					if (res instanceof Error) {
						alert(res.message)
					} else {
						setUser(res)
						setValue("name", res.name)
						setValue("cpf", res.cpf)
						setValue("email", res.email)
						setValue("birthDate", parseDateToString(new Date(res.birthDate)))
						setValue("userName", res.userName)
						setValue("password", res.password)
						console.log(user)
					}
				})
		})
	}

	function initializeData() {
		getMyAccountData()
	}

	return {
		user, setUser,
		isLoadingFields, setIsLoadingFields,
		isLoading, setIsLoading,
		handleSubmit, control,
		onSubmit,
		initializeData
	}
}
