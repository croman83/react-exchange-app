import { useEffect, useRef } from "react";

export function useInterval(cb: () => void, delay: number, args: any[] = []) {
    const savedCb = useRef<() => void>()

    useEffect(() => {
        cb()
    }, [...args])

    useEffect(() => {
        savedCb.current = cb
    }, [cb])

    useEffect(() => {
        function tick() {
            savedCb.current?.()
        }

        if (delay !== null) {
            const id = setInterval(tick, delay)

            return () => {clearInterval(id)}
        }
        return undefined
    }, [cb, delay, ...args])
}
