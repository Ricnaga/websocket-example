import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

interface CreateMessageServiceDTO {
    to: string;
    text: string;
    roomId: string;
}

@injectable()
export class CreateMessageService {
    async execute({ roomId, text, to }: CreateMessageServiceDTO) {
        const message = await Message.create({ roomId, text, to })

        return message
    }
}