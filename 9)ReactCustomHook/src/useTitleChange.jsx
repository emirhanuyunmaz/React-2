import { useEffect } from "react"

export default function useTitleChange(count) {
    useEffect(() => {
        document.title = `Sayı : ${count}`
      },[count])
}
