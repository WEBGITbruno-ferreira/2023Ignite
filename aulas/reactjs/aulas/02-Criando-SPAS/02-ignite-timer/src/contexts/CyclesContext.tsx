import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAsFinishedAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interrupCurrentCycle: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  // REDUCER  RECEBE DOIS PARAMETROS, STATE E action
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setamountSecondsPassed] = useState(0)
  const { cycles, activeCycleId } = cyclesState

  // console.log(cyclesState)
  // console.log('cycles, activeCycleId', cycles, activeCycleId)
  // const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  // console.log('cycles, activeCycleId', cycles, activeCycleId)
  const activeCycle = cycles.find((cycle) => {
    //  console.log('activeCycleId', cycle)
    return cycle.id === activeCycleId
  })

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    // substituindo o setCycles pelo dispatch
    dispatch(addNewCycleAction(newCycle))
    //   setCycles((state) => [...state, newCycle]) // closures, faço no formato de function
    // setActiveCycleId(newCycle.id)
    setamountSecondsPassed(0)
    // reset()
  }

  function interrupCurrentCycle() {
    dispatch(interruptCurrentCycleAsFinishedAction())

    // dispatch(activeCycleId)
    /* setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    ) */

    //   setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
    /* setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    ) */
  }

  function setSecondsPassed(seconds: number) {
    setamountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interrupCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
