import axios from 'axios'

export const getNote = () => {
    return {
        type: 'GET_NOTE',
        payload: axios.get('http:// 192.168.6.196:3020/note')
    }
}