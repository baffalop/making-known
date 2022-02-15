import { cubicOut } from 'svelte/easing'

export interface TransitionParams {
  reference: number
  delay?: number
  duration?: number
  easing?: (t: number) => number
}

export function fadeAndScale (node: HTMLElement, { reference, ...params }: TransitionParams) {
  const target = parseFloat(getComputedStyle(node).height.replace('px', ''))
  const difference = target - reference

  return {
    delay: params.delay || 0,
    duration: params.duration || 400,
    easing: params.easing || cubicOut,
    css: (t: number, u: number) => {
      const height = reference + (difference * t)
      return `opacity: ${t}; height: ${height}px;`
    }
  }
}

export function ondestroy (node: HTMLElement, callback: () => any) {
  return { destroy: callback }
}
