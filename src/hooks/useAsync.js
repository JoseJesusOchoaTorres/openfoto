import { useRef, useReducer, useCallback, useLayoutEffect } from 'react'

const defaultInitialState = { status: 'idle', data: null, error: null }

/**
 * This is a technique to prevent memory leaks
 * if the component unmounts.
 * 
 * @param {Function} dispatch 
 */
const useSafeDispatch = (dispatch) => {
  const mounted = useRef(false)
  
  useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  )
}

/**
 * useAsync is a custom hook to wrap and
 * manage async calls.
 * 
 * @param {*} initialState
 * 
 * @returns {boolean} isSuccess
 * @returns {boolean} isError
 * @returns {boolean} isIdle
 * @returns {string} status
 * @returns {string} error
 * @returns {Array} data
 * @callback setError
 * @callback setData
 * @callback reset
 * @callback run
 */
const useAsync = (initialState) => {
  const initialStateRef = useRef({
    ...defaultInitialState,
    ...initialState,
  })

  const [{ status, data, error }, setState] = useReducer(
    (s, a) => ({ ...s, ...a }),
    initialStateRef.current,
  )

  const safeSetState = useSafeDispatch(setState)

  const setData = useCallback(
    data => safeSetState({ data, status: 'resolved' }),
    [safeSetState]
  )

  const setError = useCallback(
    error => safeSetState({ error, status: 'rejected' }),
    [safeSetState]
  )

  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  )

  const run = useCallback(
    promise => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise.
          Maybe a function that's passed isn't returning anything?`,
        )
      }

      safeSetState({ status: 'pending' })

      return promise.then(
        data => {
          setData(data)
          return data
        },
        error => {
          setError(error)
          return Promise.reject(error)
        },
      )
    },
    [safeSetState, setData, setError],
  )

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',
    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  }
}

export { useAsync }