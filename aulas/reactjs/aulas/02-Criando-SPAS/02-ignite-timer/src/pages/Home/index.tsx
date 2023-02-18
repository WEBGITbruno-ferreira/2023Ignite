import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod' // usado quando não temos um export default

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

const newCylcleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})
// formulario controlados ou  uncontrolled
// controlados, armazenando os valores dos input no estado, monitorando as vars em tempo real / Pode ser um problema para renderização do react, que sempre  que alteradmos um estado o react renderiza

// uncontrolled - Busca os valores dos inputs no submit do form, perdemos a fluidez e ganhamos  em desempenho
export function Home() {
  // uso o register em cada input do form, e no onSubmit do form, coloco a funcao handleSubmit do userForm,
  // passando como parâmetro minha funcao
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCylcleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  console.log(formState.errors)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <TaskInput
            id="taskt"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestion"
            {...register('task')}
          />
          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>
          <label htmlFor="minutesAmount"></label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step="5"
            min="5"
            /* max="60" */
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span> minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
