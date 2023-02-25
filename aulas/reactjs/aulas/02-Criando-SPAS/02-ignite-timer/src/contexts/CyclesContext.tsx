import { createContext, ReactNode, useReducer, useState } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

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
interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}
export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  // REDUCER  RECEBE DOIS PARAMETROS, STATE E action
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      // console.log(state)
      // console.log(action)
      switch (action.type) {
        case 'ADD_NEW_CYCLE':
          return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id,
          }
        case 'INTERRUPT_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, interruptedDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }

        case 'MARK_CURRENT_CYCLE_AS_FINISHED':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }

        default:
          return state
      }
    },
    { cycles: [], activeCycleId: null },
  )

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
    dispatch({ type: 'ADD_NEW_CYCLE', payload: { newCycle } })
    //   setCycles((state) => [...state, newCycle]) // closures, faço no formato de function
    // setActiveCycleId(newCycle.id)
    setamountSecondsPassed(0)
    // reset()
  }

  function interrupCurrentCycle() {
    dispatch({ type: 'INTERRUPT_CURRENT_CYCLE', payload: { activeCycleId } })

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
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: { activeCycleId },
    })
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
