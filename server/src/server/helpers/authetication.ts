import config from '../../config/config'
import JWT from 'jsonwebtoken'
import { IUser } from '../types/user.type'

export const generateAccessToken = (user: IUser) => {
    return JWT.sign(user, config.accessToken, { expiresIn: '1hr'})
}