import { flashcards } from "../database/db";

export function getFlashcards(start, limit) {
    return flashcards.slice(start, start+limit)
}

export function getUsers(limit) {
    
}