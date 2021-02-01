import React from "react"
import { getPolishEntity } from "./validation"

export const getValidatorMsg = (messages) => {
    return messages.map((message) => <div key={message}>{message}</div>)
}

export const getUniqueValidatorMsg = (messages, lang) => {
    return Object.keys(messages).map((field) => lang === "en" ? `${field} should be unique` : `pole ${getPolishEntity(field)} musi byc unikalne`)
}