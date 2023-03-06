import { Helper } from "./Helper";

export const getTodo = (url) => {
    return Helper().get(url);
}