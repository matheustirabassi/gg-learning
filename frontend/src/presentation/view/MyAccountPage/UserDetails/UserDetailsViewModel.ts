import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from 'contexts/AuthContext';
import { UserAPI } from "data/api/UserAPI";
import infoUser from 'data/json/info.json';
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

export default function UserDetailsViewModel() {

	const [user, setUser] = useState<IInfoAccountInput>(infoUser)
	const [isLoadingFields, setIsLoadingFields] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { token } = useAuthContext() 

	interface IInfoAccountInput {
    name: string
    cpf: string
    email: string
    birthDate: string
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

const { handleSubmit, control } = useForm<IInfoAccountInput>({
	resolver: yupResolver(createAccountSchema),
	defaultValues: user
})


const onSubmit: SubmitHandler<IInfoAccountInput> = (data) => {
	setUser(infoUser)
	setIsLoadingFields(false)
	setIsLoading(false)
	console.log(data)
}

function getMyAccountData() {
	UserAPI.getMyAccountData(token)
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
