import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
export class GetChatRoomByIdService {
    async execute(idChatRoom) {
        const room = await ChatRoom.findOne({
            idChatRoom
        }).populate('idUsers').exec()

        return room
    }
}