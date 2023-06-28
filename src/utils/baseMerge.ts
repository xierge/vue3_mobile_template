interface IObject {
  [key: string | number]: unknown
}

export function baseMerge(origin: IObject, cur: IObject) {
  for (const key in cur) {
    if (validate(cur[key])) {
      origin[key] = cur[key]
    }
  }
}

function validate(value: unknown) {
  if (value === null || value === undefined) {
    return false
  }
}
