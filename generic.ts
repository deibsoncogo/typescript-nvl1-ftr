function useState<T extends string | number = string>() {
  let state: T

  function get() {
    return state
  }

  function set(newValue: T) {
    state = newValue
  }

  return { get, set }
}

let newState = useState<string>()

newState.set("Ativado")
newState.get()

/** padrões de utilização
 * S para state
 * T para type
 * K para key
 * V para value
 * E para element
 */
