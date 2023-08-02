import { useCallback } from "react";
import { debounce } from 'lodash'

export function Debounce(func: void, time: number, deps: Array<any>) {
  const handler = useCallback(
      debounce(
        func,
        time
      ),
      deps
    )

  return handler
}
