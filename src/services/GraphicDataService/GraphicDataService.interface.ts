export interface IGraphData {
    category: string
    percentage: number
    type: number
}

export interface IGraphDataProps {
    execute: () => Promise<IGraphData[]>
  }
  