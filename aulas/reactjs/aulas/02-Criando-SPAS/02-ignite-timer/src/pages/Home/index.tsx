import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod' // usado quando não temos um export default
import { differenceInSeconds } from 'date-fns'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  StopCountdownButton,
  TaskInput,
} from './styles'

const newCylcleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1)
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
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}
// uncontrolled - Busca os valores dos inputs no submit do form, perdemos a fluidez e ganhamos  em desempenho
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setamountSecondsPassed] = useState(0)

  // uso o register em cada input do form, e no onSubmit do form, coloco a funcao handleSubmit do userForm,
  // passando como parâmetro minha funcao
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCylcleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference > totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )

          clearInterval(interval)
        } else {
          setamountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle]) // closures, faço no formato de function
    setActiveCycleId(newCycle.id)
    setamountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  // console.log(activeCycle)
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
            disabled={!!activeCycle}
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
            min="1"
            disabled={!!activeCycle}
            /* max="60" */
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span> minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
