import { AxiosResponse } from 'axios'
import { INotifications } from './Notifications.interface'
import { apiBackendAuthenticated, getAccessToken } from "../../configs/api";
import { IGetNotificationsProps } from './Notifications.interface'

export class NotificationsService implements IGetNotificationsProps {
  getNotifications = async (): Promise<INotifications[]> => {
    const token = await getAccessToken()
    const { data } = await apiBackendAuthenticated.get('/notification/getNotification', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    
    return data
  }

  sendVisualizatedNotifications = async (
    id: string
  ): Promise<AxiosResponse> => {
    const token = await getAccessToken()
    const { data } = await apiBackendAuthenticated.put(
      '/notification/updateNotification',
      null,
      {
        params: {
          notificationId: id
        },
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    )
    return data
  }
}