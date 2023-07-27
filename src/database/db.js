import CreateFlashcard from "../components/CreateFlashcard"
import CreateSubject from "../components/CreateSubject"
import CreateTopic from "../components/CreateTopic"
import { getUsers } from "../components/CreateUser"
export const subjects = CreateSubject(5)

export const topics = CreateTopic(30)

export const flashcards = CreateFlashcard(25)

export const users=getUsers(50)
console.log(users)