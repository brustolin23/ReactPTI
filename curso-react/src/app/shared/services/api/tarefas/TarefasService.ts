import { Api } from "../ApiConfig";
import { ErrorException } from "../ErrorException";

export interface ITarefa{
    id:string;
    title:string;
    isCompleted:boolean;
}

const getAll = async (): Promise<ITarefa[] | ErrorException> => {
    try {
        const { data } = await Api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ErrorException(error.message || 'Erro ao consultar dados')
    }
};
const getById = async (id:number): Promise<ITarefa | ErrorException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ErrorException(error.message || 'Erro ao consultar dados')
    }
};
const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ErrorException> => {
    try {
        const { data } = await Api().post('/tarefas', dataToCreate);
        return data;
    } catch (error: any) {
        return new ErrorException(error.message || 'Erro ao criar dados')
    }
};
const updateById = async (id:string, dataToUpdate:ITarefa): Promise<ITarefa | ErrorException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ErrorException(error.message || 'Erro ao atualizar dados')
    }
};
const deleteById = async (id:string): Promise<undefined | ErrorException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    } catch (error: any) {
        return new ErrorException(error.message || 'Erro ao deletar dados')
    }
};


export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};