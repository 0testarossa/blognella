import { validateOrReject } from "class-validator";

export async function validateOrRejectExample(input) {
    try {
      await validateOrReject(input)
      return []
    } catch (errors) {
    //   console.log('Caught promise rejection (validation failed). Errors: ', errors);
    //   throw errors;
    return errors;
    }
}

export const getPolishEntity = (entity) => {
    if(entity === "password") {
        return "hasło"
    } else if(entity === "role") {
        return "rola"
    } else if(entity === "date") {
        return "data"
    } else if(entity === "tags") {
        return "etykiety"
    } else if(entity === "title") {
        return "tytuł"
    } else if(entity === "content") {
        return "treść"
    } else if(entity === "comment") {
        return "komentarz"
    } else if(entity === "user") {
        return "użytkownik"
    } else if(entity === "post") {
        return "wpis"
    } else if(entity === "name") {
        return "nazwa"
    } else if(entity === "text") {
        return "tekst"
    }
    
    return entity;
}

const getValidationMsg = (englishConstraintMsg, constraint) => {
    const entity = getPolishEntity(getFirstWord(englishConstraintMsg));
    if(constraint === "isAlphanumeric") {
        return `pole ${entity} musi zawierać tylko litery i liczby`
    } else if(constraint === "isNotEmpty") {
        return `pole ${entity} nie jest dozwole puste`
    } else if(constraint === "isString") {
        return `pole ${entity} musi być tekstem`
    } else if(constraint === "notContains") {
        return `pole ${entity} nie może zawierać spacji`
    } else if(constraint === "minLength") {
        return `pole ${entity} musi zawierać co najmniej wymaganą liczbę znaków`
    } else if(constraint === "isEmail") {
        return `pole ${entity} musi być prawidłowym emailem`
    } else if(constraint === "isArray") {
        return `pole ${entity} musi być zbiorem etykiet`
    }else if(constraint === "isDateString") {
        return `pole ${entity} musi być w poprawnym formacie daty`
    }
    return "";
}

const getFirstWord = (string) => {
    return string.replace(/ .*/, '');
}

export const getAllValidationMsg = (validation:any, language:string ) => {
    const allValidationMsg = Object.keys(validation).map((con:any) => {
        if(con === "isAlphanumeric") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        } else if(con === "isNotEmpty") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        } else if(con === "isString") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        } else if(con === "notContains") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        } else if(con === "minLength") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        } else if(con === "isEmail") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        } else if(con === "isArray") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        } else if(con === "isDateString") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        return "";
    })
    return allValidationMsg;
}
