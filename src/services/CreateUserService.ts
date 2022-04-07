import { injectable } from "tsyringe";
import { User } from "../schemas/User";

interface CreateUserServiceDTO {
    email: string;
    socket_id: string;
    avatar: string;
    name: string;
}

@injectable()
export class CreateUserService {
    async execute({ avatar, email, name, socket_id }: CreateUserServiceDTO) {
        const userAlreadyExists = await User.findOne({ email }).exec()

        if (userAlreadyExists) {
            const user = await User.findOneAndUpdate(
                { _id: userAlreadyExists._id },
                { $set: { avatar, name, socket_id } },
                { new: true }
            )
            return user
        } else {
            const user = await User.create({
                email,
                socket_id,
                avatar,
                name,
            })

            return user
        }
    }
}