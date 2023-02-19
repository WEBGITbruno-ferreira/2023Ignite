import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext() // Necessita do Provider do Form por volta

  return (
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
  )
}
