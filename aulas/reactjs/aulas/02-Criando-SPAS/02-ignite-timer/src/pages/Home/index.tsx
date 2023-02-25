import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'

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
import { CyclesContext } from '../../contexts/CyclesContext'

// formulario controlados ou  uncontrolled
// controlados, armazenando os valores dos input no estado, monitorando as vars em tempo real / Pode ser um problema para renderização do react, que sempre  que alteradmos um estado o react renderiza

// interface NewCycleFormData {
//  task: string
//  minutesAmount: number
// }
// funcionalidades do TS, não enxergam variaveis do JS, portanto uso o TYPEOF ao criar essa nova interface
// baseada no schema criado pelo ZOD anteriormente.

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
  const { createNewCycle, interrupCurrentCycle, activeCycle } =
    useContext(CyclesContext)

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

  function handleCreateNewCycle(data: NewCycleFormData) {
    //   console.log(data)
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  // console.log(activeCycle)
  // return dos erros do formulário
  // console.log(formState.errors)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          {/* repasso todas as props para o formProvider  com a desestruturação acimas */}
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountdownButton onClick={interrupCurrentCycle} type="button">
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
