import { useParams, useSearchParams } from 'react-router-dom'

import { ResultParamsType } from 'types/Params'
import { UseValidateParamsType } from 'types/Hooks'

export const useValidateParams = (): UseValidateParamsType => {
	const product = useParams<{ name: string }>()
    const [searchParams] = useSearchParams()

    const params = {} as ResultParamsType

    if (product && product.name) {
        params['query'] = product.name   
    }

    searchParams.forEach((key, value) => params[value as keyof ResultParamsType] = key)

    return { params } 
}