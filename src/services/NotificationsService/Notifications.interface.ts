import { AxiosResponse } from 'axios'

export interface INotifications {
    id: string
    senderName: string
    message: string
    dateOfNotification: string
    status: boolean
    index: number
}

export interface IGetNotificationsProps {
  getNotifications: () => Promise<INotifications[]>
  sendVisualizatedNotifications: (id: string) => Promise<AxiosResponse>
}
