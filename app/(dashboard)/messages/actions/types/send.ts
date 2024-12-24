export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'error'

export type Message = {
  id: string
  content: string
  sender: string
  timestamp: number
  status: MessageStatus
}

