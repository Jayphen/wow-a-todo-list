export function elt(type: string, props: Record<string, any>, children: any[]) {
  const element = document.createElement(type);

  if (props) Object.assign(element, props);

  for (const child of children) {
    element.append(child);
  }
  return element;
}
