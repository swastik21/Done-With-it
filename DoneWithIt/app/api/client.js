import { create } from 'apisauce'
import { NetworkInfo } from 'react-native-network-info'

// NetworkInfo.getIPV4Address().then(ip => {
//     console.log(ip)
// })

const apiClient = create({ baseURL: 'http://192.168.1.6:9000/api' })

export default apiClient