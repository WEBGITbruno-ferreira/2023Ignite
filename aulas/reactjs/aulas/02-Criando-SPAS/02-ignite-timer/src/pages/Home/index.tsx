import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { createContext, useState } from 'react'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
// import { FormProvider } from 'react-hook-form/dist/useFormContext'
import * as zod from 'zod' // usado quando não temos um export default
import { zodResolver } from '@hookform/resolvers/zod'

// formulario controlados ou  uncontrolled
// controlados, armazenando os valores dos input no estado, monitorando as vars em tempo real / Pode ser um problema para renderização do react, que sempre  que alteradmos um estado o react renderiza

// interface NewCycleFormData {
//  task: string
//  minutesAmount: number
// }
// funcionalidades do TS, não enxergam variaveis do JS, portanto uso o TYPEOF ao criar essa nova interface
// baseada no schema criado pelo ZOD anteriormente.

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
}
export const CyclesContext = createContext({} as CyclesContextType)

const newCylcleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1)
    .max(60, 'O ciclo deve ser no máximo 60 minutos'),
})

// A principal vantagem de criar este estilo de interface, é que ao criar os valids do ZOD no schema, ele já reconhece as
// variaveis aqui no interface.
type NewCycleFormData = zod.infer<typeof newCylcleFormValidationSchema> // criando com base em outra variavel

// uncontrolled - Busca os valores dos inputs no submit do form, perdemos a fluidez e ganhamos  em desempenho
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setamountSecondsPassed] = useState(0)

  // uso o register em cada input do form, e no onSubmit do form, coloco a funcao handleSubmit do userForm,
  // passando como parâmetro minha funcao
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCylcleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setamountSecondsPassed(seconds)
  }

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

  const task = watch('task')
  const isSubmitDisabled = !task

  // console.log(activeCycle)
  // return dos erros do formulário
  // console.log(formState.errors)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            {/* repasso todas as props para o formProvider  com a desestruturação acimas */}
            <NewCycleForm />
          </FormProvider>
          <CountDown />
        </CyclesContext.Provider>

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
