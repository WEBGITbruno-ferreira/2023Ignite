import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
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
  minutesAmount: zod
    .number()
    .min(5)
    .max(60, 'O ciclo deve ser no máximo 60 minutos'),
})
// formulario controlados ou  uncontrolled
// controlados, armazenando os valores dos input no estado, monitorando as vars em tempo real / Pode ser um problema para renderização do react, que sempre  que alteradmos um estado o react renderiza

// interface NewCycleFormData {
//  task: string
//  minutesAmount: number
// }
// funcionalidades do TS, não enxergam variaveis do JS, portanto uso o TYPEOF ao criar essa nova interface
// baseada no schema criado pelo ZOD anteriormente.

// A principal vantagem de criar este estilo de interface, é que ao criar os valids do ZOD no schema, ele já reconhece as
// variaveis aqui no interface.
type NewCycleFormData = zod.infer<typeof newCylcleFormValidationSchema> // criando com base em outra variavel

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}
// uncontrolled - Busca os valores dos inputs no submit do form, perdemos a fluidez e ganhamos  em desempenho
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  // uso o register em cada input do form, e no onSubmit do form, coloco a funcao handleSubmit do userForm,
  // passando como parâmetro minha funcao
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCylcleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle]) // closures, faço no formato de function
    setActiveCycleId(newCycle.id)
    reset()
  }
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const task = watch('task')
  const isSubmitDisabled = !task

  console.log(activeCycle)
  // return dos erros do formulário
  // console.log(formState.errors)

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
