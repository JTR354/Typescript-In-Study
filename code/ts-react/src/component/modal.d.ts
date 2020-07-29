export interface IRow {
  id: number
  name: string
}
export type IToggle = (row?: IRow) => void