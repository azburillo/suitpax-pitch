"use client"

import { useEffect } from "react"

export default function ContentProtection() {
  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Prevent keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault()
        return false
      }

      // Prevent Ctrl+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault()
        return false
      }

      // Prevent PrintScreen
      if (e.key === "PrintScreen") {
        e.preventDefault()
        return false
      }
    }

    // Prevent drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Prevent copy
    const handleCopy = (e: ClipboardEvent) => {
      // Allow copy in input fields and textareas
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return true
      }
      e.preventDefault()
      return false
    }

    // Prevent print function
    const handleBeforePrint = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("dragstart", handleDragStart)
    document.addEventListener("copy", handleCopy)
    window.addEventListener("beforeprint", handleBeforePrint)

    // Add CSS to prevent selection
    const style = document.createElement("style")
    style.innerHTML = `
      .no-select {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `
    document.head.appendChild(style)

    // Apply no-select class to body
    document.body.classList.add("no-select")

    // Display a warning message when trying to leave the page
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const message = "Changes you made may not be saved."
      e.returnValue = message
      return message
    }
    window.addEventListener("beforeunload", handleBeforeUnload)

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("copy", handleCopy)
      window.removeEventListener("beforeprint", handleBeforePrint)
      window.removeEventListener("beforeunload", handleBeforeUnload)
      document.body.classList.remove("no-select")
      document.head.removeChild(style)
    }
  }, [])

  return null // This component doesn't render anything visible
}
