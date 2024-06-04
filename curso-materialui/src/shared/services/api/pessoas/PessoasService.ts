import { Environment } from "../../../environment"
import {Api} from "../axios-config/index"


interface IDetalhePessoa{
    id:number,
    email:string,
    cidadeId:number,
    nomeCompleto:string
}
interface IListagemPessoa{
    id:number,
    email:string,
    cidadeId:number,
    nomeCompleto:string
}

type TPessoasComTotalCount = {
    data: IListagemPessoa,
    count: number
}

const getAll = async(page:1, filter:''): Promise<TPessoasComTotalCount | Error> =>{
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`
        const{data, headers}= await Api.get(urlRelativa)
        if (data) {
            return{
                data,
                count:Number(headers['x-total-count']|| Environment.LIMITE_DE_LINHAS),
            }
        }
        return new Error('Erro ao buscar os dados')
    } catch (error) {
        console.error(error)
        return new Error((error as {message:string}).message||'Erro ao conectar')
    }
}
const getById = async(id:number): Promise<IDetalhePessoa | Error> =>{
    try {
        const urlRelativa = `/pessoas/${id}`
        const{data}= await Api.get(urlRelativa)
        if (data) {
            return data
        }
        return new Error('Erro ao buscar os dados do usuário')
    } catch (error) {
        console.error(error)
        return new Error((error as {message:string}).message||'Erro ao conectar')
    }
}
const create = async(dados:Omit<IDetalhePessoa, 'id'>): Promise<number | Error> =>{
    try {
        const urlRelativa = `/pessoas`
        const{data}= await Api.post<IDetalhePessoa>(urlRelativa,dados)
        if (data) {
            return data.id
        }
        return new Error('Erro ao criar usuário')
    } catch (error) {
        console.error(error)
        return new Error((error as {message:string}).message||'Erro ao conectar')
    }
}
const deleteById = async(id:number): Promise<void | Error> =>{
    try {
        const urlRelativa = `/pessoas/${id}`
        await Api.delete(urlRelativa)
    } catch (error) {
        console.error(error)
        return new Error((error as {message:string}).message||'Erro ao conectar')
    }
}
const updateById = async(id:number, dados:IDetalhePessoa): Promise<void | Error> =>{
    try {
        const urlRelativa = `/pessoas/${id}`
        await Api.put(urlRelativa, dados)
    } catch (error) {
        console.error(error)
        return new Error((error as {message:string}).message||'Erro ao conectar')
    }
}

export const PessoasService = {
    getAll,
    getById,
    create,
    deleteById,
    updateById        
}