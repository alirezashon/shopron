

// import { NextApiRequest, NextApiResponse } from 'next'
// import Sender from '../../models/Chat/Sender'
// import Message from '../../models/Chat/Message'
// import db from '../../utils'

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     await db.connect()

//     // Create a new sender
//     const senderData = { name: 'Akbaroghlo', hashTag: new Date().toString() }
//     const sender = new Sender(senderData)
//     await sender.save()

//     // Create a new message
//     const messageData = { sender: sender._id , message: 'Your message content here again',}
//     const message = new Message(messageData)
//     await message.save()

//     // Add the message to the sender's messages array
//     sender.messages.push(message._id)
//     await sender.save()

//     res.status(200).json({ success: true })
//   } catch (err) {
//     res.status(500).json({ success: false, message: `Server Error => ${err}` })
//   }
// }
 