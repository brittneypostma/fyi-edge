export function load(event) {
  const netlifyEdge = event.platform.context
  console.log(netlifyEdge)
  return {
    netlifyEdge: JSON.stringify(netlifyEdge, null, 2)
  }
}