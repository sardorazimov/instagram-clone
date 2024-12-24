'use server'

import { revalidatePath } from 'next/cache'

export type Message = {
  id: string
  content: string
  sender: string
  timestamp: number
  status: 'sending' | 'sent' | 'delivered' | 'error'
}

// Simulate a database
let messages: Message[] = []

export async function sendMessage(content: string, sender: string) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const message: Message = {
    id: Math.random().toString(36).slice(2),
    content,
    sender,
    timestamp: Date.now(),
    status: 'sent'
  }
  
  messages.push(message)
  revalidatePath('/')
  return message
}

export async function getMessages() {
  return messages
}

